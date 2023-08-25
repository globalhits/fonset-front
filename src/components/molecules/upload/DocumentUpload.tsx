import React, { useEffect, useState } from "react";

import { Table, Row, Col } from "react-bootstrap";
import InputFloating from "../../atoms/input/Input";
import FileUploader from "./FileUploader";
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { GeneralSelector, addDocuments } from "../../../redux/states/generals/general.slice";
import Buttons from "../../atoms/button/Buttons";
import helper from "../../../utils/helper";

export default function DocumentUpload() {

    const { data } = useAppSelector(GeneralSelector);

    const dispatch = useAppDispatch();

    const deleteFile = (file: any) => {
        Swal.fire({
            title: 'Una pregunta',
            text: '¿Está seguro de eliminar el archivo? ',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: 'Cerrar',
        }).then((result) => {
            if (result.isConfirmed) {
                let newList = data.PROY_DOCUMENTOS_ANEXOS?.filter(item => item.ID !== item.ID)
                dispatch(addDocuments(newList));
            }
        });
    };

    return (
        <div>
            <Row className="mt-5 mb-5">
                <Col sm={12}>
                    <FileUploader />
                </Col>
            </Row>

            <Row className="tableDocumentUpload">
                <Col sm={12}>
                    <Table responsive hover>
                        <thead>
                            <tr className="campos" style={{ fontSize: "13px" }}>
                                <th>Archivo</th>
                                <th>Extensión</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.PROY_DOCUMENTOS_ANEXOS?.map((file: any, index: number) => {
                                let blob = helper.b64toBlob(file.base64);
                                let url = URL.createObjectURL(blob);
                                return (<tr key={index}>
                                    <td>{file.name}</td>
                                    <td>{file.extension}</td>
                                    <td className="text-center">
                                        <a className="btn btn-info" href={url} download={file.name}>
                                            <i className="bi bi-file-earmark-arrow-down"></i>
                                        </a>
                                        <Buttons variant="danger" icon="trash-fill" onClick={() => deleteFile(file)} />
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}