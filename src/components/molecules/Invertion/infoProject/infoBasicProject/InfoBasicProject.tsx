import { Table } from "react-bootstrap"
import InputFloating from "../../../../atoms/input/Input"
import Buttons from "../../../../atoms/button/Buttons";

const InfoBasicProject = () => {
    return (
        <div className="row">
            <h4>Justificación o antecedentes del proyecto</h4>
            <div className="row mt-4 mb-3">
                <div className="col-lg-12">
<<<<<<< HEAD
                    <InputFloating label="Digite la justificación" className="mb-3 inputFloating" type="text" placeholder="Escriba el objetivo general del proyecto" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Digite la justificación" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                </div>
            </div>
            <hr />
            <h4>Población objetivo</h4>
            <div className="row mt-3">
                <div className="col-lg-12">
<<<<<<< HEAD
                    <InputFloating label="Población afectada por el problema" className="mb-3 inputFloating" type="text" placeholder="Digite la descripción" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Población afectada por el problema" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
<<<<<<< HEAD
                    <InputFloating label="Población objeto de la intervención" className="mb-3 inputFloating" type="text" placeholder="Digite el indicador" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Población objeto de la intervención" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
<<<<<<< HEAD
                    <InputFloating label="Caracteristicas demograficas de la población objetivo" className="mb-3 inputFloating" type="text" placeholder="Digite el indicador" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Caracteristicas demograficas de la población objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-6">
                    <h4>Analisis de participantes</h4>
                </div>
                <div className="col-lg-6 text-right">
                    <Buttons variant="primary" label="Añadir" />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
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
            </div>
        </div>
    )
}

export default InfoBasicProject;