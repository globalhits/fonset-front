export interface SubObjetive {
    INDEX?: number,
    ID?: number,
    NOMBRE?: string,
    DESCRIPCION?: string
}

export interface ObjetiveStrategyDirectionDto {
    INDEX?: number,
    ID?: number,
    DESCRIPCION?: string,
    SUB_OBJETIVES?: SubObjetive[]
}