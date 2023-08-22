import config from "../../config/config";

class DistricService {

    private apiGenerals = config.apiGeneralHost;

    private pathListDistricts = config.pathListDistricts;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListDistricts}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new DistricService();