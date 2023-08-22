import { useState } from "react";
import { Table } from "react-bootstrap";
import Buttons from "../../../../../../atoms/button/Buttons";
import InputFloating from "../../../../../../atoms/input/Input";
import { useAppDispatch, useAppSelector } from "../../../../../../../redux/hooks";
import { GeneralSelector, addPeoples } from "../../../../../../../redux/states/generals/general.slice";
import { PeopleDto } from "../../../../../../../models/general/PeopleDto";
import helper from "../../../../../../../utils/helper";

const PeopleTable = () => {

    const dispatch = useAppDispatch();

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const [actor, setActor] = useState("");

    const [ubicacion, setUbicacion] = useState("");

    const [interes, setInteres] = useState("");

    const [posicion, setPosicion] = useState("");

    const [error, setError] = useState("");

    const addItem = async () => {

        if (actor.trim() === "") {
            setError('El campo actor no puede estar vacío.');
            return;
        }

        if (ubicacion.trim() === "") {
            setError('El campo ubicacion no puede estar vacío.');
            return;
        }

        if (interes.trim() === "") {
            setError('El campo interes no puede estar vacío.');
            return;
        }

        if (posicion.trim() === "") {
            setError('El campo posición no puede estar vacío.');
            return;
        }

        if (actor.trim() === "") {
            setError('El campo interes no puede estar vacío.');
            return;
        }

        let newList: PeopleDto[] = data.PROY_ANALISIS_PARTICIPANTES ? data.PROY_ANALISIS_PARTICIPANTES : [];

        const newDataList = [...newList, {
            INDEX: helper.getRandomInt(),
            ID: null,
            NOMBRE: actor,
            UBICACION: ubicacion,
            INTERES: interes,
            POSICION: posicion,
        }];

        dispatch(addPeoples(newDataList));

        setActor("");
        setInteres("");
        setPosicion("");
        setUbicacion("");
    }

    const deleteItem = async (item: PeopleDto, index: number) => {
        const newDataList = await data.PROY_ANALISIS_PARTICIPANTES?.filter((object: PeopleDto) => object.INDEX != item.INDEX);
        dispatch(addPeoples(newDataList))
    }

    return (
        <>
            <div className="row mt-2"> 
                <div className="col-lg-12">
                    <h5>Analisis de participantes<span className="text-red">*</span></h5>
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
                    <Buttons variant="warning" label="Añadir" icon="plus-circle" onClick={() => addItem()} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
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
                                <tr key={index}>
                                    <td>{item.NOMBRE}</td>
                                    <td>{item.UBICACION}</td>
                                    <td>{item.INTERES}</td>
                                    <td>{item.POSICION}</td>
                                    <td className="text-center">
                                        <Buttons variant="danger" icon="trash" onClick={() => deleteItem(item, index)}></Buttons>
                                    </td>
                                </tr>
                            ))}
                            {
                                errorInputs && data.PROY_ANALISIS_PARTICIPANTES?.length == 0
                                    ? (<tr><td colSpan={5} className="text-center"><h5 className="text-danger">¡Participantes requeridos!</h5></td></tr>)
                                    : null
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default PeopleTable;