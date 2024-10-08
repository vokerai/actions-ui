<script lang="ts">
    import * as ActionSwitch from '../';
    export let trigger;
</script>

<ActionSwitch.Root onCheckedChange="{trigger}" data-testid="root">
    <ActionSwitch.ErrorToast title="Could not use switch" />
</ActionSwitch.Root>
