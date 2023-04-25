import { ref, Database, getDatabase } from 'firebase/database';
import { generateData } from 'services/redux/projects-list';
// import { IDatabase } from "services/database/database";
import { ProjectSummary } from 'services/types/types';

export class FirebaseDB {
    private readonly database: Database;

    constructor() {
        this.database = getDatabase();
    }

    fetchProjectSummaries(): Promise<ProjectSummary[]> {
        return new Promise((resolve, _reject) => {
            // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
            const projectSummaryRef = ref(
                this.database,
                `summaries` // TODO: Make proper path with user uid
            );
            // TODO: This is used to listen continuously. Figure out a way to listen for changes using this DB class.

            // get(projectSummaryRef).then(snapshot => resolve(snapshot.val() || []));
            generateData().then(resolve);
        });
    }
}
