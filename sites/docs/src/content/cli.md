---
title: CLI
description: Use the CLI to add components to your project.
---

<script>
	import { PMExecute } from '$lib/components/docs'
</script>

## init

Use the `init` command to initialize dependencies for a new project.

<PMExecute command="actions-ui@latest init" />

### Options

```txt
Usage: actions-ui init [options]

initialize your project and install dependencies

Options:
  -c, --cwd <cwd>            the working directory (default: the current directory)
  --no-deps                  disable adding & installing dependencies
  --proxy <proxy>            fetch components from registry using a proxy
  -h, --help                 display help for command
```

## add

Use the `add` command to add components and dependencies to your project.

<PMExecute command="actions-ui@latest add [component]" />

You will be presented with a list of components to choose from:

```txt
Which components would you like to add? › Space to select. Return to submit.

◯  button
◯  checkbox
◯  radio-group
◯  select
◯  switch
◯  toggle-group
◯  toggle
```

### Options

```txt
Usage: actions-ui add [options] [components...]

add components to your project

Arguments:
  components         name of components

Options:
  -c, --cwd <cwd>    the working directory (default: the current directory)
  --no-deps          skips adding & installing package dependencies
  -a, --all          install all components to your project (default: false)
  -y, --yes          skip confirmation prompt (default: false)
  -o, --overwrite    overwrite existing files (default: false)
  --proxy <proxy>    fetch components from registry using a proxy
  -p, --path <path>  the path to add the component to
  -h, --help         display help for command
```

## update

Use the `update` command to update components in your project. This will overwrite any modifications you've made to the components, so be sure to commit your changes before running this command.

<PMExecute command="actions-ui@latest update [component]" />

### Options

```txt
Usage: actions-ui update [options] [components...]

update components in your project

Arguments:
  components       name of components

Options:
  -c, --cwd <cwd>  the working directory (default: the current directory)
  -a, --all        update all existing components (default: false)
  -y, --yes        skip confirmation prompt (default: false)
  --proxy <proxy>  fetch components from registry using a proxy
  -h, --help       display help for command
```

## Outgoing Requests

### Proxy

This enables the use of a proxy when sending out requests to fetch from the `shadcn` registry. If the `HTTP_PROXY` or `http_proxy` environment variables have been set, the request library underneath will respect the proxy settings.

```bash
HTTP_PROXY="<proxy-url>" npx actions-ui@latest init
```
