<script lang="ts">
    import { Switch } from '$lib/components/ui/switch/index.ts';
    import { createSonnerCtx } from './sonner/context';
    import { Switch as SwitchPrimitive } from 'bits-ui';

    type $$Props = SwitchPrimitive.Props;

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
            $sonnerError = 'Error using switch';
        } finally {
            disabled = false;
        }
    };
</script>

<div>
    <Switch
        bind:checked
        onCheckedChange="{changed}"
        {disabled}
        {...$$restProps}
    />
    <slot />
</div>
