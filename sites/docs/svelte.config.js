import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsx } from 'mdsx';
import { mdsxConfig } from './mdsx.config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        mdsx(mdsxConfig),
        vitePreprocess({
            style: {
                css: {
                    postcss: join(__dirname, 'postcss.config.cjs'),
                },
            },
        }),
    ],
    extensions: ['.svelte', '.md'],

    kit: {
        // https://kit.svelte.dev/docs/adapter-cloudflare#options
        // adapter: adapter({
        //     routes: {
        //         // Since we have so many static assets, we'll manually define
        //         // the globs for them to save our 100 include/exclude limit
        //         exclude: [
        //             '<build>',
        //             // prerendered content
        //             '/docs/*',
        //             '/blocks/*',
        //             '/blocks.html',
        //             '/docs.html',
        //             // static
        //             '/registry/*',
        //             '/fonts/*',
        //             '/avatars/*',
        //             '/images/*',
        //             '/favicon.png',
        //             '/og.png',
        //             '/schema.json',
        //             '/site.webmanifest',
        //         ],
        //     },
        // }),
        adapter: adapter(),
        prerender: {
            handleMissingId: (details) => {
                if (details.id === '#') return;
                console.warn(details.message);
            },
        },
    },
};

export default config;
