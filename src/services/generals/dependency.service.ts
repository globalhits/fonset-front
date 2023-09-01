import config from "../../config/config";
import { LIST_FGN_DEPENDENCY } from "../../config/constants";

class DependencyService {

    private apiGenerals = config.apiGeneralHost;

    private pathListDependency = config.pathListDependency;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListDependency}`);
            const data = await response.json();
            return data;
            // return LIST_FGN_DEPENDENCY;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new DependencyService();