<script lang="ts">
    import * as ToggleGroup from '$lib/components/ui/toggle-group';
    import { createSonnerCtx } from './sonner/context';
    import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';

    type $$Props = ToggleGroupPrimitive.Props;
    export let value: $$Props['value'] = undefined;
    export let onValueChange:
        | ((
              value: string | undefined,
          ) => Promise<{ error?: string | undefined }>)
        | ((
              value: string[] | undefined,
          ) => Promise<{ error?: string | undefined }>);

    let disabled = false;
    const sonnerError = createSonnerCtx();

    const changed = async (newValue: string | string[] | undefined) => {
        disabled = true;
        const startingState = value === undefined ? [] : structuredClone(value);
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
            $sonnerError = 'Error using toggle group';
        } finally {
            disabled = false;
        }

        if (value === undefined) {
            // TODO: how to reset?
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
