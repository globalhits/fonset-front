import config from "../../config/config";
// import { CATEGORY_SPECIFYC } from "../../config/constants";

class CategorySpecificService {

    private apiGenerals = config.apiGeneralHost;

    private pathListCategorySpecify = config.pathListCategorySpecify;

    async getAll() {
        try {
            const response = await fetch(`${this.apiGenerals}/${this.pathListCategorySpecify}`);
            const data = await response.json();
            return data;
            // return CATEGORY_SPECIFYC;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new CategorySpecificService();