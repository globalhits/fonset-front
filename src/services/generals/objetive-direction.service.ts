import config from "../../config/config";
import { LIST_OBJETIVES_STRATEGIES_DIRECTIONS } from "../../config/constants";

class ObjetiveDirectionService {

    private apiGenerals = config.apiGeneralHost;

    private pathListObjetiveDirection = config.pathListObjetiveDirection;

    async getAll() {
        try {
            // const response = await fetch(`${this.apiGenerals}/${this.pathListObjetiveDirection}`);
            // const data = await response.json();
            // return data;
            return LIST_OBJETIVES_STRATEGIES_DIRECTIONS;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new ObjetiveDirectionService();