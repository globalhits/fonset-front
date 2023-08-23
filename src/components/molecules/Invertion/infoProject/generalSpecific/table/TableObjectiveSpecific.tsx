import { Table } from "react-bootstrap"


export const TableObjectiveSpecific = () => {
    return (
        <div className="row mt-5">
            <div className="col-lg-12">
                <Table className="table table-bordered table-condensed table-striped" style={{ zoom: "0.7" }}>
                    <thead>
                        <tr>
                            <th>No</th> 
                            <th>Nombre</th>
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
                    </thead>
                    <tbody>
                        <tr>
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
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

    )
}