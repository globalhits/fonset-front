import config from "../../config/config";

class DistricService {

    private apiGenerals = config.apiGeneralHost;

    private pathListDistricts = config.pathListDistricts;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListDistricts}`);
            const data = await response.json();
            return data;
            // return [{
            //     INDEX: 1,
            //     id: 1,
            //     name: "distrito 1",
            //     description: "distrito 1"
            // }]
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new DistricService();