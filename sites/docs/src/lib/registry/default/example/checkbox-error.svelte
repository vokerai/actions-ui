<script lang="ts">
    import * as ActionCheckbox from '$lib/registry/default/actions-ui/action-checkbox';

    const onCheckedChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({ error: 'could not save' });
            }, 500);
        });
    };
</script>

<ActionCheckbox.Root {onCheckedChange}>
    <ActionCheckbox.ErrorToast title="Could not use checkbox" />
</ActionCheckbox.Root>
