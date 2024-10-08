import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [enhancedImages(), sveltekit()],
    test: {
        globals: true,
        include: ['src/**/*.{test,spec}.{js,ts}'],
        environment: 'jsdom',
        setupFiles: ['./src/lib/registry/default/actions-ui/jest-setup.ts'],
    },
});
