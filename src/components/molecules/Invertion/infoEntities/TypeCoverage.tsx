import { Table, Button } from "react-bootstrap";
import CheckBox from "../../../atoms/check/Check";
import InputSelected from "../../../atoms/selected/InputSelected";

const TypeCoverage = () => {

    return (
        <>
            <div className="row">
                <div className="col-lg-6"><CheckBox label="Nacional" type="checkbox" className="mr-3 mt-3 mb-3" value="all" setValueChange={() => { }} /></div>
                <div className="col-lg-6"><CheckBox label="Focalizada" type="checkbox" className="mr-3 mt-3 mb-3" value="focalizada" setValueChange={() => { }} /></div>
            </div>
          
            <div className="row mt-2">
                <div className="col-lg-5 mb-2">
                    <InputSelected label="Departamento*" className="mb-2 inputFloating" />
                </div>
                <div className="col-lg-5 mb-2">
                    <InputSelected label="Departamento*" className="mb-3 inputFloating" />
                </div>
                <div className="col-lg-2">
                    <Button className=""  variant="outline-info">+</Button>
                </div>
                
                
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