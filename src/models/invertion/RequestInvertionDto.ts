import { TypeProjectDto } from "../general/TypeProjectDto";
import { NationalEntityInvolvedDto } from "../general/NationalEntityInvolvedDto"
import { TypeCoverageDto } from "../general/TypeCoverageDto"
import { DependencyInvolvedDto } from "../general/DependencyInvolvedDto";
import { PeopleDto } from "./PeopleDto";
import { SpecificObjetiveDto } from "../general/SpecificObjetiveDto";
import { Activity } from "../general/ActivityDto";
import { InfoSharedDto } from "../general/InfoSharedDto";

export interface RequestInvertionDto extends InfoSharedDto {

    PROY_DEPENDENCIA_RESPONSABLE?: string;

    //PROYECTO
    PROY_JUSTIFICACION_ANTECEDENTES?: string;
    PROY_POBLACION_AFECTADA?: string;
    PROY_POBLACION_OBJETO?: string;
    PROY_CARACTERISTICAS_DEMOGRAFICAS?: string;
    PROY_ANALISIS_PARTICIPANTES?: PeopleDto[];

    //OBJETIVO GENERAL
    PROY_OBJETIVO_GENERAL?: string;
    PROY_DESCRIPCION_GENERAL?: string;
    PROY_INDICADOR_GENERAL?: string;
    PROY_LINEA_BASE_GENERAL?: string;
    PROY_META_GENERAL?: string;
    PROY_MES_INICIO_GENERAL?: string;
    PROY_MES_FINAL_GENERAL?: string;
    PROY_ENTREGABLE_GENERAL?: string;
    PROY_DESCRIPCION_ENTREGABLE_GENERAL?: string;


}