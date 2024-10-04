<script lang="ts">
    import { Label } from '$lib/registry/default/ui/label/index.js';
    import * as LoadingSwitch from '$lib/registry/default/actions-ui/loading-switch';

    const onCheckedChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({});
            }, 500);
        });
    };
</script>

<div class="flex items-center space-x-2">
    <LoadingSwitch.Root {onCheckedChange} id="airplane-mode">
        <LoadingSwitch.Sonner title="Could not save switch" />
    </LoadingSwitch.Root>
    <Label for="airplane-mode">Airplane Mode</Label>
</div>
