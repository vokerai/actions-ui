import type { NavItem, SidebarNavItem } from '$lib/types/nav.js';

type DocsConfig = {
    mainNav: NavItem[];
    sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: 'Documentation',
            href: '/docs',
        },
        {
            title: 'Components',
            href: '/docs/components/button',
        },
        {
            title: 'GitHub',
            href: 'https://github.com/vokerai/actions-ui',
            external: true,
        },
    ],
    sidebarNav: [
        {
            title: 'Getting Started',
            items: [
                {
                    title: 'Introduction',
                    href: '/docs',
                    items: [],
                },
                {
                    title: 'Installation',
                    href: '/docs/installation',
                    items: [],
                },
                {
                    title: 'components.json',
                    href: '/docs/components-json',
                    items: [],
                },
                {
                    title: 'CLI',
                    href: '/docs/cli',
                    items: [],
                },
                // {
                //     title: 'Changelog',
                //     href: '/docs/changelog',
                //     items: [],
                // },
                {
                    title: 'About',
                    href: '/docs/about',
                    items: [],
                },
            ],
        },
        {
            title: 'Components',
            items: [
                {
                    title: 'Button',
                    href: '/docs/components/button',
                    items: [],
                },
                {
                    title: 'Checkbox',
                    href: '/docs/components/checkbox',
                    items: [],
                },
                {
                    title: 'Radio Group',
                    href: '/docs/components/radio-group',
                    items: [],
                },
                {
                    title: 'Switch',
                    href: '/docs/components/switch',
                    items: [],
                },
                {
                    title: 'Toggle',
                    href: '/docs/components/toggle',
                    items: [],
                },
                {
                    title: 'Toggle Group',
                    href: '/docs/components/toggle-group',
                    items: [],
                },
            ],
        },
    ],
};

type Example = {
    name: string;
    href: string;
    label?: string;
    code: string;
};
export const examples: Example[] = [];
