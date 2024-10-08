<script lang="ts">
    import * as ActionCheckbox from '../';
    export let trigger;
</script>

<ActionCheckbox.Root onCheckedChange="{trigger}" data-testid="root">
    <ActionCheckbox.ErrorToast title="Could not use checkbox" />
</ActionCheckbox.Root>
