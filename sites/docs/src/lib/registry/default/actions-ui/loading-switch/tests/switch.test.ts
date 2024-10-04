import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';

import SwitchTest from './SwitchTest.svelte';

const wait = async (ms: number) => {
    return new Promise((r) => {
        setTimeout(() => {
            r();
        }, ms);
    });
};

const triggerSuccess = async (
    value: boolean,
): Promise<{ error?: string | undefined }> => {
    await wait(50);
    return Promise.resolve({});
};

const triggerFailure1 = async (
    value: boolean,
): Promise<{ error?: string | undefined }> => {
    await wait(50);
    return Promise.resolve({ error: 'something went wrong' });
};

const triggerFailure2 = async (
    value: boolean,
): Promise<{ error?: string | undefined }> => {
    await wait(50);
    throw new Error('whoops');
};

const setup = (props?) => {
    const user = userEvent.setup();
    const returned = render(SwitchTest, props);
    const root = returned.getByTestId('root');
    const button = returned.getByRole('switch');

    return {
        ...returned,
        user,
        root,
        button,
    };
};

describe('switch', () => {
    it('disables while running', async () => {
        const { user, button } = setup({ trigger: triggerSuccess });

        expect(button).toHaveAttribute('data-state', 'unchecked');
        expect(button).not.toHaveAttribute('disabled');

        await user.click(button);

        expect(button).toHaveAttribute('data-state', 'checked');
        expect(button).toHaveAttribute('disabled');
    });

    it('stops disable after success', async () => {
        const { user, button } = setup({ trigger: triggerSuccess });

        expect(button).toHaveAttribute('data-state', 'unchecked');
        expect(button).not.toHaveAttribute('disabled');

        await user.click(button);

        expect(button).toHaveAttribute('data-state', 'checked');
        expect(button).toHaveAttribute('disabled');

        await wait(50);

        expect(button).toHaveAttribute('data-state', 'checked');
        expect(button).not.toHaveAttribute('disabled');
    });

    it('stops disable after error 1', async () => {
        const { user, button } = setup({ trigger: triggerFailure1 });

        expect(button).toHaveAttribute('data-state', 'unchecked');
        expect(button).not.toHaveAttribute('disabled');

        await user.click(button);

        expect(button).toHaveAttribute('data-state', 'checked');
        expect(button).toHaveAttribute('disabled');

        await wait(50);

        expect(button).not.toHaveAttribute('disabled');
    });

    it('stops disable after error 2', async () => {
        const { user, button } = setup({ trigger: triggerFailure2 });

        expect(button).toHaveAttribute('data-state', 'unchecked');
        expect(button).not.toHaveAttribute('disabled');

        await user.click(button);

        expect(button).toHaveAttribute('data-state', 'checked');
        expect(button).toHaveAttribute('disabled');

        await wait(50);

        expect(button).not.toHaveAttribute('disabled');
    });

    it('resets value on error 1', async () => {
        const { user, button } = setup({ trigger: triggerFailure1 });

        await user.click(button);
        await wait(50);

        expect(button).toHaveAttribute('data-state', 'unchecked');
    });

    it('resets value on error 2', async () => {
        const { user, button } = setup({ trigger: triggerFailure2 });

        await user.click(button);
        await wait(50);

        expect(button).toHaveAttribute('data-state', 'unchecked');
    });
});
