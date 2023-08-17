import { SpecificObjetiveDto } from "./SpecificObjetiveDto";

export interface Activity {
    index?: number;
    id?: number;
    objectivo_especifico: SpecificObjetiveDto,
    actividad: string,
    descripcion: string,
    indicador: string,
    meta: string,
    mes_inicio: Date,
    mes_final: Date,
    hito: string,
    entregable: string,
    presupuesto: string
}