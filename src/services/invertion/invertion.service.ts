import config from "../../config/config";
import { RequestDto } from "../../models/general/RequestDto";

class InvertionService {

    private urlApi = config.apiUrl;

    async save(request: RequestDto) {
        try {
            const response = await fetch(`${this.urlApi}/proyeto-inversion`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error save data invertion:', error);
            throw error;
        }
    }
}

export default new InvertionService();