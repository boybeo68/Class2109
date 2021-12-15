import { createSlice, nanoid } from "@reduxjs/toolkit";
import shortid from "shortid";
const initState = {
  post: [
    {
      id: 1,
      title: "bài post số 1",
      content:
        "Quis pariatur eu culpa ipsum occaecat commodo aliquip magna dolor laborum eu. Ad non quis magna dolore voluptate non. Velit sit aliqua et incididunt sit. Ipsum incididunt culpa esse amet quis ut incididunt duis culpa tempor incididunt sint. Commodo laborum exercitation duis reprehenderit do aute tempor anim sint dolor exercitation quis.",
    },
    {
      id: 2,
      title: "bài post số 2",
      content:
        "Quis pariatur eu culpa ipsum occaecat commodo aliquip magna dolor laborum eu. Ad non quis magna dolore voluptate non. Velit sit aliqua et incididunt sit. Ipsum incididunt culpa esse amet quis ut incididunt duis culpa tempor incididunt sint. Commodo laborum exercitation duis reprehenderit do aute tempor anim sint dolor exercitation quis.",
    },
  ],
};
export const postSlice = createSlice({
  name: "post",
  initialState: initState,
  reducers: {
    addNewPost: (state, actions) => {
      //   return state.post.concat(...state.post, {
      //     id: 10,
      //     title: actions.payload.title,
      //     content: actions.payload.content,
      //   });
      state.post.push({
        id: shortid.generate(),
        title: actions.payload.title,
        content: actions.payload.content,
      });
    },
  },
});
// concept gôc của redux là không được phép thay đổi state gốc, chỉ được clone ra state mới rồi gán vào.

export const { addNewPost } = postSlice.actions;
export default postSlice.reducer;
