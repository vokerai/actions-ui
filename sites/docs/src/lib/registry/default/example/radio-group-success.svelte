<script lang="ts">
    import * as LoadingRadioGroup from '$lib/registry/default/actions-ui/loading-radio-group';
    import { Label } from '$lib/registry/default/ui/label/index.js';

    const onValueChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({});
            }, 500);
        });
    };
</script>

<LoadingRadioGroup.Root {onValueChange} value="comfortable">
    <div class="flex items-center space-x-2">
        <LoadingRadioGroup.Item value="default" id="r1" />
        <Label for="r1">Default</Label>
    </div>
    <div class="flex items-center space-x-2">
        <LoadingRadioGroup.Item value="comfortable" id="r2" />
        <Label for="r2">Comfortable</Label>
    </div>
    <div class="flex items-center space-x-2">
        <LoadingRadioGroup.Item value="compact" id="r3" />
        <Label for="r3">Compact</Label>
    </div>
    <LoadingRadioGroup.Input name="spacing" />
    <LoadingRadioGroup.Sonner title="Could not save radio group" />
</LoadingRadioGroup.Root>
