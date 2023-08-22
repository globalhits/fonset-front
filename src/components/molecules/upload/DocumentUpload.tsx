import React, { useEffect } from "react";

import { Table, Button, Accordion, Row, Col } from "react-bootstrap";
import InputFloating from "../../atoms/input/Input";
import FileUploader from "./FileUploader";
import Swal from "sweetalert2";
import { BsPencilSquare, BsTrash3, BsDownload } from 'react-icons/bs'
import { useAppSelector } from "../../../redux/hooks";
import { GeneralSelector } from "../../../redux/states/generals/general.slice";

export default function DocumentUpload() {

    const { data } = useAppSelector(GeneralSelector)

    useEffect(() => {
        console.log("data", data);

    }, [])

    const showConfirmationAlert = () => {
        Swal.fire({
            title: 'Una pregunta',
            text: '¿Está seguro de eliminar el registro? ',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar',
            cancelButtonText: 'Si, seguro',
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes agregar el código para cerrar la ventana o realizar alguna acción adicional
                console.log('La ventana se cerrará');
            }
        });
    };

    return (
        <div>
            <Row sm={12}>
                <Col>
                    <InputFloating label="Descripcion*" type="text" placeholder="" className="mb-3 inputFloating" setValueChange={(value: string) => { }} value="" />
                </Col>
                <Col>
                    <FileUploader />
                </Col>
            </Row>

            <Row className="tableDocumentUpload">
                <Col sm={12}>
                    <Table responsive hover>
                        <thead>
                            <tr className="campos" style={{ fontSize: "13px" }}>
                                <th>Descripcion</th>
                                <th>Archivo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td >
                                    <Button className="mb-4 col-lg-2" size="sm" variant="success"><BsPencilSquare /></Button>
                                    <Button className="mb-4 col-lg-2" size="sm" variant="danger" onClick={showConfirmationAlert}><BsTrash3 /></Button>
                                    <Button className="mb-4 col-lg-2" size="sm" variant="warning"><BsDownload /></Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}