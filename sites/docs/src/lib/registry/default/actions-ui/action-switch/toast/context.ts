import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const sonnerContextKey = 'actionsui-sonner-error';

export let createToastErrorCtx = (): Writable<string | undefined> => {
    const ctx = writable<string | undefined>(undefined);
    setContext(sonnerContextKey, ctx);
    return ctx;
};

export let getToastErrorCtx = (): Writable<string | undefined> => {
    return getContext<Writable<string | undefined>>(sonnerContextKey);
};
