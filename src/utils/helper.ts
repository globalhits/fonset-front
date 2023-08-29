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

    b64toBlob(base64Data: string) {
        const contentType = base64Data.split(';')[0].split(':')[1];
        const byteCharacters = atob(base64Data.split(',')[1]);

        console.log("contentType", contentType);
        console.log("byteCharacters", byteCharacters);

        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
            const slice = byteCharacters.slice(offset, offset + 512);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, { type: contentType });
    }

    divideBase64(base64Data: string) {
        return base64Data.split(',')[1];
    }
}


export default new Helper();