<script lang="ts">
    import { cn } from '$lib/utils';
    import { getLoadingCtx } from './context';
    import Spinner from '../shared/spinner.svelte';

    let className: string | undefined = undefined;
    export { className as class };

    const loading = getLoadingCtx();
</script>

<Spinner class="{cn($loading ? '' : 'hidden', className)}" {...$$restProps} />
