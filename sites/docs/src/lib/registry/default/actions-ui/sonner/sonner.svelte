<script lang="ts">
    import Sonner from '$lib/components/ui/sonner/sonner.svelte';
    import { toast } from 'svelte-sonner';
    import { getToastErrorCtx } from './context';
    import { getContext, onMount } from 'svelte';
    import { browser } from '$app/environment';

    export let title: string;

    const ctx = getToastErrorCtx();

    const sendToast = (description: string | undefined) => {
        if (description === undefined) {
            return;
        }

        toast.error(title, { description });
    };

    onMount(() => {
        if (ctx !== undefined) {
            ctx.subscribe((description) => {
                sendToast(description);
            });
        }
    });
</script>

<Sonner richColors />
