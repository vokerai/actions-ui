<script lang="ts">
    import { Icons } from '../icons/index.js';
    import { page } from '$app/stores';
    import { siteConfig } from '$lib/config/site.js';
    import { cn } from '$lib/utils.js';
</script>

<div class="mr-4 hidden md:flex">
    <a href="/" class="mr-6 flex items-center space-x-2">
        <Icons.logo class="h-6 w-6" />
        <span class="hidden font-bold xl:inline-block">
            {siteConfig.name}
        </span>
    </a>
    <nav class="flex items-center gap-6 text-sm">
        <a
            href="/docs"
            class="{cn(
                'transition-colors hover:text-foreground/80',
                $page.url.pathname === '/docs'
                    ? 'text-foreground'
                    : 'text-foreground/60',
            )}"
        >
            Docs
        </a>
        <a
            href="/docs/components"
            class="{cn(
                'transition-colors hover:text-foreground/80',
                $page.url.pathname.startsWith('/docs/components')
                    ? 'text-foreground'
                    : 'text-foreground/60',
            )}"
        >
            Components
        </a>
    </nav>
</div>
