<script lang="ts">
    import * as ActionButton from '../';
    export let onClick;
</script>

<ActionButton.Root {onClick} data-testid="root">
    <ActionButton.Spinner />
    <ActionButton.Content>Save</ActionButton.Content>
    <ActionButton.Loading>Saving</ActionButton.Loading>
    <ActionButton.ErrorToast title="Could not create graph" />
</ActionButton.Root>
