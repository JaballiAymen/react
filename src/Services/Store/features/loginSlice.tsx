import { RootState } from "../index";
import { createSelector, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
    isLoggedIn: boolean;
    user: {};
}

const initialState: LoginState = {
    isLoggedIn: false,
    user: {},
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{}>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        }
    }
});

export const { login } = loginSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export const selectIsLoggedIn = createSelector(

    selectLogin,
    (login: any) => login.isLoggedIn
);

export const selectUser = createSelector(
    selectLogin,
    (login: any) => login.user
);

export default loginSlice.reducer;
