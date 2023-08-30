import config from "../../config/config";
// import { CATEGORY_GENERAL } from "../../config/constants";

class CategoryGeneralService {

    private apiGenerals = config.apiGeneralHost;

    private pathListCategoryGeneral = config.pathListCategoryGeneral;

    async getAll() {
        try {
            console.log("category-general", `${this.apiGenerals}/${this.pathListCategoryGeneral}`);
            const response = await fetch(`${this.apiGenerals}/${this.pathListCategoryGeneral}`);
            const data = await response.json();
            return data;
            // return CATEGORY_GENERAL;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new CategoryGeneralService();