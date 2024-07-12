import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'allo' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('baobab'),
            ),
        ).toEqual({ username: 'baobab' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'allo' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('baobab'),
            ),
        ).toEqual({ password: 'baobab' });
    });
});
