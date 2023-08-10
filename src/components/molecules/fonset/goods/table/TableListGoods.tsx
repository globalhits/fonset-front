import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import Buttons from "../../../../atoms/button/Buttons";

const TableListGoods: React.FC<any> = ({ }) => {
    return (
        <Row className="mt-3 mb-3">
            <Col sm={12}>
                <Table className="table table-bordered table-condensed table-striped" style={{ zoom: "0.7" }}>
                    <thead>
                        <tr className="text-center">
                            <th colSpan={3}>Categoria</th>
                            <th colSpan={3}>Medidas</th>
                            <th colSpan={3}>Valor</th>
                            <th colSpan={2}>Objetivo estrategico</th>
                            <th rowSpan={2}>Acciones</th>
                        </tr>
                        <tr className="text-center">
                            <th>General</th>
                            <th>Especifica</th>
                            <th>Bien/Servicio</th>
                            <th>Estado</th>
                            <th>Unidad</th>
                            <th>Subunidad</th>
                            <th>Unit+iva</th>
                            <th>Cant.</th>
                            <th>SubTotal</th>
                            <th>Obj.</th>
                            <th>Subtema</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ fontSize: "12px" }}>
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
                            <td className="text-center"><Buttons variant="outline-primary" label="Agregar" classStyle="mt-4 " /></td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TableListGoods;