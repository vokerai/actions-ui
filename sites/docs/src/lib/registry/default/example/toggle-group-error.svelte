<script lang="ts">
    import Bold from 'lucide-svelte/icons/bold';
    import Italic from 'lucide-svelte/icons/italic';
    import Underline from 'lucide-svelte/icons/underline';
    import * as ActionToggleGroup from '$lib/registry/default/actions-ui/action-toggle-group';

    const onValueChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({ error: 'whoops' });
            }, 500);
        });
    };
</script>

<ActionToggleGroup.Root {onValueChange} type="multiple">
    <ActionToggleGroup.Item value="bold" aria-label="Toggle bold">
        <Bold class="h-4 w-4" />
    </ActionToggleGroup.Item>
    <ActionToggleGroup.Item value="italic" aria-label="Toggle italic">
        <Italic class="h-4 w-4" />
    </ActionToggleGroup.Item>
    <ActionToggleGroup.Item
        value="strikethrough"
        aria-label="Toggle strikethrough"
    >
        <Underline class="h-4 w-4" />
    </ActionToggleGroup.Item>
    <ActionToggleGroup.ErrorToast title="Could not save toggle group" />
</ActionToggleGroup.Root>
