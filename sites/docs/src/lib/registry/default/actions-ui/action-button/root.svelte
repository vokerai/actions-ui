<script lang="ts">
    import { Button, type ButtonProps } from '$lib/components/ui/button';
    import { cn } from '$lib/utils';
    import { createToastErrorCtx } from './toast/context';
    import { createLoadingCtx } from './context';
    import type { ErrorReturn } from '../shared/types';

    type onClickType = () => ErrorReturn;

    type $$Props = ButtonProps & {
        onClick: onClickType;
    };

    let className: $$Props['class'] = undefined;
    export { className as class };

    export let onClick: onClickType | undefined = undefined;

    // TODO: HOW TO ALLOW THIS AS AN INPUT???
    const disabled = createLoadingCtx();
    const toastError = createToastErrorCtx();

    const click = async () => {
        if (onClick === undefined) {
            return;
        }

        $disabled = true;
        $toastError = undefined;

        try {
            const { error } = await onClick();

            if (error === undefined) {
                return;
            }

            $toastError = error;
        } catch {
            $toastError = 'Error using button';
        } finally {
            $disabled = false;
        }
    };
</script>

<Button
    class="{cn('flex select-none items-center space-x-1', className)}"
    on:click="{click}"
    disabled="{$disabled}"
    {...$$restProps}
>
    <slot />
</Button>
