---
title: switch
description: A control that allows the user to toggle between checked and not checked. On error, reverts to the original state and alerts the user.
component: true
source: https://github.com/vokerai/actions-ui/tree/main/sites/docs/src/lib/registry/default/ui/loading-switch
basedOn: https://www.shadcn-svelte.com/docs/components/switch
bits: https://www.bits-ui.com/docs/components/switch
---

<script>
    import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs'
</script>

<ComponentPreview name="switch-error">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="switch" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
    import * as LoadingLoadingSwitch from '$lib/components/actions-ui/loading-switch';
</script>

<LoadingSwitch.Root>
    <LoadingSwitch.Trigger class="w-[180px]">
        <LoadingSwitch.Value placeholder="Theme" />
    </LoadingSwitch.Trigger>
    <LoadingSwitch.Content>
        <LoadingSwitch.Item value="light">Light</LoadingSwitch.Item>
        <LoadingSwitch.Item value="dark">Dark</LoadingSwitch.Item>
        <LoadingSwitch.Item value="system">System</LoadingSwitch.Item>
    </LoadingSwitch.Content>
</LoadingSwitch.Root>
```

## Examples

### Success

<ComponentPreview name="switch-success">

<div />

</ComponentPreview>

### Error

<ComponentPreview name="switch-error">

<div />

</ComponentPreview>
