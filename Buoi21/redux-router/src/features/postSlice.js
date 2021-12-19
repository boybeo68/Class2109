import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import shortid from "shortid";
const initState = {
  post: [],
  status: "idle",
};
export const fetchPost = createAsyncThunk("post/fetchListPost", async () => {
  try {
    const response = await axios.get(
      "https://61acc303d228a9001703abca.mockapi.io/postList"
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {}
});

export const postSlice = createSlice({
  name: "post",
  initialState: initState,
  reducers: {
    addNewPost: (state, actions) => {
      const { title, content } = actions.payload;
      const findPost = state.post.find((item) => {
        return item.id === actions.payload.id;
      });
      if (findPost) {
        findPost.react["like"] += 1;
      }
      // nếu thay đổi state gốc thì ko return
      // state.post.push({
      //   id: shortid.generate(),
      //   title: actions.payload.title,
      //   content: actions.payload.content,
      // });
      //  nếu giữ nguyên state cũ thì phải return
      let newState = JSON.parse(JSON.stringify(state));
      newState.post = [
        { id: shortid.generate(), title, content },
        ...newState.post,
      ];
      return newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPost.pending, (state, actions) => {
        state.status = "loading";
        console.log("pending");
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "success";
        console.log("action", action);
        state.post = action.payload;
        console.log("success");
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "fail";
        state.post = [];
        console.log("reject");
      });
  },
});
// concept gôc của redux là không được phép thay đổi state gốc, chỉ được clone ra state mới rồi gán vào.

export const { addNewPost } = postSlice.actions;
export default postSlice.reducer;
