import config from "../../config/config";
// import { LIST_LINES_PROGRAMS } from "../../config/constants";

class LineProgramService {

    private apiGenerals = config.apiGeneralHost;

    private pathListLineProgram = config.pathListLineProgram;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListLineProgram}`);
            const data = await response.json();
            return data;
            // return LIST_LINES_PROGRAMS;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new LineProgramService();