import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// [{id: dsfdsf, msg: 'Lỗi đăng nhập', alertType: 'danger'}]
const init = {
  token: null,
  loading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload) => {
    try {
      const response = await api.post("/api/users", payload);
      localStorage.setItem("token", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    logout: (state) => {
      return { ...state, token: null, loading: false, user: null };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
      });
  },
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
