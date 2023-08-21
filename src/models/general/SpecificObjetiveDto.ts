
export interface SpecificObjetiveDto {
    INDEX?: number;// form invertion - coop
    ID?: number,// form invertion - coop
    OBJETIVO?: string,// form invertion - coop
    DESCRIPCIÓN?: string,// form invertion - coop
    INDICADOR?: string,// form invertion - coop
    RESULTADO?:string // form coop
    LINEA_BASE?: string, // form invertion
    META?: string, // form invertion
    MES_INICIAL?: string,// form invertion - coop
    MES_FINAL?: string,// form invertion - coop
    ENTREGABLE?: string,// form invertion
    DESCRIPCION_ENTREGABLE?: string,// form invertion
    CATEGORIA_GENERAL?: string,// form invertion - coop
    CATEGORIA_ESPECIFICA?: string,// form invertion - coop
    NOMBRE_BIEN?: string,// form invertion - coop
    OBJETIVO_ESTRATEGICO?: string,// form invertion - coop
    SUBTEMA_OBJETIVO_ESTRATEGICO?: string,// form invertion - coop
    ACCIONES_OBJETIVO_ESTRATEGICO?: string,// form invertion - coop
    PROGRAMA?: string,// form invertion - coop
    LINEA_PROGRAMA?: string,// form invertion - coop
    FILES?: Document[], // form invertion


}