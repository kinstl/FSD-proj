import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
    const { username, password } = authData;
    const { dispatch, rejectWithValue, extra } = thunkApi;

    try {
        const response = await extra.api.post<User>('/login', {
            username,
            password,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
