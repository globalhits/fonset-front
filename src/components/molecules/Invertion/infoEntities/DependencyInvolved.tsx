import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import InputFloating from "../../../atoms/input/Input";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { DependencyInvolvedDto } from "../../../../models/general/DependencyInvolvedDto";
import Buttons from "../../../atoms/button/Buttons";
import { GeneralSelector, setDependencyInvolved } from "../../../../redux/states/generals/general.slice";
import helper from "../../../../utils/helper";

const DependencyInvolved = () => {

    const dispatch = useAppDispatch();

    const [nameDescription, setNameDescription] = useState("");

    const [error, setError] = useState("");

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const addItem = async (itemDescription: any) => {

        if (itemDescription.trim() === '') {
            setError('El valor no puede estar vacío.');
            return;
        }

        let listDependency: DependencyInvolvedDto[] = data.PROY_DEPENDENCIAS_INVOLUCRADAS ? data.PROY_DEPENDENCIAS_INVOLUCRADAS : [];

        let findInfo = await listDependency.filter((item: DependencyInvolvedDto) => item.DESCRIPCION == itemDescription);

        if (findInfo && findInfo.length > 0) {
            setError('El valor ya existe.');
            return false;
        }

        const newItem = [...listDependency, {
            INDEX: helper.getRandomInt(),
            ID: null,
            DESCRIPCION: itemDescription
        }]


        dispatch(setDependencyInvolved(newItem));

        setError("");
        setNameDescription("");
    }

    const deleteItem = (item: DependencyInvolvedDto, index: number) => {

        let newList = data.PROY_DEPENDENCIAS_INVOLUCRADAS?.filter((object: DependencyInvolvedDto) => object.INDEX !== item.INDEX);

        dispatch(setDependencyInvolved(newList));
    }

    return (
        <div>
            <div className="row mt-2">
                <div className="col-lg-10">
                    <InputFloating label="Nombre dependencia involucrada" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setNameDescription(value)} value={nameDescription} />
                </div>
                <div className="col-lg-2">
                    <Button className="mt-2 mb-2" variant="warning" onClick={() => addItem(nameDescription)}>+</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            <Table className="table table-bordered table-condensed table-stripe">
                <thead>
                    <tr>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.PROY_DEPENDENCIAS_INVOLUCRADAS?.map((item: DependencyInvolvedDto, index: number) => (
                            <tr key={index}>
                                <td width={"80%"}>{item.DESCRIPCION}</td>
                                <td width={"20%"} className="text-center">
                                    <Buttons size="xs" icon="trash3-fill" variant="danger" key={index} onClick={() => deleteItem(item, index)} />
                                </td>
                            </tr>
                        ))
                    }
                    {
                        errorInputs && data.PROY_DEPENDENCIAS_INVOLUCRADAS?.length == 0
                            ? (<tr><td colSpan={3} className="text-center"><h5 className="text-danger">¡Dependencias involucradas requeridas!</h5></td></tr>)
                            : null
                    }
                </tbody>
            </Table>
        </div>
    );

}

export default DependencyInvolved;

