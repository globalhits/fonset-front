import Swal from "sweetalert2";

class AlertService {

    showAlert(title: string, text: string, icon: any, textConfirm: string = "Si", showBtnCancel: boolean = false, textCancel: string = "Cerrar", callbackConfirm?: any, callbackCancel?: any) {
        return Swal.fire({
            title: title,
            text: text,
            icon: icon, //error, info, question, success, warning
            showCancelButton: showBtnCancel,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: textConfirm,
            cancelButtonText: textCancel,
            allowOutsideClick: false,
        })
        // .then((result) => {
        //     if (result.isConfirmed) {
        //         callbackConfirm()
        //     }
        //     if (result.isDenied) {
        //         callbackCancel()
        //     }
        // });
    }
}

export default new AlertService();