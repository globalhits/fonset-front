import { ActivityDto } from "./ActivityDto";

export interface SpecificObjetiveDto {
    INDEX?: number;
    ID?: number,
    OBJETIVO?: string,
    DESCRIPCION?: string,
    INDICADOR?: string,
    LINEA_BASE?: string,
    PRESUPUESTO?: string,
    RESULTADO_ESPERADO?: string,

    META?: string,
    MES_INICIAL?: string,
    MES_FINAL?: string,
    ENTREGABLE?: string,
    DESCRIPCION_ENTREGABLE?: string,
    CATEGORIA_GENERAL?: string,
    CATEGORIA_ESPECIFICA?: string,
    NOMBRE_BIEN?: string,
    UNIDAD_MEDIDA?: string,
    SUBUNIDAD_MEDIDA?: string,
    PRESENTACION?: string,
    VALOR_UNIT_IVA?: string,
    CANTIDAD?: string,
    OBJETIVO_ESTRATEGICO?: string,
    SUBTEMA_OBJETIVO_ESTRATEGICO?: string,
    ACCIONES_OBJETIVO_ESTRATEGICO?: string,
    PROGRAMA?: string,
    LINEA_PROGRAMA?: string,
    ACTIVIDADES?: ActivityDto[]
}