<script lang="ts">
    import * as RadioGroup from '$lib/components/ui/radio-group';
    import type { ErrorReturn } from '../shared/types';
    import { createToastErrorCtx } from './toast/context';
    import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';

    type onValueChangeType = ((value: string) => ErrorReturn) | undefined;

    type $$Props = RadioGroupPrimitive.Props & {
        onValueChange: onValueChangeType;
    };

    export let value: $$Props['value'] = undefined;
    export let onValueChange: onValueChangeType = undefined;
    export let disabled = false;

    const toastError = createToastErrorCtx();

    const changed = async (newValue: string | undefined) => {
        if (onValueChange === undefined) {
            return;
        }

        if (newValue === undefined) {
            return;
        }

        disabled = true;
        const startingState = value;
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
            $toastError = 'Error using radio group';
        } finally {
            disabled = false;
        }
    };
</script>

<RadioGroup.Root
    bind:value
    onValueChange="{changed}"
    {disabled}
    {...$$restProps}
>
    <slot />
</RadioGroup.Root>
