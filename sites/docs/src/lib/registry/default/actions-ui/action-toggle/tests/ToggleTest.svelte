<script lang="ts">
    import * as ActionToggle from '../';
    export let trigger;
</script>

<ActionToggle.Root onPressedChange="{trigger}" data-testid="root">
    <p>hi</p>
    <ActionToggle.ErrorToast title="Could not use toggle" />
</ActionToggle.Root>
