---
title: Toggle Group
description: A set of two-state buttons that can be toggled on or off. On error, reverts to the original state and alerts the user.
component: true
source: https://github.com/vokerai/actions-ui/tree/main/sites/docs/src/lib/registry/default/ui/action-toggle-group
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
    import * as ActionToggleGroup from '$lib/components/actions-ui/action-toggle-group';
</script>

<ActionToggleGroup.Root type="single">
    <ActionToggleGroup.Item value="a">A</ActionToggleGroup.Item>
    <ActionToggleGroup.Item value="b">B</ActionToggleGroup.Item>
    <ActionToggleGroup.Item value="c">C</ActionToggleGroup.Item>
</ActionToggleGroup.Root>
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
