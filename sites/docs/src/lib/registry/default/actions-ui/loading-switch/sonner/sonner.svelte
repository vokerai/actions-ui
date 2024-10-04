<script lang="ts">
    import { toast } from 'svelte-sonner';
    import { getSonnerCtx } from './context';
    import { onMount } from 'svelte';

    export let title: string;

    const ctx = getSonnerCtx();

    const sendToast = (description: string | undefined) => {
        if (description === undefined) {
            return;
        }

        toast.error(title, { description });
    };

    onMount(() => {
        ctx.subscribe((description) => {
            sendToast(description);
        });
    });
</script>
