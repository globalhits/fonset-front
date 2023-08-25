class Helper {

    convertToBase(image: string) {
        return this.blobToBase64(image);
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

    getRandomInt(min = 1, max = 100000) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    blobToBase64(blob: any) {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        return new Promise(resolve => {
            reader.onloadend = () => {
                resolve(reader.result);
            };
        });
    };
}


export default new Helper();