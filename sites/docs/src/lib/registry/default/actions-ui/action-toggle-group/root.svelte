<script lang="ts">
    import * as ToggleGroup from '$lib/components/ui/toggle-group';
    import type { ErrorReturn } from '../shared/types';
    import { createToastErrorCtx } from './toast/context';
    import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';

    type T = $$Generic<'single' | 'multiple'>;
    type onValueChangeType =
        | ((value: string | undefined) => ErrorReturn)
        | ((value: string[] | undefined) => ErrorReturn)
        | undefined;

    type $$Props = ToggleGroupPrimitive.Props<T> & {
        onValueChange: onValueChangeType;
    };
    export let value: $$Props['value'] = undefined;
    export let onValueChange: onValueChangeType = undefined;
    export let disabled = false;

    const toastError = createToastErrorCtx();

    const changed = async (newValue: string | string[] | undefined) => {
        if (onValueChange === undefined) {
            return;
        }

        disabled = true;
        const startingState = value === undefined ? [] : structuredClone(value);
        $toastError = undefined;

        try {
            const { error } = await onValueChange(newValue);

            if (error === undefined) {
                return;
            }

            value = startingState;
            $toastError = error;
        } catch {
            value = startingState;
            $toastError = 'Error using toggle group';
        } finally {
            disabled = false;
        }
    };
</script>

<ToggleGroup.Root
    bind:value
    onValueChange="{changed}"
    {disabled}
    {...$$restProps}
>
    <slot />
</ToggleGroup.Root>
