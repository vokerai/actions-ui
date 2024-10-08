<script lang="ts">
    import * as ActionToggleGroup from '../';
    export let trigger;
    export let value;
</script>

<ActionToggleGroup.Root
    {value}
    type="single"
    onValueChange="{trigger}"
    data-testid="root"
>
    <ActionToggleGroup.Item value="a">A</ActionToggleGroup.Item>
    <ActionToggleGroup.Item value="b">B</ActionToggleGroup.Item>
    <ActionToggleGroup.Item value="c">C</ActionToggleGroup.Item>
    <ActionToggleGroup.ErrorToast title="Could not use toggle" />
</ActionToggleGroup.Root>
