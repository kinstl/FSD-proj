import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from './addCommentFormSelectors';

describe('addCommentFormError selector', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});

describe('addCommentFormText selector', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: '123',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});
