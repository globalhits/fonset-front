import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import InputFloating from "../../../atoms/input/Input";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import Buttons from "../../../atoms/button/Buttons";
import { NationalEntityInvolvedDto } from "../../../../models/general/NationalEntityInvolvedDto";
import { GeneralSelector, setEntityRelation } from "../../../../redux/states/generals/general.slice";
import helper from "../../../../utils/helper";

const NationalInvolved = () => {

    const dispatch = useAppDispatch();

    const [nameEntity, setNameEntity] = useState("");

    const [error, setError] = useState("");

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const addItem = async (itemDescription: any) => {

        if (itemDescription.trim() === '') {
            setError('El valor no puede estar vacío.');
            return;
        }

        let listEntity: NationalEntityInvolvedDto[] = data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA ? data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA : [];

        let findInfo = await listEntity.filter((item: NationalEntityInvolvedDto) => item.DESCRIPCION == itemDescription);

        if (findInfo && findInfo.length > 0) {
            setError('El valor ya existe.');
            return false;
        }

        const newItem = [...listEntity, {
            INDEX: helper.getRandomInt(),
            ID: helper.getRandomInt(),
            DESCRIPCION: itemDescription
        }]

        dispatch(setEntityRelation(newItem));

        setError("");
        setNameEntity("");
    }

    const deleteItem = async (item: NationalEntityInvolvedDto, index: number) => {

        let newList = data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA?.filter((object: NationalEntityInvolvedDto) => object.INDEX !== item.INDEX);

        dispatch(setEntityRelation(newList));
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="col-lg-10">
                    <InputFloating label="Nombre entidad nacional" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setNameEntity(value)} value={nameEntity} />
                </div>
                <div className="col-lg-2">
                    <Button className="mt-2 mb-2" variant="warning" onClick={() => addItem(nameEntity)}>+</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
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
                        data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA?.map((item: NationalEntityInvolvedDto, index: number) => (
                            <tr key={index}>
                                <td width={"80%"}>{item.DESCRIPCION}</td>
                                <td width={"20%"} className="text-center">
                                    <Buttons size="xs" icon="trash3-fill" variant="danger" key={index} onClick={() => deleteItem(item, index)} />
                                </td>
                            </tr>
                        ))
                    }
                    {
                        errorInputs && data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA?.length == 0
                            ? (<tr><td colSpan={3} className="text-center"><h5 className="text-danger">¡Entidades nacionales requeridas!</h5></td></tr>)
                            : null
                    }
                </tbody>
            </Table>
        </div>
    );

}

export default NationalInvolved;

