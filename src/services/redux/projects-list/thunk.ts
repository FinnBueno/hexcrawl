import { createAsyncThunk } from '@reduxjs/toolkit';
import { FirebaseDB } from 'services/database/firebase';
import { ProjectSummary } from 'services/types/types';

let database: FirebaseDB;

const db = () => {
    if (!database) {
        database = new FirebaseDB();
    }
    return database;
};

export const generateData = () =>
    new Promise<ProjectSummary[]>((resolve) => {
        const data = [...Array(Math.floor(Math.random() * 10 + 5)).keys()].map(
            (i) => ({
                name: `Project #${i}`
            })
        );
        setTimeout(() => resolve(data), 3000);
    });

// fetches project summaries from firebase
export const fetchProjects = createAsyncThunk(
    'projects-list/fetch-projects-summary',
    async () => db().fetchProjectSummaries()
);
