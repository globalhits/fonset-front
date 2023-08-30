import config from "../../config/config";
import { SUB_UNID_MEASUREMENT } from "../../config/constants";

class SubUnitService {

    private apiGenerals = config.apiGeneralHost;

    private pathListSubUnities = config.pathListSubUnities;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListSubUnities}`);
            const data = await response.json();
            return data;
            //return SUB_UNID_MEASUREMENT;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new SubUnitService();