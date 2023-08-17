export interface CoverageDto {
    INDEX?: number,
    ID?: number,
    DEPARTAMENTO_ID?: number,
    NOMBRE_DEPARTAMENTO?: string,
    MUNICIPIO_ID?: number,
    NOMBRE_MUNICIPIO: string
}

export interface TypeCoverageDto {
    TIPO?: string;
    COBERTURA?: CoverageDto[]
}