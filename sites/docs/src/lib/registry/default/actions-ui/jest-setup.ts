import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';
import type { Navigation, Page } from '@sveltejs/kit';
import { readable } from 'svelte/store';
import { configure } from '@testing-library/dom';
import type * as environment from '$app/environment';
import type * as navigation from '$app/navigation';
import type * as stores from '$app/stores';

expect.extend(matchers);

configure({
    asyncUtilTimeout: 1500,
});

// Mock SvelteKit runtime module $app/environment
vi.mock('$app/environment', (): typeof environment => ({
    browser: false,
    dev: true,
    building: false,
    version: 'any',
}));

// Mock SvelteKit runtime module $app/navigation
vi.mock('$app/navigation', (): typeof navigation => ({
    afterNavigate: () => {},
    beforeNavigate: () => {},
    disableScrollHandling: () => {},
    goto: () => Promise.resolve(),
    invalidate: () => Promise.resolve(),
    invalidateAll: () => Promise.resolve(),
    preloadData: () =>
        Promise.resolve({ type: 'loaded' as const, status: 200, data: {} }),
    preloadCode: () => Promise.resolve(),
    onNavigate: () => {},
    pushState: () => {},
    replaceState: () => {},
}));

// Mock SvelteKit runtime module $app/stores
vi.mock('$app/stores', (): typeof stores => {
    const getStores: typeof stores.getStores = () => {
        const navigating = readable<Navigation | null>(null);
        const page = readable<Page>({
            url: new URL('http://localhost'),
            params: {},
            route: {
                id: null,
            },
            status: 200,
            error: null,
            data: {},
            form: undefined,
            state: {},
        });
        const updated = {
            subscribe: readable(false).subscribe,
            check: async () => false,
        };

        return { navigating, page, updated };
    };

    const page: typeof stores.page = {
        subscribe(fn) {
            return getStores().page.subscribe(fn);
        },
    };
    const navigating: typeof stores.navigating = {
        subscribe(fn) {
            return getStores().navigating.subscribe(fn);
        },
    };
    const updated: typeof stores.updated = {
        subscribe(fn) {
            return getStores().updated.subscribe(fn);
        },
        check: async () => false,
    };

    return {
        getStores,
        navigating,
        page,
        updated,
    };
});

// eslint-disable-next-line ts/no-require-imports
// globalThis.ResizeObserver = require("resize-observer-polyfill");
Element.prototype.scrollIntoView = () => {};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});
