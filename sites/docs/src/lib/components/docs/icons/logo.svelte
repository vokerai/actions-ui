<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';

    type $$Props = HTMLAttributes<SVGElement>;
</script>

<img
    src="/light-favicon.png"
    alt="voker logo"
    class="block h-6 w-6 dark:hidden"
/>
<img
    src="/dark-favicon.png"
    alt="voker logo"
    class="hidden h-6 w-6 dark:block"
/>
