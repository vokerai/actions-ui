import { fail } from '@sveltejs/kit';
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';
import type { AnyZodObject } from 'zod';
import type { Actions, PageServerLoad, RequestEvent } from './$types.js';

export const actions: Actions = {};

async function handleForm(event: RequestEvent, schema: AnyZodObject) {
    const form = await superValidate(event, zod(schema));
    if (!form.valid) {
        return fail(400, {
            form,
        });
    }
    return {
        form,
    };
}

export const load: PageServerLoad = async (event) => {
    const layoutCookie = event.cookies.get('PaneForge:layout');
    const collapsedCookie = event.cookies.get('PaneForge:collapsed');

    let layout: number[] | undefined;
    let collapsed: boolean | undefined;

    if (layoutCookie) layout = JSON.parse(layoutCookie);
    if (collapsedCookie) collapsed = JSON.parse(collapsedCookie);

    return { layout, collapsed };
};
