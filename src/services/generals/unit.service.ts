import config from "../../config/config";

class UnitService {

    private apiGenerals = config.apiGeneralHost;

    private pathListUnities = config.pathListUnities;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListUnities}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new UnitService();