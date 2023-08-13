import { Activity } from "./ActivityDto";
import { DependencyInvolvedDto } from "./DependencyInvolvedDto";
import { NationalEntityInvolvedDto } from "./NationalEntityInvolvedDto";
import { SpecificObjetiveDto } from "./SpecificObjetiveDto";
import { TypeCoverageDto } from "./TypeCoverageDto";
import { TypeProjectDto } from "./TypeProjectDto";

// DTO GENERAL
export interface InfoSharedDto {
    PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE?: string;
    PROY_CODIGO?: string;
    PROY_NOMBRE?: string;
    PROY_FECHA?: string;
    PROY_TIPO?: TypeProjectDto[];
    PROY_COBERTURA?: TypeCoverageDto;
    PROY_ENTIDAD_NACIONAL_INVOLUCRADA?: NationalEntityInvolvedDto[];
    PROY_DEPENDENCIAS_INVOLUCRADAS?: DependencyInvolvedDto[];
    // OBJETIVO
    PROY_OBJETIVO_ESPECIFICO?: SpecificObjetiveDto[];
    PROY_ACTIVIDADES?: Activity[];
}