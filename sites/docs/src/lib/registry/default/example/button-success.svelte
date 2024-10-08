<script lang="ts">
    import * as ActionButton from '$lib/registry/default/actions-ui/action-button';

    const onClick = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({});
            }, 500);
        });
    };
</script>

<ActionButton.Root {onClick} variant="secondary">
    <ActionButton.Spinner />
    <ActionButton.Content>Save</ActionButton.Content>
    <ActionButton.Loading>Saving</ActionButton.Loading>
    <ActionButton.ErrorToast title="Could not save" />
</ActionButton.Root>
