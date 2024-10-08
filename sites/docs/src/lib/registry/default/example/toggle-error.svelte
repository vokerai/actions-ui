<script lang="ts">
    import Bold from 'lucide-svelte/icons/bold';
    import * as ActionToggle from '$lib/registry/default/actions-ui/action-toggle';

    const onPressedChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({ error: 'whoops' });
            }, 500);
        });
    };
</script>

<ActionToggle.Root {onPressedChange} aria-label="toggle bold">
    <Bold class="h-4 w-4" />
    <ActionToggle.ErrorToast title="Could not save toggle" />
</ActionToggle.Root>
