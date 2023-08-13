import { InfoSharedDto } from "../general/InfoSharedDto";

export interface RequestFonsetDto extends InfoSharedDto {
    PRFO_SUB_REGIONAL_APOYO?: string,
    PRFO_SECCIONAL?: string,
    PRFO_DEPARTAMENTO?: Object,
    PRFO_MUNICIPIO_ORIGEN?: Object,
    PRFO_ENTIDAD_DEPENDENCIA_RESPONSABLE?: Object,
    PRFO_DISTRITO_JUDICIAL?: Object,
    PRFO_OBJETIVO_GENERAL?: string,
    PRFO_OBJETIVOS_ESPECIFICOS?: string,
    PRFO_POBLACION_OBJETIVO?: string,
    PRFO_DESCRIPCION_BIENES_SERVICIOS?: string,
    PRFO_JUSTIFICACION?: string,
    PRFO_DESCRIPCION_PROBLEMA?: string,
    PRFO_OBSERVACIONES?: string,
    PRFO_DOCUMENTOS_ANEXOS?: any[],
    PRFO_BIENES_SERVICIOS?: any[],
    PRFO_ESTADO?: string,
    PRFO_CREACION_PROYECTO?: string,
}