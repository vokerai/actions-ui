<script lang="ts">
    import * as LoadingRadioGroup from '$lib/components/action-ui/loading-radio-group/index';
    export let trigger;
    export let value;
</script>

<LoadingRadioGroup.Root {value} onValueChange="{trigger}" data-testid="root">
    <LoadingRadioGroup.Item value="default" />
    <LoadingRadioGroup.Item value="comfortable" />
    <LoadingRadioGroup.Item value="compact" />
    <LoadingRadioGroup.Sonner title="Could not use radiogroup" />
</LoadingRadioGroup.Root>
