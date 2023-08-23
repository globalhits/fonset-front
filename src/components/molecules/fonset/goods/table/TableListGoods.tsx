import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Buttons from "../../../../atoms/button/Buttons";
import { GoodsDto } from "../../../../../models/general/GoodDto";
import { useAppSelector } from "../../../../../redux/hooks";
import { GeneralSelector } from "../../../../../redux/states/generals/general.slice";

const TableListGoods: React.FC<any> = () => {

    const { data, errorInputs } = useAppSelector(GeneralSelector);

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
                            <th className="text-center">General</th>
                            <th className="text-center">Especifica</th>
                            <th className="text-center">Bien/Servicio</th>
                            <th className="text-center">Estado</th>
                            <th className="text-center">Unidad</th>
                            <th className="text-center">Subunidad</th>
                            <th className="text-center">Unit+iva</th>
                            <th className="text-center">Cant.</th>
                            <th className="text-center">SubTotal</th>
                            <th className="text-center">Obj.</th>
                            <th className="text-center">Subtema</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.PROY_BIENES_SERVICIOS?.map((item: GoodsDto, index: number) => (
                            <tr key={index} style={{ fontSize: "12px" }}>
                                <td>{item.CATEGORIA_GENERAL_TEXT}</td>
                                <td>{item.CATEGORIA_ESPECIFICA_TEXT}</td>
                                <td>{item.NOMBRE_BIEN_TEXT}</td>
                                <td>{item.UNIDAD_MEDIDA_TEXT}</td>
                                <td>{item.SUBUNIDAD_MEDIDA_TEXT}</td>
                                <td>{item.VALOR_UNITARIO}</td>
                                <td>{item.CANTIDAD}</td>
                                <td>{/* Calculate SubTotal here */}</td>
                                <td>{item.OBJ_ESTRATEGICO_TEXT}</td>
                                <td>{item.SUBTEMA_OBJ_ESTRATEGICO_TEXT}</td>
                                <td className="text-center">
                                    <Buttons variant="outline-primary" label="Agregar" classStyle="mt-4 " onClick={() => { /* Handle click if needed */ }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default TableListGoods;