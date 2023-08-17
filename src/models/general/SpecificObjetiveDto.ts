import { Activity } from "./ActivityDto";

export interface SpecificObjetiveDto {
    index?: number;
    id?: number,
    objetivo: string,
    descripción: string,
    indicador: string,
    linea_base: string,
    meta: string,
    mes_inicial: string,
    mes_final: string,
    entregable: string,
    descripcion_entregable: string,
    categoria_general: string,
    categoria_especifica: string,
    nombre_bien: string,
    objetivo_estrategico: string,
    subtema_objetivo_estrategico: string,
    acciones_objetivo_estrategico: string,
    programa: string,
    linea_programa: string,
    files: Document[],
}