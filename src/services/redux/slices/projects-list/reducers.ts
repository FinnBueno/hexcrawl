import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectSummary {
    name: string;
}

interface ProjectsListState {
    projects: ProjectSummary[];
}

const initialState: ProjectsListState = {
    projects: []
}

export const projectsList = createSlice({
    name: 'projectsList',
    initialState,
    reducers: {
        setAll: (state, { payload }: PayloadAction<ProjectSummary[]>) => {
            state.projects = payload;
        }
    }
})