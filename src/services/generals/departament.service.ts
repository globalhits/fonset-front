import config from "../../config/config";

class DepartamentService {

    private apiGenerals = config.apiGeneralHost;

    private pathListDepartament = config.pathListDepartament;


    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListDepartament}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }

    }
}

export default new DepartamentService();