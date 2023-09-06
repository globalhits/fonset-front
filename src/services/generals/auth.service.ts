import config from "../../config/config";
import { RequestDto } from "../../models/general/RequestDto";

class AuthService {

    private urlApi = config.apiUrl;

    async checkLoginStatus(token: string) {
        try {
            const response = await fetch(`https://susitest.fiscalia.gov.co/sso/isUserLogged`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
        } catch (error) {
            console.error('Error to check login status:', error);
            throw error;
        }
    }

    async getAuthCode(clientId: any) {

    }
}

export default new AuthService();