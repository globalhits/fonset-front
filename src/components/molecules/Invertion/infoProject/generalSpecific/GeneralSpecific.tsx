
import Buttons from "../../../../atoms/button/Buttons"
import InputSelected from "../../../../atoms/selected/InputSelected"
import { GeneralObjective } from "../generalObjective/GeneralObjective"
import { TableObjectiveSpecific } from "./table/TableObjectiveSpecific"

export const GeneralSpecific = () => {
    return (
        <>
            <GeneralObjective type="specific" />
            <hr />
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Categoria general / eje Tematico" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Categoria Especifica" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Nombre Bien / Servicio" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Objetivo estratégico direccionamiento" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Subtema del objetivo estratégico" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Acciones Objetivo estratégico" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Programa" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Linea del programa" />
                </div>
                <div className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar objetivo especifico" classStyle="mt-4 " />
                </div>
            </div>
            <TableObjectiveSpecific />
        </>
    )
}