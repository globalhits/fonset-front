import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import InputFloating from "../../../atoms/input/Input";
import { InvertionSelector, setDependencyInvolved } from "../../../../redux/states/invertion/invertion.slice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { DependencyInvolvedDto } from "../../../../models/general/DependencyInvolvedDto";
import Buttons from "../../../atoms/button/Buttons";

const DependencyInvolved = () => {

    const dispatch = useAppDispatch();

    const [nameDescription, setNameDescription] = useState("");

    const [error, setError] = useState("");

    const { data } = useAppSelector(InvertionSelector);

    const addItem = async (itemDescription: any) => {

        if (itemDescription.trim() === '') {
            setError('El valor no puede estar vacío.');
            return;
        }

        let listDependency: DependencyInvolvedDto[] = data.PROY_DEPENDENCIAS_INVOLUCRADAS ? data.PROY_DEPENDENCIAS_INVOLUCRADAS : [];

        let findInfo = await listDependency.filter((item: any) => item.descripcion == itemDescription);

        if (findInfo && findInfo.length > 0) {
            setError('El valor ya existe.');
            return false;
        }

        const newItem = [...listDependency, { id: null, descripcion: itemDescription }]

        dispatch(setDependencyInvolved(newItem));

        setError("");
        setNameDescription("");
    }

    const deleteItem = async (descripcion: string, index: number) => {

        let newList = data.PROY_DEPENDENCIAS_INVOLUCRADAS?.filter((item: any) => item.descripcion !== descripcion);

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
                                <td width={"80%"}>{item.descripcion}</td>
                                <td width={"20%"} className="text-center">
                                    <Buttons size="xs" icon="trash3-fill" variant="danger" key={index} onClick={() => deleteItem(item.descripcion, index)} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );

}

export default DependencyInvolved;

