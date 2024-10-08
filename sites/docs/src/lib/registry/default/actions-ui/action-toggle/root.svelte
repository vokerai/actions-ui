<script lang="ts">
    import { Toggle } from '$lib/components/ui/toggle/index.ts';
    import type { ErrorReturn } from '../shared/types';
    import { createToastErrorCtx } from './toast/context';
    import { Toggle as TogglePrimitive } from 'bits-ui';

    type onPressedChangeType = ((value: boolean) => ErrorReturn) | undefined;

    type $$Props = TogglePrimitive.Props & {
        onPressedChange: onPressedChangeType;
    };
    export let pressed: $$Props['pressed'] = false;
    export let onPressedChange: onPressedChangeType = undefined;
    export let disabled = false;

    const toastError = createToastErrorCtx();

    const changed = async (newValue: boolean | 'indeterminate') => {
        if (onPressedChange === undefined) {
            return;
        }

        if (newValue === 'indeterminate') {
            return;
        }

        disabled = true;
        const startingState = pressed;
        $toastError = undefined;

        try {
            const { error } = await onPressedChange(newValue);

            if (error === undefined) {
                return;
            }

            pressed = startingState;
            $toastError = error;
        } catch {
            pressed = startingState;
            $toastError = 'Error using toggle';
        } finally {
            disabled = false;
        }
    };
</script>

<Toggle
    bind:pressed
    onPressedChange="{changed}"
    {disabled}
    {...$$restProps}
    role="toggle"
>
    <slot />
</Toggle>
