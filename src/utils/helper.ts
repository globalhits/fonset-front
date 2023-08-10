class Helper {

    convertToBase(image: string) {

    }

    getItemLocalStorage(item: string) {
        let data = localStorage.getItem(item) ? localStorage.getItem(item) : "[]";
        if (data) {
            return JSON.parse(data);
        } else {
            return null;
        }
    }

    setItemLocalStorage(item: string, data: any) {
        localStorage.setItem(item, JSON.stringify(data));
    }
}


export default new Helper;