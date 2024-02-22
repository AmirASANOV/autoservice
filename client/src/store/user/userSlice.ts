import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface IUserSlice {
  token: string | null;
  isAuth: boolean;
  username: string | null;
}

// Define the initial state using that type
const initialState: IUserSlice = {
  token: null,
  isAuth: false,
  username: null,
};

export const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.token.username;
      state.isAuth = true;
    },
    logout: (state, action) => {},
  },
});

export const { login, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
