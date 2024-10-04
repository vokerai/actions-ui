<script lang="ts">
    import * as LoadingToggle from '$lib/components/action-ui/loading-toggle/index';
    export let trigger;
</script>

<LoadingToggle.Root onPressedChange="{trigger}" data-testid="root">
    <p>hi</p>
    <LoadingToggle.Sonner title="Could not use toggle" />
</LoadingToggle.Root>
