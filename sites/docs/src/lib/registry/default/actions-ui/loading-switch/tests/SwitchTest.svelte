<script lang="ts">
    import * as LoadingSwitch from '$lib/components/action-ui/loading-switch/index';
    export let trigger;
</script>

<LoadingSwitch.Root onCheckedChange="{trigger}" data-testid="root">
    <LoadingSwitch.Sonner title="Could not use switch" />
</LoadingSwitch.Root>
