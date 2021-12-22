import { createSlice, nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'

const initialState = [];

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action) => {
            const id = nanoid();
            const msg = action.payload.msg
            const alertType = action.payload.alertType
            state.push({ id, msg, alertType })
        },
        removeAlert: (state, action) => {
            return state.filter(alert => alert.id !== action.payload)
        },
    },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
