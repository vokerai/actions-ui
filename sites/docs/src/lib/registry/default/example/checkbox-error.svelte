<script lang="ts">
    import * as LoadingCheckbox from '$lib/registry/default/actions-ui/loading-checkbox';

    const onCheckedChange = async () => {
        return new Promise((r) => {
            setTimeout(() => {
                r({ error: 'could not save' });
            }, 500);
        });
    };
</script>

<LoadingCheckbox.Root {onCheckedChange}>
    <LoadingCheckbox.Sonner title="Could not use checkbox" />
</LoadingCheckbox.Root>
