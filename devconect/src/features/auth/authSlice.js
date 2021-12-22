import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../utils/api';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    user: null
};
export const registerUser = createAsyncThunk(
    'auth/register',
    async (payload) => {
        const response = await api.post('/api/users', payload);
        console.log(response);
        localStorage.setItem('token', response.data.token)
        return response.data;
    }
);
export const loginUser = createAsyncThunk(
    'auth/login',
    async (payload) => {
        const response = await api.post('/api/auth', payload);
        localStorage.setItem('token', response.data.token)
        return response.data;
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                loading: false,
                user: null
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true
                state.token = action.payload.token;
            })
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true
                state.token = action.payload.token;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
