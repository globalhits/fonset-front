export interface GoodsDto {
    INDEX: number;
    ID: number;
    CATEGORIA_GENERAL?: string;
    CATEGORIA_ESPECIFICA?: string;
    NOMBRE_BIEN?: string;
    UNIDAD_MEDIDA?: string;
    SUBUNIDAD_MEDIDA?: string;
    PRESENTACION?: string;
    VALOR_UNITARIO?: number;
    CANTIDAD?: number;
    OBJ_ESTRATEGICO?: string;
    SUBTEMA_OBJ_ESTRATEGICO?: string;
    ACCIONES?: string;
    PROGRAMA?: string;
    LINEA_PROGRAMA?: string;
}