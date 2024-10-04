<script lang="ts">
    import Bold from 'lucide-svelte/icons/bold';
    import * as LoadingToggle from '$lib/registry/default/actions-ui/loading-toggle';

    const onPressedChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({});
            }, 500);
        });
    };
</script>

<LoadingToggle.Root {onPressedChange} aria-label="toggle bold">
    <Bold class="h-4 w-4" />
    <LoadingToggle.Sonner title="Could not save toggle" />
</LoadingToggle.Root>
