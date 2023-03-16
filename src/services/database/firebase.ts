import { FirebaseApp } from "firebase/app";
import { Database, getDatabase, onValue, ref } from "firebase/database";
import { IDatabase } from "services/database/database";
import { ProjectSummary } from "services/types/types";

export class FirebaseDB extends IDatabase {
    fetchProjectSummaries(): Promise<ProjectSummary[]> {
        return new Promise((resolve, reject) => {
            const projectSummaryRef = ref(
                this.database,
                `summaries` // TODO: Make proper path with user uid
            );
            // TODO: This is used to listen continuously. Figure out a way to listen for changes using this DB class.
            onValue(projectSummaryRef, snapshot => resolve(snapshot.val()))();
        })
    }
}