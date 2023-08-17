import config from "../../config/config";
import { RequestDto } from "../../models/general/RequestDto";

class CooperativeService {

    private urlApi = config.apiUrl;

    async save(request: RequestDto) {
        try {
            const response = await fetch(`${this.urlApi}/project-international-cooperation`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error save data invertion:', error);
            throw error;
        }
    }
}

export default new CooperativeService();