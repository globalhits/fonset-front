import React, { useState } from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import RegisterActivities from "../modals/RegisterActivity/RegisterActivity";
import DetailsObjEspecific from "../modals/viewDetailObjCoop/DetailsObjEspecific";
import ViewRegisterActivities from "../modals/ViewRegisterActivities/ViewRegisterActivities";
import ViewUpload from "../modals/Adjuntos/ViewUpload";
import {BsTrash3} from 'react-icons/bs'


export const TableObjectiveSpecific = () => {
    const [modalRegisterActivity, setModalRegisterActivity] = useState(false);
    const [modalDetail, setModalDetail] = useState(false);
    const [modalActivities, setModalActivities] = useState(false);
    const [modalAdjuntos, setModalAdjuntos] = useState(false);

    return (
        <div className="row mt-5">
            <Col sm={12}>
                <Table className="table table-bordered table-condensed table-striped" style={{ zoom: "0.7" }}>
                    <thead>
                        <tr>
                            <th colSpan={3}>Medidas</th>
                            <th colSpan={3}>Valor</th>
                            <th colSpan={3}>Categoria</th>
                            <th colSpan={3}>Objetivo estrategico</th>
                            <th colSpan={3}>Programa</th>
                            <th rowSpan={2}>Acciones</th>
                        </tr>
                        <tr className="campos" style={{ fontSize: "11px" }}>
                            <th>Estado</th>
                            <th>Unidad</th>
                            <th>Subunidad</th>
                            <th>Unit+iva</th>
                            <th>Cant.</th>
                            <th>SubTotal</th>
                            <th>General</th>
                            <th>Especifica</th>
                            <th>Bien/Servicio</th>
                            <th>Obj.</th>
                            <th>Subtema</th>
                            <th>Acciones</th>
                            <th>Programa</th>
                            <th>Linea</th>
                            <th>Bien/Servicio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button className="mb-8 col-lg-2" size="sm" variant="primary" onClick={() => setModalRegisterActivity(true)}>Registro actividad</Button>
                            <Button className="mb-8 col-lg-2" size="sm" variant="primary" onClick={() => setModalDetail(true)}>Ver detalle obj especifico</Button>
                            <Button className="mb-8 col-lg-2" size="sm" variant="primary" onClick={() => setModalActivities(true)}>Ver registro actividades</Button>
                            <Button className="mb-8 col-lg-2" size="sm" variant="primary" onClick={() => setModalAdjuntos(true)}>Ver doc. adjuntos</Button>
                            <Button className="mb-8 col-lg-2" size="sm" variant="danger"><BsTrash3/></Button>
                        </td>
                    </tbody>
                </Table>
            </Col>
            <RegisterActivities show={modalRegisterActivity} onHide={() => setModalRegisterActivity(false)}/>
            <DetailsObjEspecific show={modalDetail} onHide={() => setModalDetail(false)}/>
            <ViewRegisterActivities show={modalActivities} onHide={() => setModalActivities(false)}/>
            <ViewUpload show={modalAdjuntos} onHide={() => setModalAdjuntos(false)}/>
        </div>

    )
}