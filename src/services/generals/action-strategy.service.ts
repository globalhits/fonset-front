import config from "../../config/config";
import { LIST_ACTIONS_STRATEGIES_OBJETIVES } from "../../config/constants";

class ActionStrategyService {

    private apiGenerals = config.apiGeneralHost;

    private pathListActionStrategy = config.pathListActionStrategy;

    async getAll() {
        try {
            // const response = await fetch(`${this.apiGenerals}/${this.pathListActionStrategy}`);
            // const data = await response.json();
            // return data;
            return LIST_ACTIONS_STRATEGIES_OBJETIVES;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new ActionStrategyService();