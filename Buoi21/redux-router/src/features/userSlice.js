import { createSlice } from "@reduxjs/toolkit";
const initState = [
  { id: "0", name: "Đức" },
  { id: "1", name: "Linh" },
  { id: "2", name: "Tung" },
  { id: "3", name: "Hieu" },
];
export const usersSlice = createSlice({
  name: "users",
  initialState: initState,
  reducers: {},
});
// concept gôc của redux là không được phép thay đổi state gốc, chỉ được clone ra state mới rồi gán vào.

export default usersSlice.reducer;
