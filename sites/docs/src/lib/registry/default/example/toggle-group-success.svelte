<script lang="ts">
    import Bold from 'lucide-svelte/icons/bold';
    import Italic from 'lucide-svelte/icons/italic';
    import Underline from 'lucide-svelte/icons/underline';
    import * as LoadingToggleGroup from '$lib/registry/default/actions-ui/loading-toggle-group';

    const onValueChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({});
            }, 500);
        });
    };
</script>

<LoadingToggleGroup.Root {onValueChange} type="multiple">
    <LoadingToggleGroup.Item value="bold" aria-label="Toggle bold">
        <Bold class="h-4 w-4" />
    </LoadingToggleGroup.Item>
    <LoadingToggleGroup.Item value="italic" aria-label="Toggle italic">
        <Italic class="h-4 w-4" />
    </LoadingToggleGroup.Item>
    <LoadingToggleGroup.Item
        value="strikethrough"
        aria-label="Toggle strikethrough"
    >
        <Underline class="h-4 w-4" />
    </LoadingToggleGroup.Item>
    <LoadingToggleGroup.Sonner title="Could not save toggle group" />
</LoadingToggleGroup.Root>
