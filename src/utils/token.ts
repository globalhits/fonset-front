class TokenHelper {

    decodeJwt(token: string) {
        const [headerBase64, payloadBase64] = token.split(".");
        const decodedHeader = JSON.parse(atob(headerBase64));
        const decodedPayload = JSON.parse(atob(payloadBase64));
        return { header: decodedHeader, payload: decodedPayload };
    }

    removeURLCode() {
        const baseURL = window.location.href.split('?')[0];
        window.history.replaceState({}, document.title, baseURL);
    }
}

export default new TokenHelper();