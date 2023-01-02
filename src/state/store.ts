import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "src/state/slices/navigationSlice";
import homeReducer from "src/state/slices/homeSlice";

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        home: homeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch