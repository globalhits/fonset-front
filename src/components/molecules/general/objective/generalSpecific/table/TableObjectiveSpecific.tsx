import { Table, Row, Col } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { GeneralSelector, addActivitiesFilters, addObjetiveSpecifies, addValueToObjetive, filterActivitiesByParentId, filterObjetiveSpecify } from "../../../../../../redux/states/generals/general.slice";
import { SpecificObjetiveDto } from "../../../../../../models/general/SpecificObjetiveDto";
import Buttons from "../../../../../atoms/button/Buttons";
import RegisterActivities from "../../../modal/activity/RegisterActivity";
import { useState, useEffect } from "react";
import ModalDetailsObjEspecific from "../../../modal/objetive/DetailsObjEspecific";
import ViewRegisterActivities from "../../../modal/activity/ViewRegisterActivities";
import { GoodsDto } from "../../../../../../models/general/GoodDto";


interface TableObjectiveSpecificInterface {
    type: string;
}

export const TableObjectiveSpecific = ({ type }: TableObjectiveSpecificInterface) => {

    const dispatch = useAppDispatch();

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const [showModalActivities, setShowModalActivities] = useState(false);

    const [modalDetail, setModalDetail] = useState(false);

    const [modalViewActivities, setModalViewActivities] = useState(false);

    const [objetiveId, setObjetiveId] = useState(0);

    const [total, setTotal] = useState(0);

    const addActivities = (id: number) => {
        setObjetiveId(id);
        dispatch(filterActivitiesByParentId(id));
        setShowModalActivities(true);
    }

    const seeObjetiveSpecifies = (objetive: SpecificObjetiveDto) => {
        dispatch(filterObjetiveSpecify(objetive));
        setModalDetail(true);
    }

    const deleteItem = (id: any) => {
        let newList = data.PROY_OBJETIVOS_ESPECIFICOS?.filter((objetc: SpecificObjetiveDto) => objetc.ID != id);
        dispatch(addObjetiveSpecifies(newList))
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
        <>
            <RegisterActivities type={type} objetivoId={objetiveId} show={showModalActivities} onHide={() => setShowModalActivities(false)} />
            <ModalDetailsObjEspecific show={modalDetail} type={type} onHide={() => setModalDetail(false)} />
            {/* <ViewRegisterActivities type={type} objetivoId={objetiveId} show={modalViewActivities} onHide={() => setModalViewActivities(false)} /> */}
            <div className="row mt-5">
                <div className="col-lg-12">
                    <Table className="table table-bordered table-condensed table-striped" style={{ zoom: "0.7" }}>
                        <thead>
                            {type != "cooperative"
                                ? (
                                    <tr>
                                        <th>No</th>
                                        <th>Objetivo</th>
                                        <th>Descripción</th>
                                        <th>Linea Base</th>
                                        <th>Meta</th>
                                        <th>Mes Inicio</th>
                                        <th>Mes Final</th>
                                        <th>Entregable</th>
                                        <th>Descrip Entregable</th>
                                        <th>Presupuesto</th>
                                        <th>Acciones</th>
                                    </tr>
                                ) : (
                                    <tr>
                                        <th>No</th>
                                        <th>Objetivo</th>
                                        <th>Descripción</th>
                                        <th>Indicador</th>
                                        <th>Resultado esp</th>
                                        <th>Mes Inicio</th>
                                        <th>Mes Final</th>
                                        <th>Vlr estimado</th>
                                        <th>Acciones</th>
                                    </tr>
                                )
                            }

                        </thead>
                        <tbody>
                            {data.PROY_OBJETIVOS_ESPECIFICOS?.map((item: SpecificObjetiveDto, index: number) => {
                                let TOTAL_PRESUPUESTO = 0;
                                if (type != "cooperative") {
                                    return (<tr key={index}>
                                        <td>{item.INDEX}</td>
                                        <td>{item.OBJETIVO}</td>
                                        <td>{item.DESCRIPCION}</td>
                                        <td>{item.LINEA_BASE}</td>
                                        <td>{item.META}</td>
                                        <td>{item.MES_INICIAL}</td>
                                        <td>{item.MES_FINAL}</td>
                                        <td>{item.ENTREGABLE}</td>
                                        <td>{item.DESCRIPCION_ENTREGABLE}</td>
                                        <td className="text-right">{item.PRESUPUESTO ?? 0}</td>
                                        <td>
                                            <Buttons size="xs" variant="primary" label="" icon="plus" onClick={() => addActivities(item.ID ? item.ID : 0)} />
                                            <Buttons size="xs" variant="light" label="" icon="search" onClick={() => seeObjetiveSpecifies(item)} />
                                            <Buttons size="xs" variant="danger" label="" icon="trash" onClick={() => deleteItem(item.ID)} />
                                        </td>
                                    </tr>)
                                } else {
                                    return (<tr key={index}>
                                        <td>{item.INDEX}</td>
                                        <td>{item.OBJETIVO}</td>
                                        <td>{item.DESCRIPCION}</td>
                                        <td>{item.INDICADOR}</td>
                                        <td>{item.RESULTADO_ESPERADO}</td>
                                        <td>{item.MES_INICIAL}</td>
                                        <td>{item.MES_FINAL}</td>
                                        <td className="text-right">{item.PRESUPUESTO ?? 0}</td>
                                        <td className="text-center">
                                            <Buttons size="xs" variant="primary" label="" icon="plus" onClick={() => addActivities(item.ID ? item.ID : 0)} />
                                            <Buttons size="xs" variant="light" label="" icon="search" onClick={() => seeObjetiveSpecifies(item)} />
                                            <Buttons size="xs" variant="danger" label="" icon="trash" onClick={() => deleteItem(item.ID)} />
                                        </td>
                                    </tr>)
                                }
                                TOTAL_PRESUPUESTO += item.PRESUPUESTO ?? 0;
                                dispatch(addValueToObjetive(TOTAL_PRESUPUESTO))
                            })}
                            {

                                errorInputs && data.PROY_OBJETIVOS_ESPECIFICOS?.length == 0
                                    ? (
                                        type !== "cooperative" ? (
                                            <tr><td colSpan={11} className="text-center"><h5 className="text-danger">¡Objetivos especificos requeridos!</h5></td></tr>
                                        ) : (<tr><td colSpan={9} className="text-center"><h5 className="text-danger">¡Objetivos especificos requeridos!</h5></td></tr>)
                                    )
                                    : null
                            }
                        </tbody>
                        <tfoot>
                            {type != "cooperative" ?
                                (<tr>
                                    <td colSpan={10} className="text-right">TOTAL PRESUPUESTO: {data.PROY_OBJETIVOS_ESPECIFICOS_TOTAL ?? 0}</td>
                                    <td>
                                    </td>
                                </tr>)
                                : (<tr>
                                    <td colSpan={8} className="text-right">{data.PROY_OBJETIVOS_ESPECIFICOS_TOTAL ?? 0}</td>
                                    <td className="text-center"></td>
                                </tr>)
                            }
                        </tfoot>
                    </Table>
                    <Row>
                        <Col sm={12} style={{ color: "gray", textAlign: "center", fontSize: "15px" }}>
                            <div>Total: {total}</div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}