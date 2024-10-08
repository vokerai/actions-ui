import * as v from "valibot";

export const registryItemSchema = v.object({
	name: v.string(),
	dependencies: v.array(v.string()),
	registryDependencies: v.array(v.string()),
	shadcnDependencies: v.array(v.string()),
	files: v.array(v.string()),
	type: v.picklist(["components:actions-ui", "components:component", "components:example"]),
});

export const registryIndexSchema = v.array(registryItemSchema);

export const registryItemWithContentSchema = v.object({
	...registryItemSchema.entries,
	...v.object({
		files: v.array(
			v.object({
				name: v.string(),
				content: v.string(),
			})
		),
	}).entries,
});

export const registryWithContentSchema = v.array(registryItemWithContentSchema);

export const stylesSchema = v.array(
	v.object({
		name: v.string(),
		label: v.string(),
	})
);

export const registryBaseColorSchema = v.object({
	inlineColors: v.object({
		light: v.record(v.string(), v.string()),
		dark: v.record(v.string(), v.string()),
	}),
	cssVars: v.object({
		light: v.record(v.string(), v.string()),
		dark: v.record(v.string(), v.string()),
	}),
	inlineColorsTemplate: v.string(),
	cssVarsTemplate: v.string(),
});
