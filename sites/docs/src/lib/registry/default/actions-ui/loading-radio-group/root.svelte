<script lang="ts">
    import * as RadioGroup from '$lib/components/ui/radio-group';
    import { createSonnerCtx } from './sonner/context';
    import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';

    type $$Props = RadioGroupPrimitive.Props;

    export let value: $$Props['value'] = undefined;
    export let onValueChange: (
        value: string,
    ) => Promise<{ error?: string | undefined }>;

    let disabled = false;
    const sonnerError = createSonnerCtx();

    const changed = async (newValue: string | undefined) => {
        if (newValue === undefined) {
            return;
        }

        disabled = true;
        const startingState = value;
        $sonnerError = undefined;

        try {
            const { error } = await onValueChange(newValue);

            if (error === undefined) {
                return;
            }

            value = startingState;
            $sonnerError = error;
        } catch {
            value = startingState;
            $sonnerError = 'Error using radio group';
        } finally {
            disabled = false;
        }

        if (value === undefined) {
            // TODO: how to reset?
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
