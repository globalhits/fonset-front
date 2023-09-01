import config from "../../config/config";
import { DepartamentDto } from "../../models/general/DepartamentDto";

class DepartamentService {

    private apiGenerals = config.apiGeneralHost;

    private pathListDepartament = config.pathListDepartament;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListDepartament}`);
            const data = await response.json();
            return data;
            // return [
            //     {
            //         INDEX: 1,
            //         id: 1,
            //         name: "Barranquilla",
            //         description: "Barranquilla",
            //     }
            // ]
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new DepartamentService();