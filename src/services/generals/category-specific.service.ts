import config from "../../config/config";

class CategorySpecificService {

    private apiGenerals = config.apiGeneralHost;

    private pathListCategorySpecify = config.pathListCategorySpecify;

    async getAll() {
        try {
            console.log("category-specific", `${this.apiGenerals}${this.pathListCategorySpecify}`);
            const response = await fetch(`${this.apiGenerals}/${this.pathListCategorySpecify}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new CategorySpecificService();