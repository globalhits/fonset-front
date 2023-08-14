import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import InputFloating from "../../../atoms/input/Input";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { InvertionSelector, setDataInvertion } from "../../../../redux/states/invertion/invertion.slice";
import { RequestInvertionDto } from "../../../../models/invertion/RequestInvertionDto";
import Buttons from "../../../atoms/button/Buttons";
import Swal from "sweetalert2";

const NationalInvolved = () => {

    const dispatch = useAppDispatch();

    const [nameEntity, setNameEntity] = useState("");

    const { data } = useAppSelector(InvertionSelector);


    const addEntity = async (itemDescription: any) => {

        let listEntity = data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA ? data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA : [];

        let findInfo = data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA?.find(item => item.descripcion == itemDescription);

        if (!findInfo) {

            const newItem = [...listEntity, { id: null, description: itemDescription }]
            let newData = {
                ...data,
                PROY_ENTIDAD_NACIONAL_INVOLUCRADA: newItem
            }

            await dispatch(setDataInvertion(newData))

            return true;
        }
        //alert
        Swal.fire({
            title: 'Error',
            text: 'Este item ya existe',
            icon: 'error',
            allowOutsideClick: false,
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes agregar el código para cerrar la ventana o realizar alguna acción adicional
                console.log('La ventana se cerrará');
            }
        });
        return false;
    }

    const deleteEntity = async (index: any) => {

        let newList = data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA?.findIndex(indexItem => indexItem == index);

        console.log("new List", newList);

        let newData = {
            ...data,
            PROY_ENTIDAD_NACIONAL_INVOLUCRADA: newList
        }

        await dispatch(setDataInvertion(newData))
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="col-lg-10">
                    <InputFloating label="Nombre entidad nacional" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setNameEntity(value)} value={nameEntity} />
                </div>
                <div className="col-lg-2">
                    <Button className="mt-2 mb-2" variant="warning" onClick={() => addEntity(nameEntity)}>+</Button>
                </div>
            </div>

            <Table className="table table-bordered table-condensed table-stripe" style={{ zoom: "0.9" }}>
                <thead>
                    <tr>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA?.map((item: any, index: number) => (
                            <tr key={index}>
                                <td width={"80%"}>{item.description}</td>
                                <td width={"20%"} className="text-center">
                                    <Buttons size="xs" icon="trash3-fill" variant="danger" key={index} onClick={() => deleteEntity(item.description)} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );

}

export default NationalInvolved;

