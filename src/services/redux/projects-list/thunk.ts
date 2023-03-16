import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "services/database/database";
import { ProjectSummary } from "services/types/types";

const generateData = () => new Promise<ProjectSummary[]>((resolve) => {
    const data = [...Array(Math.floor(Math.random() * 15)).keys()].map((i) => ({
        name: `Project #${i}`
    }));
    setTimeout(() => resolve(data), 3000);
});

// fetches project summaries from firebase
export const fetchProjects = createAsyncThunk(
    'projects-list/fetch-projects-summary',
    async () => db.fetchProjectSummaries()
);