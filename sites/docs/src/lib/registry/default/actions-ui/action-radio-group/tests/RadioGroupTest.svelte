<script lang="ts">
    import * as ActionRadioGroup from '../';
    export let trigger;
    export let value;
</script>

<ActionRadioGroup.Root {value} onValueChange="{trigger}" data-testid="root">
    <ActionRadioGroup.Item value="default" />
    <ActionRadioGroup.Item value="comfortable" />
    <ActionRadioGroup.Item value="compact" />
    <ActionRadioGroup.ErrorToast title="Could not use radiogroup" />
</ActionRadioGroup.Root>
