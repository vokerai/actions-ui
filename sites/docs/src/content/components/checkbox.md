---
title: Checkbox
description: A control that allows the user to toggle between checked and not checked. On error, reverts to the original state and alerts the user.
component: true
source: https://github.com/vokerai/actions-ui/tree/main/sites/docs/src/lib/registry/default/ui/action-checkbox
basedOn: https://www.shadcn-svelte.com/docs/components/checkbox
bits: https://www.bits-ui.com/docs/components/checkbox
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="checkbox-error">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="checkbox" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
    import * as ActionCheckbox from '$lib/components/actions-ui/action-checkbox';
</script>
```

```svelte
<ActionCheckbox.Root onCheckedChange="{trigger}">
    <!-- (optional) show error message -->
    <ActionCheckbox.ErrorToast title="Could not use checkbox" />
</ActionCheckbox.Root>
```

## Examples

### Success

<ComponentPreview name="checkbox-success">

<div />

</ComponentPreview>

### Error

<ComponentPreview name="checkbox-error">

<div />

</ComponentPreview>
