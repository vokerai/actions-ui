<script lang="ts">
    import * as LoadingToggleGroup from '$lib/components/action-ui/loading-toggle-group/index';
    export let trigger;
    export let value;
</script>

<LoadingToggleGroup.Root
    {value}
    type="single"
    onValueChange="{trigger}"
    data-testid="root"
>
    <LoadingToggleGroup.Item value="a">A</LoadingToggleGroup.Item>
    <LoadingToggleGroup.Item value="b">B</LoadingToggleGroup.Item>
    <LoadingToggleGroup.Item value="c">C</LoadingToggleGroup.Item>
    <LoadingToggleGroup.Sonner title="Could not use toggle" />
</LoadingToggleGroup.Root>
