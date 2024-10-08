<script lang="ts">
    import { Label } from '$lib/registry/default/ui/label/index.js';
    import * as ActionSwitch from '$lib/registry/default/actions-ui/action-switch';

    const onCheckedChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({});
            }, 500);
        });
    };
</script>

<div class="flex items-center space-x-2">
    <ActionSwitch.Root {onCheckedChange} id="airplane-mode">
        <ActionSwitch.ErrorToast title="Could not save switch" />
    </ActionSwitch.Root>
    <Label for="airplane-mode">Airplane Mode</Label>
</div>
