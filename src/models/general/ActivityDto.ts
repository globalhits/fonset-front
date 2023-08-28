import { SpecificObjetiveDto } from "./SpecificObjetiveDto";

export interface ActivityDto {
    INDEX?: number;
    id?: number;
    parentId?: number,
    objectivo_especifico?: string,
    tipo_actividad?: string,
    tipo_actividad_name?: string,
    actividad?: string,
    descripcion?: string,
    indicador?: string,
    meta?: string,
    mes_inicio?: string,
    mes_final?: string,
    hito?: string,
    entregable?: string,
    descripcion_entregable?: string,
    unidad_responsable?: string,
    unidad_responsable_name?: string,
    presupuesto?: number,
    total_presupuesto?: number,
}