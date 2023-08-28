import config from "../../config/config";

class ConsecutiveService {

    private urlApi = config.apiUrl;

    private pathConsecutive = config.pathConsecutive;

    async getConsecutive(type: string) {
        try {
            const response = await fetch(`${this.urlApi}/${this.pathConsecutive}/${type}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new ConsecutiveService();