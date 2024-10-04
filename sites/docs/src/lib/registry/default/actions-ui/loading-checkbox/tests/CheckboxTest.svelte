<script lang="ts">
    import * as LoadingCheckbox from '$lib/components/action-ui/loading-checkbox/index';
    export let trigger;
</script>

<LoadingCheckbox.Root onCheckedChange="{trigger}" data-testid="root">
    <LoadingCheckbox.Sonner title="Could not use checkbox" />
</LoadingCheckbox.Root>
