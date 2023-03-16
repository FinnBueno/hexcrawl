import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProjects } from "services/redux/projects-list/thunk";
import { ProjectSummary } from "services/types/types";
import { LoadingState } from '../loading';

const initialState = {
    projects: [] as ProjectSummary[],
    loading: 'idle' as LoadingState
};

export const projectsListSlice = createSlice({
    name: 'projects-list',
    initialState,
    reducers: {
        setAll(state, action: PayloadAction<ProjectSummary[]>) {
            state.projects = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.projects = action.payload;
                state.loading = 'succeeded';
            })
            .addCase(fetchProjects.pending, (state, _) => {
                state.loading = 'loading';
            });
    }
});