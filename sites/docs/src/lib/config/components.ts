export const components = [
    {
        component: 'button',
        name: 'Button',
        files: [
            'src/lib/components/ui/button/Button.svelte',
            'src/lib/components/ui/button/index.ts',
        ],
    },
    {
        component: 'checkbox',
        name: 'Checkbox',
        dependencies: ['radix-svelte'],
        files: [
            'src/lib/components/ui/checkbox/Checkbox.svelte',
            'src/lib/components/ui/checkbox/index.ts',
        ],
    },
    {
        component: 'radio-group',
        name: 'Radio Group',
        dependencies: ['radix-svelte'],
        files: [
            'src/lib/components/ui/radio-group/RadioGroup.svelte',
            'src/lib/components/ui/radio-group/RadioGroupItem.svelte',
            'src/lib/components/ui/radio-group/index.ts',
        ],
    },
    {
        component: 'switch',
        name: 'Switch',
        dependencies: ['radix-svelte'],
        files: [
            'src/lib/components/ui/switch/Switch.svelte',
            'src/lib/components/ui/switch/index.ts',
        ],
    },
    {
        component: 'toggle',
        name: 'Toggle',
        dependencies: ['radix-svelte'],
        files: [
            'src/lib/components/ui/toggle/Toggle.svelte',
            'src/lib/components/ui/toggle/index.ts',
        ],
    },
];
