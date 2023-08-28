import config from "../../config/config";
import { SERVICES } from "../../config/constants";

class GoodsService {

    private apiGenerals = config.apiGeneralHost;

    private pathListGoods = config.pathListGoods;

    async getAll() {
        try {
            // console.log("goods", `${this.apiGenerals}/${this.pathListGoods}`);
            // const response = await fetch(`${this.apiGenerals}/${this.pathListGoods}`);
            // const data = await response.json();
            // return data;
            return SERVICES;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
}

export default new GoodsService();