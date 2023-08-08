import { TypeProjectDto } from "./TypeProjectDto";
import { NationalEntityInvolvedDto } from "./NationalEntityInvolvedDto"
import { TypeCoverageDto } from "./TypeCoverageDto"
import { DependencyInvolvedDto } from "./DependencyInvolvedDto";
import { PeopleDto } from "./PeopleDto";
import { SpecificObjetiveDto } from "./SpecificObjetiveDto";
import { Activity } from "./ActivityDto";

export interface RequestInvertionDto {

    PROY_CODIGO: string;
    PROY_NOMBRE: string;
    PROY_TIPO: TypeProjectDto[];
    PROY_DEPENDENCIA_RESPONSABLE: string;
    PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE: string;
    PROY_ENTIDAD_NACIONAL_INVOLUCRADA: NationalEntityInvolvedDto[];
    PROY_DEPENDENCIAS_INVOLUCRADAS: DependencyInvolvedDto[];
    PROY_COBERTURA: TypeCoverageDto;

    //PROYECTO
    PROY_JUSTIFICACION_ANTECEDENTES: string;
    PROY_POBLACION_AFECTADA: string;
    PROY_POBLACION_OBJETO: string;
    PROY_CARACTERISTICAS_DEMOGRAFICAS: string;
    PROY_ANALISIS_PARTICIPANTES: PeopleDto[];

    //OBJETIVO GENERAL
    PROY_OBJETIVO_GENERAL: string;
    PROY_DESCRIPCION_GENERAL: string;
    PROY_INDICADOR_GENERAL: string;
    PROY_LINEA_BASE_GENERAL: string;
    PROY_META_GENERAL: string;
    PROY_MES_INICIO_GENERAL: Date;
    PROY_MES_FINAL_GENERAL: Date;
    PROY_ENTREGABLE_GENERAL: string;
    PROY_DESCRIPCION_ENTREGABLE_GENERAL: string;

    // OBJETIVO
    PROY_OBJETIVO_ESPECIFICO: SpecificObjetiveDto[];
    PROY_ACTIVIDADES: Activity[]
}