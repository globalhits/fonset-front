import config from "../../config/config";

class ProgramService {

    private apiGenerals = config.apiGeneralHost;

    private pathListProgram = config.pathListProgram;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListProgram}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new ProgramService();