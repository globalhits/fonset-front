
export interface SpecificObjetiveDto {
    INDEX?: number;
    ID?: number,
    OBJETIVO?: string,
    DESCRIPCIÓN?: string,
    INDICADOR?: string,
    LINEA_BASE?: string,

    META?: string,
    MES_INICIAL?: string,
    MES_FINAL?: string,
    ENTREGABLE?: string,
    DESCRIPCION_ENTREGABLE?: string,
    CATEGORIA_GENERAL?: string,
    CATEGORIA_ESPECIFICA?: string,
    NOMBRE_BIEN?: string,
    OBJETIVO_ESTRATEGICO?: string,
    SUBTEMA_OBJETIVO_ESTRATEGICO?: string,
    ACCIONES_OBJETIVO_ESTRATEGICO?: string,
    PROGRAMA?: string,
    LINEA_PROGRAMA?: string,
    FILES?: Document[],
}