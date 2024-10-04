<script lang="ts">
    import * as LoadingButton from '../';
    export let trigger;
</script>

<LoadingButton.Root {trigger} data-testid="root">
    <LoadingButton.Spinner />
    <LoadingButton.Content>Save</LoadingButton.Content>
    <LoadingButton.Loading>Saving</LoadingButton.Loading>
    <LoadingButton.Sonner title="Could not create graph" />
</LoadingButton.Root>
