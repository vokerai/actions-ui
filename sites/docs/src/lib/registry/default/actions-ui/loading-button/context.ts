import { getContext, setContext } from 'svelte';
import { type Writable, writable } from 'svelte/store';

const loadingKey = 'button-loading';

export const createLoadingCtx = (
    initialValue: boolean = false,
): Writable<boolean> => {
    const loading = writable(initialValue);
    setContext(loadingKey, loading);
    return loading;
};

export const getLoadingCtx = (): Writable<boolean> => {
    return getContext<Writable<boolean>>(loadingKey);
};
