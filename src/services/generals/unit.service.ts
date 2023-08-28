import config from "../../config/config";
import { UNID_MEASUREMENT } from "../../config/constants";

class UnitService {

    private apiGenerals = config.apiGeneralHost;

    private pathListUnities = config.pathListUnities;

    async getAll() {
        try {
            // const response = await fetch(`${this.apiGenerals}/${this.pathListUnities}`);
            // const data = await response.json();
            // return data;
            return UNID_MEASUREMENT;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new UnitService();