import config from "../../config/config";
import { LIST_TYPE_ACTIVITIES } from "../../config/constants";

class TypeActivityService {

    // private apiGenerals = config.apiGeneralHost;

    // private pathListActivity = config.pathListActivity;

    async getAll() {
        try {
            // const response = await fetch(`${this.apiGenerals}/${this.pathListActivity}`);
            // const data = await response.json();
            // return data;
            return LIST_TYPE_ACTIVITIES;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new TypeActivityService();