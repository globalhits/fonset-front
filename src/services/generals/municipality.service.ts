import config from "../../config/config";
import { MunicipalityDto } from "../../models/general/MunicipalityDto";

class MunicipalityService {

    private apiGenerals = config.apiGeneralHost;

    private pathMunicipality = config.pathListCities;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathMunicipality}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new MunicipalityService();
