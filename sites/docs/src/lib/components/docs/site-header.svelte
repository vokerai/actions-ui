<script lang="ts">
    import {
        CommandMenu,
        Icons,
        MainNav,
        MobileNav,
        ModeToggle,
    } from '$lib/components/docs/index.js';
    import { buttonVariants } from '$lib/registry/default/ui/button/index.js';
    import { siteConfig } from '$lib/config/site.js';
    import { cn } from '$lib/utils.js';
</script>

<header
    class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
    <div class="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div
            class="flex flex-1 items-center justify-between space-x-2 md:justify-end"
        >
            <div class="w-full flex-1 md:w-auto md:flex-none">
                <CommandMenu />
            </div>
            <nav class="flex items-center">
                <a
                    href="{siteConfig.links.github}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div
                        class="{cn(
                            buttonVariants({
                                size: 'sm',
                                variant: 'ghost',
                            }),
                            'h-8 w-8 px-0',
                        )}"
                    >
                        <Icons.gitHub class="h-4 w-4" />
                        <span class="sr-only">GitHub</span>
                    </div>
                </a>
                <ModeToggle />
            </nav>
        </div>
    </div>
</header>
