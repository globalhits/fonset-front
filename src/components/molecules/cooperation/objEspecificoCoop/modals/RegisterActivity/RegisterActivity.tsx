import React, { useState, useEffect } from "react";
import { Table, Button, Col, Row, Tab, Tabs } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import InputFloating from "../../../../../atoms/input/Input";
import InputSelected from "../../../../../atoms/selected/InputSelected";
import { BsTrash3 } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { GeneralSelector, addActivities, addActivitiesFilters, filterActivitiesByParentId } from "../../../../../../redux/states/generals/general.slice";
import { ActivityDto } from "../../../../../../models/general/ActivityDto";
import helper from "../../../../../../utils/helper";
import { DependencySelector } from "../../../../../../redux/states/generals/dependency.slice";
import { TypeActivitySelector, fetchApiTypeActivity } from "../../../../../../redux/states/generals/activity.slice";

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
    }, [])

    const [activities, setActivities] = useState<any>([]);

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

    const [error, setError] = useState("");

    const addItemTable = () => {

        if (type !== "cooperative") {
            if (objSpecify === "") {
                setError("");
                return
            }

            if (activity === "") {
                setError("");
                return
            }

            if (description === "") {
                setError("");
                return
            }

            if (indicador === "") {
                setError("");
                return
            }

            if (meta === "") {
                setError("");
                return
            }

            if (inicio === "") {
                setError("");
                return
            }

            if (fin === "") {
                setError("");
                return
            }

            if (hito === "") {
                setError("");
                return
            }

            if (presupuesto === 0) {
                setError("");
                return
            }

            if (entregable === "") {
                setError("");
                return
            }

            if (descriptionEntregable === "") {
                setError("");
                return
            }
        } else {
            if (objSpecify === "") {
                setError("");
                return
            }

            if (activity === "") {
                setError("");
                return
            }

            if (description === "") {
                setError("");
                return
            }

            if (indicador === "") {
                setError("");
                return
            }

            if (meta === "") {
                setError("");
                return
            }

            if (inicio === "") {
                setError("");
                return
            }

            if (fin === "") {
                setError("");
                return
            }

            if (hito === "") {
                setError("");
                return
            }

            if (presupuesto === 0) {
                setError("");
                return
            }

            if (entregable === "") {
                setError("");
                return
            }

            if (descriptionEntregable === "") {
                setError("");
                return
            }
        }

        let activities: ActivityDto[] = data.PROY_ACTIVIDADES ? data.PROY_ACTIVIDADES : [];

        console.log("activities", activities);

        console.log("objetivoId", objetivoId);

        let newList = [...activities, {
            INDEX: helper.getRandomInt(),
            parentId: objetivoId,
            id: helper.getRandomInt(),
            objectivo_especifico: objSpecify,
            tipo_actividad: typeActivity,
            actividad: activity,
            descripcion: description,
            indicador: indicador,
            meta: meta,
            mes_inicio: inicio,
            mes_final: fin,
            hito: hito,
            entregable: entregable,
            descripcion_entregable: descriptionEntregable,
            unidad_responsable: unidadResponsable,
            presupuesto: presupuesto
        }];

        let activitiesFilters: ActivityDto[] = data.PROY_ACTIVIDADES_FILTERS ? data.PROY_ACTIVIDADES_FILTERS : [];

        let newListFilter = [...activitiesFilters, {
            INDEX: helper.getRandomInt(),
            parentId: objetivoId,
            id: helper.getRandomInt(),
            objectivo_especifico: objSpecify,
            tipo_actividad: typeActivity,
            actividad: activity,
            descripcion: description,
            indicador: indicador,
            meta: meta,
            mes_inicio: inicio,
            mes_final: fin,
            hito: hito,
            entregable: entregable,
            descripcion_entregable: descriptionEntregable,
            unidad_responsable: unidadResponsable,
            presupuesto: presupuesto
        }]

        dispatch(addActivities(newList));

        dispatch(addActivitiesFilters(newListFilter));
    }

    const deleteItem = (item: ActivityDto) => {
        let newList = data.PROY_ACTIVIDADES?.filter(object => object.id !== item.id);
        dispatch(addActivities(newList));
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
                                            <InputSelected label="Tipo de actividad*" className="mb-3 inputFloatingModal" options={typeActivities} onChange={(value: string) => setTypeActivity(value)} value={typeActivity} />
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
                                            <InputSelected label="Unidad responsable*" className="mb-3 inputFloatingModal " options={dependencies} onChange={(value: string) => setUnidadResponsable(value)} value={unidadResponsable} />
                                        </Col>
                                    </Row>
                                </>
                            )}

                            <Row style={{ marginLeft: "10px" }}>
                                <Button className="mb-12" variant="outline-primary" size="lg" onClick={() => addItemTable()}>AGREGAR ACTIVIDAD</Button>
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
                                        {data.PROY_ACTIVIDADES_FILTERS?.map((activityItem: ActivityDto, index: number) => (
                                            type !== "cooperative" ?
                                                (
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
                                                            <Button onClick={() => deleteItem(activityItem)} className="mb-8" size="sm" variant="danger">
                                                                <BsTrash3 />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    <tr key={index} className="campos" style={{ fontSize: "13px" }}>
                                                        <td>{index++}</td>
                                                        <td>{activityItem.objectivo_especifico}</td>
                                                        <td>{activityItem.tipo_actividad}</td>
                                                        <td>{activityItem.actividad}</td>
                                                        <td>{activityItem.presupuesto}</td>
                                                        <td>{activityItem.unidad_responsable}</td>
                                                        <td>
                                                            <Button onClick={() => deleteItem(activityItem)} className="mb-8" size="sm" variant="danger">
                                                                <BsTrash3 />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                        ))}
                                    </tbody>
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