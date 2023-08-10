import { Table } from "react-bootstrap";
import CheckBox from "../../../atoms/check/Check";

const TypeCoverage = () => {

    return (
        <>
            <div className="row">
                <div className="col-lg-6"><CheckBox label="Nacional" type="checkbox" className="mr-3 mt-3 mb-3" value="all" setValueChange={() => { }} /></div>
                <div className="col-lg-6"><CheckBox label="Focalizada" type="checkbox" className="mr-3 mt-3 mb-3" value="focalizada" setValueChange={() => { }} /></div>
            </div>

            <Table className="table table-bordered table-condensed table-stripe">
                <thead>
                    <tr>
                        <th className="text-center">Departamentos</th>
                        <th className="text-center">Municipios</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </>
    );

}

export default TypeCoverage;