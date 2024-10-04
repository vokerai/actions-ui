<script lang="ts">
    import * as LoadingButton from '$lib/registry/default/actions-ui/loading-button';

    const trigger = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({ error: 'whoops' });
            }, 500);
        });
    };
</script>

<LoadingButton.Root {trigger}>
    <LoadingButton.Spinner />
    <LoadingButton.Content>Save</LoadingButton.Content>
    <LoadingButton.Loading>Saving</LoadingButton.Loading>
    <LoadingButton.Sonner title="Could not save" />
</LoadingButton.Root>
