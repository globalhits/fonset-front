import config from "../../config/config";
import { LIST_PROGRAMS } from "../../config/constants";

class ProgramService {

    private apiGenerals = config.apiGeneralHost;

    private pathListProgram = config.pathListProgram;

    async getAll() {
        try {
            // const response = await fetch(`${this.apiGenerals}/${this.pathListProgram}`);
            // const data = await response.json();
            // return data;
            return LIST_PROGRAMS;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new ProgramService();