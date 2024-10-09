<script lang="ts">
    import * as ActionRadioGroup from '$lib/registry/default/actions-ui/action-radio-group';
    import { Label } from '$lib/registry/default/ui/label/index.js';

    const onValueChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({ error: 'whoops' });
            }, 500);
        });
    };
</script>

<ActionRadioGroup.Root {onValueChange} value="comfortable">
    <div class="flex items-center space-x-2">
        <ActionRadioGroup.Item value="default" id="r1" />
        <Label for="r1">Default</Label>
    </div>
    <div class="flex items-center space-x-2">
        <ActionRadioGroup.Item value="comfortable" id="r2" />
        <Label for="r2">Comfortable</Label>
    </div>
    <div class="flex items-center space-x-2">
        <ActionRadioGroup.Item value="compact" id="r3" />
        <Label for="r3">Compact</Label>
    </div>
    <ActionRadioGroup.Input name="spacing" />
    <ActionRadioGroup.ErrorToast title="Could not save radio group" />
</ActionRadioGroup.Root>
