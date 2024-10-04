<script lang="ts">
    import { ExamplesNav } from '$lib/components/docs/index.js';
    import * as PageHeader from '$lib/components/docs/page-header/index.js';
    import { Icons } from '$lib/components/docs/icons/index.js';
    import { buttonVariants } from '$lib/registry/default/ui/button/index.js';
    import { siteConfig } from '$lib/config/site.js';
    import { cn } from '$lib/utils.js';
    import MailLight from '$lib/img/examples/mail-light.png?enhanced';
    import MailDark from '$lib/img/examples/mail-dark.png?enhanced';

    export let data;
</script>

<div class="container relative">
    <PageHeader.Root class="pb-8">
        <PageHeader.Heading>
            Enhance your components with request handling
        </PageHeader.Heading>
        <PageHeader.Description class="text-muted-foreground">
            Beautifully designed shadcn components that handle request—disable
            buttons, show spinners, and display errors. Accessible.
            Customizable. Open Source.
        </PageHeader.Description>
        <div
            class="flex w-full items-center justify-center space-x-4 py-4 md:pb-10"
        >
            <a href="/docs" class="{cn(buttonVariants())}">Get Started</a>
            <a
                target="_blank"
                rel="noreferrer"
                href="{siteConfig.links.github}"
                class="{cn(buttonVariants({ variant: 'outline' }))}"
            >
                <Icons.gitHub class="mr-2 h-4 w-4" />
                GitHub
            </a>
        </div>
    </PageHeader.Root>
    <!-- <section
        class="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl"
    >
        <div class="md:hidden">
            <enhanced:img
                src="{MailLight}"
                alt="Mail"
                class="block dark:hidden"
            ></enhanced:img>
            <enhanced:img
                src="{MailDark}"
                alt="Mail"
                class="hidden dark:block"
            ></enhanced:img>
        </div>
    </section> -->
    <!-- <section class="hidden md:block">
        <div
            class="overflow-hidden rounded-lg border bg-background shadow-lg"
        ></div>
    </section> -->
</div>
