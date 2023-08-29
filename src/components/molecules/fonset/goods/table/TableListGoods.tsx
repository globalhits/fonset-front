import React, { useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import Buttons from "../../../../atoms/button/Buttons";
import { GoodsDto } from "../../../../../models/general/GoodDto";
import { useAppSelector, useAppDispatch } from "../../../../../redux/hooks";
import { GeneralSelector, addGoods } from "../../../../../redux/states/generals/general.slice";

const TableListGoods: React.FC<any> = () => {

    const { data, errorInputs } = useAppSelector(GeneralSelector);
    const dispatch = useAppDispatch();

    const [total, setTotal] = useState(0);

    const deleteItem = async (item: GoodsDto, index: number) => {
        const newDataList = await data.PROY_BIENES_SERVICIOS?.filter((object: GoodsDto) => object.INDEX != item.INDEX);
        dispatch(addGoods(newDataList))
    }


    useEffect(() => {
      let sum = 0;
      data.PROY_BIENES_SERVICIOS?.forEach((item: GoodsDto) => {
        let cant = item.CANTIDAD ? item.CANTIDAD : 0;
        let valor = item.VALOR_UNITARIO ? item.VALOR_UNITARIO : 0;
        let subtotal = cant * valor;
        sum += subtotal;
      });
      setTotal(sum);
    }, [data.PROY_BIENES_SERVICIOS]);

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
                        {data.PROY_BIENES_SERVICIOS?.map((item: GoodsDto, index: number) => {
                            let subtotal = 0
                            let cant = item.CANTIDAD ? item.CANTIDAD : 0
                            let valor = item.VALOR_UNITARIO ? item.VALOR_UNITARIO : 0
                            subtotal = cant * valor

                            return (
                                <tr key={index} style={{ fontSize: "12px" }}>
                                    <td>{item.CATEGORIA_GENERAL_TEXT}</td>
                                    <td>{item.CATEGORIA_ESPECIFICA_TEXT}</td>
                                    <td>{item.NOMBRE_BIEN_TEXT}</td>
                                    <td></td>
                                    <td>{item.UNIDAD_MEDIDA_TEXT}</td>
                                    <td>{item.SUBUNIDAD_MEDIDA_TEXT}</td>
                                    <td>{item.VALOR_UNITARIO}</td>
                                    <td>{item.CANTIDAD}</td>
                                    <td>{subtotal}</td>
                                    <td>{item.OBJ_ESTRATEGICO_TEXT}</td>
                                    <td>{item.SUBTEMA_OBJ_ESTRATEGICO_TEXT}</td>
                                    <td className="text-center">
                                        <Buttons variant="danger" icon="trash" onClick={() => deleteItem(item, index)}></Buttons>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>

                </Table>

                <Row>
                    <Col sm={12} style={{color: "gray", textAlign:"center", fontSize:"15px"}}>
                        <div>Total: {total}</div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default TableListGoods;