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

    getDateNow() {
        const currentDate = new Date();

        const formattedDate = currentDate.toISOString().slice(0, 10);

        console.log("formattedDate", formattedDate);

        return formattedDate;
    }
}


export default new Helper;