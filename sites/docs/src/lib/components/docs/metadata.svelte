<script lang="ts">
    import { dev } from '$app/environment';
    import { page } from '$app/stores';
    import { siteConfig } from '$lib/config/site.js';

    export let title: string = siteConfig.name;

    $: title = $page.data?.title
        ? `${$page.data.title} - ${siteConfig.name}`
        : siteConfig.name;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{siteConfig.description}" />
    <meta name="keywords" content="{siteConfig.keywords}" />
    <meta name="author" content="voker" />
    <meta property="og:title" content="{title}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="{siteConfig.url + $page.url.pathname}" />
    <meta property="og:image" content="https://shadcn-svelte.com/og.png" />
    <meta property="og:image:alt" content="{siteConfig.name}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:description" content="{siteConfig.description}" />
    <meta property="og:site_name" content="{siteConfig.name}" />
    <meta property="og:locale" content="EN_US" />
    {#if !dev}
        <script
            defer
            data-domain="shadcn-svelte.com"
            src="https://server.hj.run/js/script.js"
        ></script>
    {/if}
</svelte:head>
