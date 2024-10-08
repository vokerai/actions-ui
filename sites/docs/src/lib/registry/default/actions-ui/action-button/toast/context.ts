import { getContext, setContext } from 'svelte';
import { writable, type Writable } from 'svelte/store';

const toastContextErrorKey = 'actionsui-sonner-error';

export let createToastErrorCtx = (): Writable<string | undefined> => {
    const ctx = writable<string | undefined>(undefined);
    setContext(toastContextErrorKey, ctx);
    return ctx;
};

export let getToastErrorCtx = (): Writable<string | undefined> => {
    return getContext<Writable<string | undefined>>(toastContextErrorKey);
};
