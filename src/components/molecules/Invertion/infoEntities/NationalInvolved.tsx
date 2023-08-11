import { Button, Table } from "react-bootstrap";
import InputFloating from "../../../atoms/input/Input";

const NationalInvolved = () => {

    return (
        <div>
            <div className="row mt-2">
                <div className="col-lg-8">
                    <InputFloating label="Nombre entidad nacional" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-4">
                     <Button className=" col-lg-2 mb-2"  variant="outline-info">+</Button>
                </div>
            </div>
            
            <Table className="table table-bordered table-condensed table-stripe">
                <thead>
                    <tr>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );

}

export default NationalInvolved;

