<script lang="ts">
    import { Checkbox } from '$lib/components/ui/checkbox/index.js';
    import { createSonnerCtx } from './sonner/context';
    import { Checkbox as CheckBoxPrimitive } from 'bits-ui';

    type $$Props = CheckBoxPrimitive.Props;

    export let checked: $$Props['checked'] = false;
    export let onCheckedChange: (
        value: boolean,
    ) => Promise<{ error?: string | undefined }>;

    let disabled = false;

    const sonnerError = createSonnerCtx();

    const changed = async (newValue: boolean | 'indeterminate') => {
        if (newValue === 'indeterminate') {
            return;
        }

        disabled = true;
        const startingState = checked;
        $sonnerError = undefined;

        try {
            const { error } = await onCheckedChange(newValue);

            if (error === undefined) {
                return;
            }

            checked = startingState;
            $sonnerError = error;
        } catch {
            checked = startingState;
            $sonnerError = 'Error using checkbox';
        } finally {
            disabled = false;
        }
    };
</script>

<div>
    <Checkbox
        bind:checked
        onCheckedChange="{changed}"
        {disabled}
        {...$$restProps}
    />
    <slot />
</div>
