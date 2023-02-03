// register Slice is a slice of the store that contains the state of the register form

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export interface RegisterState {
    user: string;
}

const initialState: RegisterState = {
    user: "",
};
// PUBLIC_URL from vite.env.d.ts
const PUBLIC_URL = import.meta.env.PUBLIC_URL;

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        register: (state, action: PayloadAction<RegisterState>) => {
            state.user = action.payload.user;
        }
    }
});

export const { register } = registerSlice.actions;

export const selectRegister = (state: RootState) => state.auth;

export const selectEmail = (state: RootState) => state.auth;