import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLoged = createAsyncThunk("profile/logged", async (payload) => {
  try {
    const response = await api.get("/api/profile/me", payload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (payload) => {
    try {
      const response = await api.post("/api/profile", payload.formData);
      payload.navigation("/dashboard");
      return { data: response.data, navigation: payload.navigation };
    } catch (error) {
      console.log(error);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      return { ...state, token: null, loading: false, user: null };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(updateProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
      })
      .addCase(getLoged.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLoged.fulfilled, (state, action) => {
        state.loading = false;
        console.log("bb ", action.payload);
        if (action.payload.user) {
          state.data = action.payload;
        } else {
          state.data = null;
        }
      })
      .addCase(getLoged.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
      });
  },
});
export const { logout } = profileSlice.actions;

export default profileSlice.reducer;
