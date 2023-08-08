interface CoverageDto {
    departamento_id: number,
    municipio_id: number
}

export interface TypeCoverageDto {
    tipo: string;
    cobertura: CoverageDto[]
}