import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';

import ButtonTest from './ButtonTest.svelte';

const wait = async (ms: number) => {
    return new Promise((r) => {
        setTimeout(() => {
            r({});
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
    const returned = render(ButtonTest, props);
    const root = returned.getByTestId('root');

    return {
        ...returned,
        user,
        root,
        button: root,
    };
};

describe('button', () => {
    it('disables while running', async () => {
        const { user, button } = setup({ onClick: triggerSuccess });

        expect(button).not.toHaveAttribute('disabled');

        await user.click(button);

        expect(button).toHaveAttribute('disabled');
    });

    it('stops disable after success', async () => {
        const { user, button } = setup({ onClick: triggerSuccess });

        expect(button).not.toHaveAttribute('disabled');

        await user.click(button);

        expect(button).toHaveAttribute('disabled');

        await wait(50);

        expect(button).not.toHaveAttribute('disabled');
    });

    it('stops disable after error 1', async () => {
        const { user, button } = setup({ onClick: triggerFailure1 });

        expect(button).not.toHaveAttribute('disabled');

        await user.click(button);

        expect(button).toHaveAttribute('disabled');

        await wait(50);

        expect(button).not.toHaveAttribute('disabled');
    });

    it('stops disable after error 2', async () => {
        const { user, button } = setup({ onClick: triggerFailure2 });

        expect(button).not.toHaveAttribute('disabled');

        await user.click(button);

        expect(button).toHaveAttribute('disabled');

        await wait(50);

        expect(button).not.toHaveAttribute('disabled');
    });
});
