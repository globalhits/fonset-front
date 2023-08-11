
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
                    <InputSelected label="Categoria general / eje Tematico" options={[]} onChange={(value: any) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Categoria Especifica" options={[]} onChange={(value: any) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Nombre Bien / Servicio" options={[]} onChange={(value: any) => { }} value="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Objetivo estratégico direccionamiento" options={[]} onChange={(value: any) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Subtema del objetivo estratégico" options={[]} onChange={(value: any) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Acciones Objetivo estratégico" options={[]} onChange={(value: any) => { }} value="" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <InputSelected label="Programa" options={[]} onChange={(value: any) => { }} value="" />
                </div>
                <div className="col-lg-4">
                    <InputSelected label="Linea del programa" options={[]} onChange={(value: any) => { }} value="" />
                </div>
                <div className="col-lg-4 text-center">
                    <Buttons variant="outline-info" label="Agregar objetivo especifico" classStyle="mt-4 " onClick={() => { }} />
                </div>
            </div>
            <TableObjectiveSpecific />
        </>
    )
}