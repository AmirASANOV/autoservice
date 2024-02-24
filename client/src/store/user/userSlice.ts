import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUser } from "../../types/IUser";

// Define a type for the slice state
interface IUserSlice {
  token: string | null;
  isAuth: boolean;
  user: IUser | null;
}

// Define the initial state using that type
const initialState: IUserSlice = {
  token: null,
  isAuth: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",

  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.isAuth = true;
    },
    logout: (state, action) => {
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const { setUser, login, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default userSlice.reducer;
