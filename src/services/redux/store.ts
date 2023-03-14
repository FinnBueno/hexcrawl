import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { projectsList } from "services/redux/slices/projects-list";

export const store = configureStore({
    reducer: {
        projectsList: projectsList.reducer
    }
});

export const actions = {
    projectsList: {
        ...projectsList.actions
    }
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;