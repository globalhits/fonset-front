export interface CoverageDto {
    index?: number,
    id?: number,
    departamento_id?: number,
    nombre_deparamento?: string,
    municipio_id?: number,
    nombre_municipio: string
}

export interface TypeCoverageDto {
    tipo?: string;
    cobertura?: CoverageDto[]
}