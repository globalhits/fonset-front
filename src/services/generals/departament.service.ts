import config from "../../config/config";
import { DepartamentDto } from "../../models/general/DepartamentDto";

class DepartamentService {

    private apiGenerals = config.apiGeneralHost;

    private pathListDepartament = config.pathListDepartament;

    async getAll(): Promise<DepartamentDto[]> {
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