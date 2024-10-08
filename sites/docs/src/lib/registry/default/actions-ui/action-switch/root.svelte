<script lang="ts">
    import { Switch } from '$lib/components/ui/switch';
    import type { ErrorReturn } from '../shared/types';
    import { createToastErrorCtx } from './toast/context';
    import { Switch as SwitchPrimitive } from 'bits-ui';

    type onCheckedChangeType = ((value: boolean) => ErrorReturn) | undefined;

    type $$Props = SwitchPrimitive.Props & {
        onCheckedChange: onCheckedChangeType;
    };

    export let checked: $$Props['checked'] = false;
    export let onCheckedChange: onCheckedChangeType = undefined;
    export let disabled = false;

    const toastError = createToastErrorCtx();

    const changed = async (newValue: boolean | 'indeterminate') => {
        if (onCheckedChange === undefined) {
            return;
        }

        if (newValue === 'indeterminate') {
            return;
        }

        disabled = true;
        const startingState = checked;
        $toastError = undefined;

        try {
            const { error } = await onCheckedChange(newValue);

            if (error === undefined) {
                return;
            }

            checked = startingState;
            $toastError = error;
        } catch {
            checked = startingState;
            $toastError = 'Error using switch';
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
