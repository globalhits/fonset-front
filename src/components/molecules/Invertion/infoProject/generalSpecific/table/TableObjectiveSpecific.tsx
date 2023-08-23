import { Table } from "react-bootstrap"
import { useAppSelector } from "../../../../../../redux/hooks";
import { GeneralSelector } from "../../../../../../redux/states/generals/general.slice";
import { SpecificObjetiveDto } from "../../../../../../models/general/SpecificObjetiveDto";
import Buttons from "../../../../../atoms/button/Buttons";


interface TableObjectiveSpecificInterface {
    type?: string;
}

export const TableObjectiveSpecific = ({ type }: TableObjectiveSpecificInterface) => {

    const { data, errorInputs } = useAppSelector(GeneralSelector);

    const deleteItem = (item: any) => {

    }

    return (
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
                        {data.PROY_OBJETIVOS_ESPECIFICOS?.map((item: SpecificObjetiveDto) => (
                            type != "cooperative" ?
                                (<tr>
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
                                        <Buttons size="xs" variant="primary" label="" icon="plus" onClick={() => { }} />
                                        <Buttons size="xs" variant="light" label="" icon="search" onClick={() => { }} />
                                        <Buttons size="xs" variant="light" label="" icon="search" onClick={() => { }} />
                                        <Buttons size="xs" variant="warning" label="" icon="file-zip" onClick={() => { }} />
                                        <Buttons size="xs" variant="danger" label="" icon="trash" onClick={() => { }} />
                                    </td>
                                </tr>)
                                : (<tr>
                                    <td>{item.INDEX}</td>
                                    <td>{item.OBJETIVO}</td>
                                    <td>{item.DESCRIPCION}</td>
                                    <td>{item.INDICADOR}</td>
                                    <td>{item.RESULTADO_ESPERADO}</td>
                                    <td>{item.MES_INICIAL}</td>
                                    <td>{item.MES_FINAL}</td>
                                    <td className="text-right">{item.PRESUPUESTO ?? 0}</td>
                                    <td>
                                        <Buttons size="xs" variant="primary" label="" icon="plus" onClick={() => { }} />
                                        <Buttons size="xs" variant="light" label="" icon="search" onClick={() => { }} />
                                        <Buttons size="xs" variant="light" label="" icon="search" onClick={() => { }} />
                                        <Buttons size="xs" variant="warning" label="" icon="file-zip" onClick={() => { }} />
                                        <Buttons size="xs" variant="danger" label="" icon="trash" onClick={() => { }} />
                                    </td>
                                </tr>)
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

    )
}