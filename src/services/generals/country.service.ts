import config from "../../config/config";

class DepartamentService {

    private apiGenerals = config.apiGeneralHost;

    private pathListCountry = config.pathListCountry;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListCountry}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new DepartamentService();