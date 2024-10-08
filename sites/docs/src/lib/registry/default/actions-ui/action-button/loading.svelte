<script lang="ts">
    import { cn } from '$lib/utils';
    import { getLoadingCtx } from './context';

    let className: string | undefined = undefined;
    export { className as class };

    const loading = getLoadingCtx();
</script>

<div class="{cn($loading ? '' : 'hidden', className)}" {...$$restProps}>
    <slot />
</div>
