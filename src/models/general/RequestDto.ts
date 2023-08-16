import { PeopleDto } from "./PeopleDto";
import { Activity } from "./ActivityDto";
import { DependencyInvolvedDto } from "./DependencyInvolvedDto";
import { NationalEntityInvolvedDto } from "./NationalEntityInvolvedDto";
import { SpecificObjetiveDto } from "./SpecificObjetiveDto";
import { TypeCoverageDto } from "./TypeCoverageDto";
import { TypeProjectDto } from "./TypeProjectDto";

export interface RequestDto {

    //GENERAL
    PROY_CODIGO?: string;
    PROY_NOMBRE?: string;
    PROY_FECHA?: string;

    PROY_TIPO?: TypeProjectDto[]; //INVERTION, COOPERATIVE
    PROY_COBERTURA?: TypeCoverageDto; //INVERTION, COOPERATIVE
    PROY_ENTIDAD_NACIONAL_INVOLUCRADA?: NationalEntityInvolvedDto[]; //INVERTION, COOPERATIVE
    PROY_DEPENDENCIAS_INVOLUCRADAS?: DependencyInvolvedDto[]; //INVERTION, COOPERATIVE
    PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE?: string; //INVERTION

    PROY_PAIS_COOPERANTE?: string; //COOPERATIVE
    PROY_IMPLEMENTADOR?: string; //COOPERATIVE

    PROY_JUSTIFICACION_ANTECEDENTES?: string; //INVERTION, COOPERATIVE
    PROY_POBLACION_AFECTADA?: string; // INVERTION, 
    PROY_POBLACION_OBJETO?: string;
    PROY_CARACTERISTICAS_DEMOGRAFICAS?: string; // INVERTION

    PROY_ANALISIS_PARTICIPANTES?: PeopleDto[]; // INVERTION

    //OBJETIVO GENERAL
    PROY_OBJETIVO_GENERAL?: string; //INVERTION
    PROY_DESCRIPCION_GENERAL?: string; //INVERTION
    PROY_INDICADOR_GENERAL?: string; //INVERTION
    PROY_LINEA_BASE_GENERAL?: string; //INVERTION
    PROY_META_GENERAL?: string; //INVERTION
    PROY_MES_INICIO_GENERAL?: string; //INVERTION
    PROY_MES_FINAL_GENERAL?: string; //INVERTION
    PROY_ENTREGABLE_GENERAL?: string; //INVERTION
    PROY_DESCRIPCION_ENTREGABLE_GENERAL?: string; //INVERTION

    PROY_FECHA_ESPERADA_INICIO?: string;  //INVERTION
    PROY_FECHA_ESPERADA_TERMINADA?: string; //INVERTION

    PROY_OBJETIVOS_ESPECIFICOS?: SpecificObjetiveDto[]; //INVERTION
    PROY_ACTIVIDADES?: Activity[]; //INVERTION

    PROY_SUB_REGIONAL_APOYO?: string;
    PROY_SECCIONAL?: string;
    PROY_DEPARTAMENTO?: string;
    PROY_MUNICIPIO_ORIGEN?: string;
    PROY_ENTIDAD_DEPENDENCIA_RESPONSABLE?: string;
    PROY_DISTRITO_JUDICIAL?: string;

    PROY_OBJETIVO_ESPECIFICO?: string;
    PROY_POBLACION_OBJETIVO?: string;
    PROY_DESCRIPCION_BIENES_SERVICIOS?: string;
    PROY_DESCRIPCION_PROBLEMA?: string;
    PROY_OBSERVACIONES?: string;
    PROY_DOCUMENTOS_ANEXOS?: any[];
    PROY_BIENES_SERVICIOS?: any[];
    PROY_ESTADO?: string;
    PROY_CREACION_PROYECTO?: string;

    PROY_DEPENDENCIA_RESPONSABLE?: string;
    PROY_JUSTIFICACION?: string;

    PROY_DURACION_ESTIMADA_MESES?: number;
}