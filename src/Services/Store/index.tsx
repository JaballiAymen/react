import { configureStore } from '@reduxjs/toolkit';
import loginSlice from "../Reducers";
import registerSlice from "../Reducers";


export const store = configureStore({
  reducer: {
    auth: loginSlice,
    register: registerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
