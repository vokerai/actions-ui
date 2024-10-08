import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';

import RadioGroupTest from './RadioGroupTest.svelte';

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
    const returned = render(RadioGroupTest, props);
    const root = returned.getByTestId('root');

    const [buttonA, buttonB, buttonC] = returned.getAllByRole('radio');

    return {
        ...returned,
        user,
        root,
        buttons: [buttonA, buttonB, buttonC],
    };
};

describe('radiogroup', () => {
    it('disables while running', async () => {
        const {
            user,
            buttons: [buttonA, buttonB, buttonC],
        } = setup({ trigger: triggerSuccess, value: undefined });

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).not.toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'unchecked');
        expect(buttonB).not.toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).not.toHaveAttribute('disabled');

        await user.click(buttonB);

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'checked');
        expect(buttonB).toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).toHaveAttribute('disabled');
    });

    it('stops disable after success', async () => {
        const {
            user,
            buttons: [buttonA, buttonB, buttonC],
        } = setup({ trigger: triggerSuccess, value: undefined });

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).not.toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'unchecked');
        expect(buttonB).not.toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).not.toHaveAttribute('disabled');

        await user.click(buttonB);

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'checked');
        expect(buttonB).toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).toHaveAttribute('disabled');

        await wait(50);

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).not.toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'checked');
        expect(buttonB).not.toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).not.toHaveAttribute('disabled');
    });

    it('stops disable after error 1', async () => {
        const {
            user,
            buttons: [buttonA, buttonB, buttonC],
        } = setup({ trigger: triggerFailure1, value: undefined });

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).not.toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'unchecked');
        expect(buttonB).not.toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).not.toHaveAttribute('disabled');

        await user.click(buttonB);

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'checked');
        expect(buttonB).toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).toHaveAttribute('disabled');

        await wait(50);

        expect(buttonA).not.toHaveAttribute('disabled');
        expect(buttonB).not.toHaveAttribute('disabled');
        expect(buttonC).not.toHaveAttribute('disabled');
    });

    it('stops disable after error 2', async () => {
        const {
            user,
            buttons: [buttonA, buttonB, buttonC],
        } = setup({ trigger: triggerFailure2, value: undefined });

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).not.toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'unchecked');
        expect(buttonB).not.toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).not.toHaveAttribute('disabled');

        await user.click(buttonB);

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonA).toHaveAttribute('disabled');
        expect(buttonB).toHaveAttribute('data-state', 'checked');
        expect(buttonB).toHaveAttribute('disabled');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).toHaveAttribute('disabled');

        await wait(50);

        expect(buttonA).not.toHaveAttribute('disabled');
        expect(buttonB).not.toHaveAttribute('disabled');
        expect(buttonC).not.toHaveAttribute('disabled');
    });

    it('resets empty on error 1', async () => {
        const {
            user,
            buttons: [buttonA, buttonB, buttonC],
        } = setup({ trigger: triggerFailure1, value: undefined });

        await user.click(buttonB);
        await wait(50);

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonB).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
    });

    it('resets empty on error 2', async () => {
        const {
            user,
            buttons: [buttonA, buttonB, buttonC],
        } = setup({ trigger: triggerFailure2, value: undefined });

        await user.click(buttonB);
        await wait(50);

        expect(buttonA).toHaveAttribute('data-state', 'unchecked');
        expect(buttonB).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
    });

    it('resets value on error 1', async () => {
        const {
            user,
            buttons: [buttonA, buttonB, buttonC],
        } = setup({ trigger: triggerFailure1, value: 'default' });

        await user.click(buttonB);
        await wait(50);

        expect(buttonA).toHaveAttribute('data-state', 'checked');
        expect(buttonB).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
    });

    it('resets value on error 2', async () => {
        const {
            user,
            buttons: [buttonA, buttonB, buttonC],
        } = setup({ trigger: triggerFailure2, value: 'default' });

        await user.click(buttonB);
        await wait(50);

        expect(buttonA).toHaveAttribute('data-state', 'checked');
        expect(buttonB).toHaveAttribute('data-state', 'unchecked');
        expect(buttonC).toHaveAttribute('data-state', 'unchecked');
    });
});
