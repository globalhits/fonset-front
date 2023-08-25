import { Table } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { GeneralSelector, addObjetiveSpecifies, filterActivitiesByParentId } from "../../../../../../redux/states/generals/general.slice";
import { SpecificObjetiveDto } from "../../../../../../models/general/SpecificObjetiveDto";
import Buttons from "../../../../../atoms/button/Buttons";
import RegisterActivities from "../../../../general/RegisterActivity/RegisterActivity";
import { useState } from "react";
import ModalDetailsObjEspecific from "../../../../cooperation/objEspecificoCoop/modals/viewDetailObjCoop/DetailsObjEspecific";


interface TableObjectiveSpecificInterface {
    type: string;
}

export const TableObjectiveSpecific = ({ type }: TableObjectiveSpecificInterface) => {

    const dispatch = useAppDispatch();

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const [showModalActivities, setShowModalActivities] = useState(false);

    const [modalDetail, setModalDetail] = useState(false);

    const [objetive, setObjetive] = useState({});

    const [objetiveId, setObjetiveId] = useState(0);

    const addActivities = (id: number) => {
        console.log("id", id);
        setObjetiveId(id);
        dispatch(filterActivitiesByParentId(id));
        setShowModalActivities(true);
    }

    const seeObjetiveSpecifies = (objetive: SpecificObjetiveDto) => {
        setObjetive(objetive);
        setModalDetail(true);
    }

    const deleteItem = (id: any) => {
        let newList = data.PROY_OBJETIVOS_ESPECIFICOS?.filter((objetc: SpecificObjetiveDto) => objetc.ID != id);
        dispatch(addObjetiveSpecifies(newList))
    }

    return (
        <>
            <RegisterActivities type={type} objetivoId={objetiveId} show={showModalActivities} onHide={() => setShowModalActivities(false)} />
            <ModalDetailsObjEspecific show={modalDetail} objetive={objetive} type={type} onHide={() => setModalDetail(false)} />
            {/* <RegisterActivities type={type} objetivoId={objetiveId} show={showModalActivities} onHide={() => setShowModalActivities(false)} /> */}
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
                            {data.PROY_OBJETIVOS_ESPECIFICOS?.map((item: SpecificObjetiveDto, index: number) => (
                                type != "cooperative" ?
                                    (<tr key={index}>
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
                                            <Buttons size="xs" variant="light" label="" icon="search" onClick={() => { }} />
                                            <Buttons size="xs" variant="warning" label="" icon="file-zip" onClick={() => { }} />
                                            <Buttons size="xs" variant="danger" label="" icon="trash" onClick={() => deleteItem(item.ID)} />
                                        </td>
                                    </tr>)
                                    : (<tr key={index}>
                                        <td>{item.INDEX}</td>
                                        <td>{item.OBJETIVO}</td>
                                        <td>{item.DESCRIPCION}</td>
                                        <td>{item.INDICADOR}</td>
                                        <td>{item.RESULTADO_ESPERADO}</td>
                                        <td>{item.MES_INICIAL}</td>
                                        <td>{item.MES_FINAL}</td>
                                        <td className="text-right">{item.PRESUPUESTO ?? 0}</td>
                                        <td>
                                            <Buttons size="xs" variant="primary" label="" icon="plus" onClick={() => addActivities(item.ID ? item.ID : 0)} />
                                            <Buttons size="xs" variant="light" label="" icon="search" onClick={() => seeObjetiveSpecifies(item)} />
                                            <Buttons size="xs" variant="light" label="" icon="search" onClick={() => { }} />
                                            <Buttons size="xs" variant="warning" label="" icon="file-zip" onClick={() => { }} />
                                            <Buttons size="xs" variant="danger" label="" icon="trash" onClick={() => deleteItem(item.ID)} />
                                        </td>
                                    </tr>)
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}