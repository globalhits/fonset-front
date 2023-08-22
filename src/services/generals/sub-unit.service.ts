import config from "../../config/config";

class SubUnitService {

    private apiGenerals = config.apiGeneralHost;

    private pathListSubUnities = config.pathListSubUnities;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListSubUnities}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new SubUnitService();