import config from "../../config/config";

class GoodsService {

    private apiGenerals = config.apiGeneralHost;

    private pathListGoods = config.pathListGoods;

    async getAll() {
        try {
            console.log("category-specific", `${this.apiGenerals}/${this.pathListGoods}`);
            const response = await fetch(`${this.apiGenerals}${this.pathListGoods}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new GoodsService();