---
title: Button
description: Displays a button or a component that looks like a button. On error, alerts the user.
featured: true
component: true
source: https://github.com/vokerai/actions-ui/tree/main/sites/docs/src/lib/registry/default/ui/loading-button
basedOn: https://www.shadcn-svelte.com/docs/components/button
bits: https://www.bits-ui.com/docs/components/button
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="button-error">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="button" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
    import * as LoadingButton from '$lib/components/actions-ui/loading-button';
</script>
```

```svelte
<LoadingButton.Root {trigger}>
    <!-- (optional) shows spinner while loading -->
    <LoadingButton.Spinner />

    <!-- content to show before loading -->
    <LoadingButton.Content>Save</LoadingButton.Content>

    <!-- content to show while loading -->
    <LoadingButton.Loading>Saving</LoadingButton.Loading>

    <!-- (optional) error popup -->
    <LoadingButton.Sonner title="Could not save" />
</LoadingButton.Root>
```

## Examples

### Success

<ComponentPreview name="button-success">

<div />

</ComponentPreview>

---

### Error

<ComponentPreview name="button-error">

<div />

</ComponentPreview>
