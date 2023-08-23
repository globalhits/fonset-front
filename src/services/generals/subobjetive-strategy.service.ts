import config from "../../config/config";
import { LIST_SUB_OBJETIVES } from "../../config/constants";

class SubObjetiveStrategyService {

    // private apiGenerals = config.apiGeneralHost;

    // private pathListSubObjetiveStrategy = config.pathListSubObjetiveStrategy;

    async getAll() {
        try {
            // const response = await fetch(`${this.apiGenerals}/${this.pathListSubObjetiveStrategy}`);
            // const data = await response.json();
            // return data;
            return LIST_SUB_OBJETIVES;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new SubObjetiveStrategyService();