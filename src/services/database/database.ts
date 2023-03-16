import { Database, getDatabase } from "firebase/database";
import { FirebaseDB } from "services/database/firebase";
import { ProjectSummary } from "services/types/types";

export const db = new FirebaseDB();

export abstract class IDatabase {
    protected readonly database: Database;

    constructor() {
        this.database = getDatabase();
    }

    abstract fetchProjectSummaries(): Promise<ProjectSummary[]>;
}