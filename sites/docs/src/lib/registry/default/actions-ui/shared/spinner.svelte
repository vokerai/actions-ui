<script lang="ts">
    import { cn } from '$lib/utils';
    import LoaderCircle from 'lucide-svelte/icons/loader-circle';

    let className: string | undefined = undefined;
    export { className as class };
</script>

<LoaderCircle
    class="{cn('h-4 w-4 animate-spin', className)}"
    {...$$restProps}
/>
