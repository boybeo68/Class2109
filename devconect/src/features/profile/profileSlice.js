import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

// [{id: dsfdsf, msg: 'Lỗi đăng nhập', alertType: 'danger'}]
const init = {
  data: null,
  loading: false,
};

export const getLoggedProfile = createAsyncThunk(
  "profile/getLogged",
  async () => {
    try {
      const response = await api.get("/api/profile/me");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (payload) => {
    try {
      const response = await api.post("/api/profile", payload.formData);
      payload.navigate("/dashboard");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: init,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLoggedProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLoggedProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getLoggedProfile.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
      });
  },
});
// export const { logout } = profileSlice.actions;

export default profileSlice.reducer;
