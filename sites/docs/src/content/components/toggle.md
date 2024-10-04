---
title: Toggle
description: A two-state button that can be either on or off. On error, reverts to the original state and alerts the user.
component: true
source: https://github.com/vokerai/actions-ui/tree/main/sites/docs/src/lib/registry/default/ui/toggle
basedOn: https://www.shadcn-svelte.com/docs/components/toggle
bits: https://www.bits-ui.com/docs/components/toggle
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="toggle-error">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="toggle" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
    import * as LoadingToggle from '$lib/components/actions-ui/loading-toggle';
</script>

<LoadingToggle.Root aria-label="toggle bold">
    Toggle

    <!-- (optional) show error -->
    <LoadingToggle.Sonner title="Could not save toggle" />
</LoadingToggle.Root>
```

## Examples

### Success

<ComponentPreview name="toggle-success">

<div />

</ComponentPreview>

### Error

<ComponentPreview name="toggle-error">

<div />

</ComponentPreview>
