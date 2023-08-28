import React, { useState, useEffect } from "react";
import { Table, Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../../atoms/input/Input";
import InputSelected from "../../../../atoms/selected/InputSelected";
import { BsTrash3, BsPencilFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { GeneralSelector, addActivities, addActivitiesFilters, addValueToActivities, filterActivitiesByParentId } from "../../../../../redux/states/generals/general.slice";
import { ActivityDto } from "../../../../../models/general/ActivityDto";
import helper from "../../../../../utils/helper";
import { DependencySelector } from "../../../../../redux/states/generals/dependency.slice";
import { TypeActivitySelector, fetchApiTypeActivity } from "../../../../../redux/states/generals/activity.slice";

interface ModalProps {
    type?: string,
    objetivoId?: number,
    show: boolean,
    onHide: () => void
};

const RegisterActivities: React.FC<ModalProps> = ({ type, show, objetivoId, onHide }) => {

    const { data } = useAppSelector(GeneralSelector);

    const { dependencies } = useAppSelector(DependencySelector);

    const { typeActivities } = useAppSelector(TypeActivitySelector);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchApiTypeActivity())
    }, []);

    const [activityId, setActivityId] = useState(0);

    const [typeBtnSave, setTypeBtnSave] = useState("add");

    const [objSpecify, setObjSpecify] = useState("");

    const [typeActivity, setTypeActivity] = useState("");

    const [activity, setActivity] = useState("");

    const [description, setDescription] = useState("");

    const [indicador, setIndicador] = useState("");

    const [meta, setMeta] = useState("");

    const [inicio, setInicio] = useState("");

    const [fin, setFin] = useState("");

    const [hito, setHito] = useState("");

    const [presupuesto, setPresupuesto] = useState(0);

    const [entregable, setEntregable] = useState("");

    const [descriptionEntregable, setDescriptionEntregable] = useState("");

    const [unidadResponsable, setUnidadResponsable] = useState("");

    const [totalPresupuesto, setTotalPresupuesto] = useState(0);

    const [error, setError] = useState("");

    const addItemTable = () => {

        let newObject: ActivityDto = {};

        if (type !== "cooperative") {

            if (objSpecify === "") {
                setError("Objetivo especifico requerido");
                return
            }

            if (activity === "") {
                setError("Actividad requerida");
                return
            }

            if (description === "") {
                setError("descripcion de la actividad requerida");
                return
            }

            if (indicador === "") {
                setError("Indicador requerido");
                return
            }

            if (meta === "") {
                setError("Meta requerida");
                return
            }

            if (inicio === "") {
                setError("Fecha Inicio requerida");
                return
            }

            if (fin === "") {
                setError("Fecha final requerida");
                return
            }

            if (hito === "") {
                setError("Hito requerido");
                return
            }

            if (presupuesto === 0) {
                setError("Presupuesto requerido");
                return
            }

            if (entregable === "") {
                setError("Entregable requerido");
                return
            }

            if (descriptionEntregable === "") {
                setError("Descripcion entregable requerido");
                return
            }

            newObject = {
                INDEX: helper.getRandomInt(),
                parentId: objetivoId,
                id: helper.getRandomInt(),
                objectivo_especifico: objSpecify,
                tipo_actividad: "",
                actividad: activity,
                descripcion: description,
                indicador: indicador,
                meta: meta,
                mes_inicio: inicio,
                mes_final: fin,
                hito: hito,
                entregable: entregable,
                descripcion_entregable: descriptionEntregable,
                unidad_responsable: "",
                presupuesto: presupuesto
            }
        } else {
            if (objSpecify === "") {
                setError("Objetivo especifico requerido");
                return
            }

            if (typeActivity === "") {
                setError("");
                return
            }

            if (activity === "") {
                setError("");
                return
            }

            if (presupuesto === 0) {
                setError("Presupuesto requerido");
                return
            }

            if (unidadResponsable === "") {
                setError("Entregable requerido");
                return
            }

            let unitResp = dependencies.find(unit => unit.id == Number(unidadResponsable))?.name

            newObject = {
                INDEX: helper.getRandomInt(),
                parentId: objetivoId,
                id: helper.getRandomInt(),
                objectivo_especifico: objSpecify,
                tipo_actividad: typeActivity,
                tipo_actividad_name: typeActivities.find(typeActivi => typeActivi.id == Number(typeActivity))?.name,
                actividad: activity,
                unidad_responsable: unidadResponsable,
                unidad_responsable_name: dependencies.find(unit => unit.id == Number(unidadResponsable))?.name,
                presupuesto: presupuesto
            }
        }

        let activities: ActivityDto[] = data.PROY_ACTIVIDADES ? data.PROY_ACTIVIDADES : [];

        let newList = [...activities, newObject];

        let activitiesFilters: ActivityDto[] = data.PROY_ACTIVIDADES_FILTERS ? data.PROY_ACTIVIDADES_FILTERS : [];

        let newListFilter = [...activitiesFilters, newObject]

        dispatch(addActivities(newList));

        dispatch(addActivitiesFilters(newListFilter));

        setObjSpecify("");
        setTypeActivity("");
        setActivity("");
        setDescription("");
        setIndicador("");
        setMeta("");
        setInicio(helper.getDateNow());
        setFin(helper.getDateNow());
        setHito("");
        setPresupuesto(0);
        setEntregable("");
        setDescriptionEntregable("");
        setUnidadResponsable("");
        setActivityId(0);
        setError("");
    }

    const editItem = (item: ActivityDto) => {

        if (activityId == 0) {

            setActivityId(item.id ? item.id : 0);

            if (item) {
                if (type !== "cooperative") {
                    setObjSpecify(item.objectivo_especifico ? item.objectivo_especifico : "");
                    setActivity(item.actividad ? item.actividad : "");
                    setDescription(item.descripcion ? item.descripcion : "");
                    setIndicador(item.indicador ? item.indicador : "");
                    setMeta(item.meta ? item.meta : "");
                    setInicio(item.mes_inicio ? item.mes_inicio : "")
                    setFin(item.mes_final ? item.mes_final : "");
                    setHito(item.hito ? item.hito : "");
                    setPresupuesto(item.presupuesto ? item.presupuesto : 0);
                    setEntregable(item.entregable ? item.entregable : "");
                    setDescriptionEntregable(item.descripcion_entregable ? item.descripcion_entregable : "");
                } else {
                    setObjSpecify(item.objectivo_especifico ? item.objectivo_especifico : "");
                    setTypeActivity(item.tipo_actividad ? item.tipo_actividad : "");
                    setActivity(item.actividad ? item.actividad : "")
                    setPresupuesto(item.presupuesto ? item.presupuesto : 0);
                    setUnidadResponsable(item.unidad_responsable ? item.unidad_responsable : "");
                }
            }

            let newList = data.PROY_ACTIVIDADES?.filter((activ: ActivityDto) => activ.id !== item.id);

            let newListFilter = data.PROY_ACTIVIDADES_FILTERS?.filter((activ: ActivityDto) => activ.id !== item.id);

            dispatch(addActivities(newList));

            dispatch(addActivitiesFilters(newListFilter));
        }
        setError("");
    }

    const deleteItem = (item: ActivityDto) => {
        setTypeBtnSave("add");
        let newList = data.PROY_ACTIVIDADES?.filter(object => object.id !== item.id);
        let newListFilter = data.PROY_ACTIVIDADES_FILTERS?.filter(object => object.id !== item.id);
        dispatch(addActivities(newList));
        dispatch(addActivitiesFilters(newListFilter));
    }

    return (
        <div>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Actividades y cronograma de los objetivos especificos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="general"
                        transition={false}
                        id="info-project"
                        className="mt-2 mb-4"
                    >
                        <Tab style={{ zoom: "0.8" }} eventKey="general" title="DATOS GENERALES">
                            {type !== "cooperative" ? (
                                <>
                                    <Row className="mt-4">
                                        <Col sm={12}>
                                            <InputFloating label="Obj. especifico*" type="text" className="mb-3 inputFloating" setValueChange={(value: string) => setObjSpecify(value)} value={objSpecify} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <InputFloating label="Actividad*" type="text" className="mb-3 inputFloatingModal " setValueChange={(value: string) => setActivity(value)} value={activity} />
                                        </Col>
                                        <Col sm={6}>
                                            <InputFloating label="Descripción*" type="text" className="mb-3 inputFloatingModal " setValueChange={(value: string) => setDescription(value)} value={description} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={3}>
                                            <InputFloating label="Indicador*" type="text" className="mb-3 inputFloatingModal " setValueChange={(value: string) => setIndicador(value)} value={indicador} />
                                        </Col>
                                        <Col sm={3}>
                                            <InputFloating label="Meta*" type="text" className="mb-3 inputFloatingModal " setValueChange={(value: string) => setMeta(value)} value={meta} />
                                        </Col>
                                        <Col sm="3">
                                            <InputFloating label="Mes Inicio*" type="date" className="mb-3 InputSelect" setValueChange={(value: string) => setInicio(value)} value={inicio} />
                                        </Col>
                                        <Col sm="3">
                                            <InputFloating label="Mes final*" type="date" className="mb-3 InputSelect" setValueChange={(value: string) => setFin(value)} value={fin} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="3">
                                            <InputFloating label="Hito*" type="text" className="mb-3 inputFloatingModal " setValueChange={(value: string) => setHito(value)} value={hito} />
                                        </Col>
                                        <Col sm="3">
                                            <InputFloating label="Presupuesto*" type="number" className="mb-3 inputFloating" setValueChange={(value: number) => setPresupuesto(value)} value={presupuesto} />
                                        </Col>
                                        <Col sm="6">
                                            <InputFloating label="Entregable*" type="text" className="mb-3 inputFloating" setValueChange={(value: string) => setEntregable(value)} value={entregable} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="12">
                                            <InputFloating label="Descripción entregable*" type="text" className="mb-3 inputFloating" setValueChange={(value: string) => setDescriptionEntregable(value)} value={descriptionEntregable} />
                                        </Col>
                                    </Row>
                                </>
                            ) : (
                                <>
                                    <Row className="mt-4">
                                        <Col sm={12}>
                                            <InputFloating label="Obj. especifico*" type="text" className="mb-3 inputFloating" setValueChange={(value: string) => setObjSpecify(value)} value={objSpecify} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <InputSelected label="Tipo de actividad*" className="mb-3 inputFloatingModal" options={typeActivities ? typeActivities : []} onChange={(value: string) => setTypeActivity(value)} value={typeActivity} />
                                        </Col>
                                        <Col sm={6}>
                                            <InputFloating label="Actividad*" type="text" className="mb-3 inputFloatingModal " setValueChange={(value: string) => setActivity(value)} value={activity} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6}>
                                            <InputFloating label="Valor estimado*" type="number" className="mb-3 inputFloatingModal " setValueChange={(value: number) => setPresupuesto(value)} value={presupuesto} />
                                        </Col>
                                        <Col sm={6}>
                                            <InputSelected label="Unidad responsable*" className="mb-3 inputFloatingModal " options={dependencies ? dependencies : []} onChange={(value: string) => setUnidadResponsable(value)} value={unidadResponsable} />
                                        </Col>
                                    </Row>
                                </>
                            )}

                            <Row style={{ marginLeft: "10px" }}>
                                <h4 className="text-danger">{error}</h4>
                            </Row>

                            <Row className="mt-4 mb-4">
                                <Button className="mb-12" variant="outline-success" size="lg" onClick={() => addItemTable()}>AGREGAR ACTIVIDAD</Button>
                            </Row>

                            <Row className="mt-5">
                                <Table responsive hover style={{ zoom: "0.8" }}>
                                    <thead>
                                        {type !== "cooperative" ? (
                                            <tr className="campos" style={{ fontSize: "13px" }}>
                                                <th>No.</th>
                                                <th>Obj. especifico</th>
                                                <th>Actividad</th>
                                                <th>Desc. Actividad</th>
                                                <th>Indicador</th>
                                                <th>Meta</th>
                                                <th>Mes inicio</th>
                                                <th>Mes final</th>
                                                <th>Hito</th>
                                                <th>Entregable</th>
                                                <th>Desc. Entregable</th>
                                                <th>Presupuesto</th>
                                                <th>Acciones</th>
                                            </tr>
                                        ) : (
                                            <tr className="campos" style={{ fontSize: "13px" }}>
                                                <th>No.</th>
                                                <th>Obj. especifico</th>
                                                <th>Tipo actividad</th>
                                                <th>Actividad</th>
                                                <th>Valor estimado</th>
                                                <th>Unidad responsable</th>
                                                <th>Acciones</th>
                                            </tr>
                                        )}
                                    </thead>
                                    <tbody>
                                        {data.PROY_ACTIVIDADES_FILTERS?.map((activityItem: ActivityDto, index: number) => {
                                            let TOTAL_PRESUPUESTO = 0;
                                            if (type !== "cooperative") {
                                                return (
                                                    <tr key={index} className="campos" style={{ fontSize: "13px" }}>
                                                        <td>{index++}</td>
                                                        <td>{activityItem.objectivo_especifico}</td>
                                                        <td>{activityItem.actividad}</td>
                                                        <td>{activityItem.descripcion}</td>
                                                        <td>{activityItem.indicador}</td>
                                                        <td>{activityItem.meta}</td>
                                                        <td>{activityItem.mes_inicio}</td>
                                                        <td>{activityItem.mes_final}</td>
                                                        <td>{activityItem.hito}</td>
                                                        <td>{activityItem.entregable}</td>
                                                        <td>{activityItem.descripcion_entregable}</td>
                                                        <td>{activityItem.presupuesto}</td>
                                                        <td>
                                                            <Button onClick={() => editItem(activityItem)} className="mb-8" size="sm" variant="primary">
                                                                <BsPencilFill />
                                                            </Button>
                                                            <Button onClick={() => deleteItem(activityItem)} className="mb-8" size="sm" variant="danger">
                                                                <BsTrash3 />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            } else {
                                                return (<tr key={index} className="campos" style={{ fontSize: "13px" }}>
                                                    <td>{index++}</td>
                                                    <td>{activityItem.objectivo_especifico}</td>
                                                    <td>{activityItem.tipo_actividad_name}</td>
                                                    <td>{activityItem.actividad}</td>
                                                    <td>{activityItem.presupuesto}</td>
                                                    <td>{activityItem.unidad_responsable_name}</td>
                                                    <td>
                                                        <Button onClick={() => editItem(activityItem)} className="mb-8" size="sm" variant="primary">
                                                            <BsPencilFill />
                                                        </Button>
                                                        <Button onClick={() => deleteItem(activityItem)} className="mb-8" size="sm" variant="danger">
                                                            <BsTrash3 />
                                                        </Button>
                                                    </td>
                                                </tr>)
                                            }
                                            TOTAL_PRESUPUESTO += Number(activityItem.presupuesto) ?? 0;
                                            console.log("total", TOTAL_PRESUPUESTO);

                                            setTotalPresupuesto(TOTAL_PRESUPUESTO)
                                            // dispatch(addValueToActivities(TOTAL_PRESUPUESTO))
                                        })}
                                    </tbody>
                                    <tfoot>
                                        {type != "cooperative" ?
                                            (<tr>
                                                <td colSpan={12} className="text-right">TOTAL PRESUPUESTO: {totalPresupuesto}</td>
                                                <td>
                                                </td>
                                            </tr>)
                                            : (<tr>
                                                <td colSpan={5} className="text-right">{totalPresupuesto}</td>
                                                <td colSpan={2} className="text-center"></td>
                                            </tr>)
                                        }
                                    </tfoot>
                                </Table>
                            </Row>
                        </Tab>
                    </Tabs>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide} className="mb-8" variant="outline-secondary" size="sm">
                        <i className="bi bi-x-circle"></i>
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RegisterActivities;