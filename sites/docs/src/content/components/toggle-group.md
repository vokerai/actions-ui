---
title: Toggle Group
description: A set of two-state buttons that can be toggled on or off. On error, reverts to the original state and alerts the user.
component: true
source: https://github.com/vokerai/actions-ui/tree/main/sites/docs/src/lib/registry/default/ui/loading-toggle-group
basedOn: https://www.shadcn-svelte.com/docs/components/toggle-group
bits: https://www.bits-ui.com/docs/components/toggle-group
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="toggle-group-error">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="toggle-group" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
    import * as LoadingToggleGroup from '$lib/components/actions-ui/loading-toggle-group';
</script>

<ToggleGroup.Root type="single">
    <ToggleGroup.Item value="a">A</ToggleGroup.Item>
    <ToggleGroup.Item value="b">B</ToggleGroup.Item>
    <ToggleGroup.Item value="c">C</ToggleGroup.Item>
</ToggleGroup.Root>
```

## Examples

### Success

<ComponentPreview name="toggle-group-success">

<div />

</ComponentPreview>

### Error

<ComponentPreview name="toggle-group-error">

<div />

</ComponentPreview>
