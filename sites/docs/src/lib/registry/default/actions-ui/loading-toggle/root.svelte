<script lang="ts">
    import { Toggle } from '$lib/components/ui/toggle/index.ts';
    import { createSonnerCtx } from './sonner/context';
    import { Toggle as TogglePrimitive } from 'bits-ui';

    type $$Props = TogglePrimitive.Props;
    export let pressed: $$Props['pressed'] = false;
    export let onPressedChange: (
        value: boolean,
    ) => Promise<{ error?: string | undefined }>;

    let disabled = false;
    const sonnerError = createSonnerCtx();

    const changed = async (newValue: boolean | 'indeterminate') => {
        if (newValue === 'indeterminate') {
            return;
        }

        disabled = true;
        const startingState = pressed;
        $sonnerError = undefined;

        try {
            const { error } = await onPressedChange(newValue);

            if (error === undefined) {
                return;
            }

            pressed = startingState;
            $sonnerError = error;
        } catch {
            pressed = startingState;
            $sonnerError = 'Error using toggle';
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
