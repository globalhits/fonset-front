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

    CATEGORIA_GENERAL_TEXT?: string;
    CATEGORIA_ESPECIFICA_TEXT?: string;
    NOMBRE_BIEN_TEXT?: string;
    UNIDAD_MEDIDA_TEXT?: string;
    SUBUNIDAD_MEDIDA_TEXT?: string;
    PRESENTACION_TEXT?: string;
    VALOR_UNITARIO_TEXT?: number;
    CANTIDAD_TEXT?: number;
    OBJ_ESTRATEGICO_TEXT?: string;
    SUBTEMA_OBJ_ESTRATEGICO_TEXT?: string;
    ACCIONES_TEXT?: string;
    PROGRAMA_TEXT?: string;
    LINEA_PROGRAMA_TEXT?: string;
}