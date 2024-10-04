<script lang="ts">
    import Button from '$lib/components/ui/button/button.svelte';
    import { cn } from '$lib/utils';
    import { createSonnerCtx } from '../sonner/context';
    import { createLoadingCtx } from './context';
    import { Button as ButtonPrimitive } from 'bits-ui';

    type $$Props = ButtonPrimitive.Props & {
        trigger: () => Promise<{ error?: string | undefined }>;
    };

    let className: $$Props['class'] = undefined;
    export { className as class };

    export let trigger: () => Promise<{ error?: string | undefined }>;

    // HOW TO ALLOW THIS AS AN INPUT???
    const loading = createLoadingCtx();
    const sonnerError = createSonnerCtx();

    const click = async () => {
        $loading = true;
        $sonnerError = undefined;

        try {
            const { error } = await trigger();

            if (error === undefined) {
                return;
            }

            $sonnerError = error;
        } catch {
            $sonnerError = 'Error using button';
        } finally {
            $loading = false;
        }
    };
</script>

<Button
    class="{cn('flex select-none items-center space-x-1', className)}"
    on:click="{click}"
    disabled="{$loading}"
    {...$$restProps}
>
    <slot />
</Button>
