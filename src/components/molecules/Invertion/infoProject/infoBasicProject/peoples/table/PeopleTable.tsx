import { useState } from "react";
import { Table } from "react-bootstrap";
import Buttons from "../../../../../../atoms/button/Buttons";
import InputFloating from "../../../../../../atoms/input/Input";
import { useAppDispatch, useAppSelector } from "../../../../../../../redux/hooks";
import { GeneralSelector, addPeoples } from "../../../../../../../redux/states/generals/general.slice";
import { PeopleDto } from "../../../../../../../models/general/PeopleDto";

const PeopleTable = () => {

    const dispatch = useAppDispatch();

    const { data } = useAppSelector(GeneralSelector);

    const [actor, setActor] = useState("");

    const [ubicacion, setUbicacion] = useState("");

    const [interes, setInteres] = useState("");

    const [posicion, setPosicion] = useState("");

    const [error, setError] = useState("");

    const addItem = async () => {

        if (actor.trim() === '') {
            setError('El campo actor no puede estar vacío.');
            return;
        }

        if (ubicacion.trim() === '') {
            setError('El campo ubicacion no puede estar vacío.');
            return;
        }

        if (interes.trim() === '') {
            setError('El campo interes no puede estar vacío.');
            return;
        }

        if (posicion.trim() === '') {
            setError('El campo posición no puede estar vacío.');
            return;
        }

        if (actor.trim() === '') {
            setError('El campo interes no puede estar vacío.');
            return;
        }

        let newList = data.PROY_ANALISIS_PARTICIPANTES ? data.PROY_ANALISIS_PARTICIPANTES : [];

        const newDataList = [...newList, {
            id: null,
            nombre: actor,
            ubicacion: ubicacion,
            interes: interes,
            posicion: posicion,
        }];

        dispatch(addPeoples(newDataList))

    }

    const deleteItem = async (item: PeopleDto, index: number) => {
        const newDataList = await data.PROY_ANALISIS_PARTICIPANTES?.filter(object => (object.id == item.id || object.index == index));
        dispatch(addPeoples(newDataList))
    }

    return (
        <>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <h4 style={{ fontWeight: "normal", fontSize: "20px" }}><span className="text-red">*</span>Analisis de participantes<span className="text-red">*</span></h4>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-5">
                    <InputFloating label="Actor" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setActor(value)} value={actor} />
                </div>
                <div className="col-lg-7">
                    <InputFloating label="Ubicación" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setUbicacion(value)} value={ubicacion} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <InputFloating label="Interés expectativa" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setInteres(value)} value={interes} />
                </div>
                <div className="col-lg-5">
                    <InputFloating label="posición" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => setPosicion(value)} value={posicion} />
                </div>
                <div className="col-lg-2 text-center mt-2">
                    <Buttons variant="primary" label="Añadir" onClick={() => addItem()} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <Table className="table table-bordered table-condensed table-stripe" style={{ zoom: "0.9" }}>
                        <thead>
                            <tr>
                                <th className="text-center">Actor</th>
                                <th className="text-center">Ubicación</th>
                                <th className="text-center">Interes</th>
                                <th className="text-center">Posición</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.PROY_ANALISIS_PARTICIPANTES?.map((item: PeopleDto, index: number) => (
                                <tr>
                                    <td>{item.nombre}</td>
                                    <td>{item.ubicacion}</td>
                                    <td>{item.interes}</td>
                                    <td>{item.posicion}</td>
                                    <td>
                                        <Buttons variant="warning" icon="trash" onClick={() => deleteItem(item, index)}></Buttons>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default PeopleTable;