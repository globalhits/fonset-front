import { InfoSharedDto } from "../general/InfoSharedDto";

export interface RequestCooperativeDto extends InfoSharedDto {
    PRCI_PAIS_COOPERANTE: string
    PRCI_IMPLEMENTADOR: string
    PRCI_JUSTIFICACION: string
    PRCI_FECHA_ESPERADA_INICIO: string
    PRCI_FECHA_ESPERADA_TERMINADA: string
    PRCI_DURACION_ESTIMADA_MESES: number
    PRCI_OBJETIVO_GENERAL: string
}