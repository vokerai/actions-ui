---
title: Radio Group
description: A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. On error, reverts to the original state and alerts the user.
component: true
source: https://github.com/vokerai/actions-ui/tree/main/sites/docs/src/lib/registry/default/ui/loading-radio-group
basedOn: https://www.shadcn-svelte.com/docs/components/radio-group
bits: https://www.bits-ui.com/docs/components/radio-group
---

<script>
  import { ComponentPreview, ManualInstall, PMAddComp, PMInstall } from '$lib/components/docs';
</script>

<ComponentPreview name="radio-group-error">

<div />

</ComponentPreview>

## Installation

<PMAddComp name="radio-group" />

<ManualInstall>

1. Install `bits-ui`:

<PMInstall command="bits-ui" />

2. Copy and paste the component source files linked at the top of this page into your project.

</ManualInstall>

## Usage

```svelte
<script lang="ts">
    import { Label } from '$lib/components/ui/label';
    import * as ActionRadioGroup from '$lib/components/actions-ui/action-radio-group';
</script>

<ActionRadioGroup.Root value="option-one">
    <div class="flex items-center space-x-2">
        <ActionRadioGroup.Item value="option-one" id="option-one" />
        <Label for="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
        <ActionRadioGroup.Item value="option-two" id="option-two" />
        <Label for="option-two">Option Two</Label>
    </div>
</ActionRadioGroup.Root>
```

## Examples

### Success

<ComponentPreview name="radio-group-success">

<div />

</ComponentPreview>

### Error

<ComponentPreview name="radio-group-error">

<div />

</ComponentPreview>
