
import { ActionStrategyObjetiveDto } from "../models/general/ActionStrategyObjetiveDto";
import { BaseDto } from "../models/general/BaseDto";
import { DependencyInvolvedDto } from "../models/general/DependencyInvolvedDto";
import { LineProgramDto, ProgramDto } from "../models/general/LineProgramDto";
import { ObjetiveStrategyDirectionDto, SubObjetive } from "../models/general/ObjetiveStrategyDirectionDto";

export const LIST_FGN_DEPENDENCY: DependencyInvolvedDto[] = [
    {
        id: 1,
        description: "dependencia 1"
    },
    {
        id: 2,
        description: "dependencia 2"
    }, {
        id: 3,
        description: "dependencia 3"
    }, {
        id: 4,
        description: "dependencia 3"
    },
];

export const LIST_SUB_OBJETIVES: SubObjetive[] = [
    {
        INDEX: 1,
        id: 1,
        parentId: 1,
        description: "Proteger la vida de las personas, con énfasis en algunas poblaciones priorizadas"
    }, {
        INDEX: 2,
        id: 2,
        parentId: 1,
        description: "Contribuir a la garantía de una vida libre de violencia para las mujeres y las niñas niños y adolescentes"
    }, {
        INDEX: 3,
        id: 3,
        parentId: 1,
        description: "Contribuir al desarrollo armónico e integral de las niñas y los niños, así como a la formación integral de los adolescentes"
    }, {
        INDEX: 4,
        id: 4,
        parentId: 1,
        description: "Proteger el patrimonio y la integridad de la población"
    }, {
        INDEX: 5,
        id: 5,
        parentId: 1,
        description: "Proteger la vida y la integridad de los animales"
    }, {
        INDEX: 6,
        id: 6,
        parentId: 2,
        description: "Corredores Regionales de Criminalidad"
    }, {
        INDEX: 7,
        id: 7,
        parentId: 2,
        description: "Concentración de los esfuerzos investigativos en objetivos de alto valor y en Fenómenos criminales priorizado"
    }, {
        INDEX: 8,
        id: 8,
        parentId: 2,
        description: "Fenómenos criminales priorizados"
    }, {
        INDEX: 9,
        id: 9,
        parentId: 3,
        description: "OE en la Lucha contra la Corrupción"
    }, {
        INDEX: 10,
        id: 10,
        parentId: 4,
        description: "Dotar a la Fiscalía con la infraestructura física adecuada para sus necesidades"
    }, {
        INDEX: 11,
        id: 11,
        parentId: 4,
        description: "Elevar el uso de tecnología en la lucha contra el delito"
    }, {
        INDEX: 12,
        id: 12,
        parentId: 4,
        description: "Elevar el uso de tecnología en la lucha contra el delito"
    }, {
        INDEX: 13,
        id: 13,
        parentId: 4,
        description: "Fortalecer el Sistema de Gestión Integral"
    }
]

export const LIST_OBJETIVES_STRATEGIES_DIRECTIONS: ObjetiveStrategyDirectionDto[] = [
    {
        INDEX: 1,
        id: 1,
        description: "Para la seguridad ciudadana"
    }, {
        INDEX: 2,
        id: 2,
        description: "Para la criminalidad organizada",
    }, {
        INDEX: 3,
        id: 3,
        description: "En la lucha contra la corrupción",
    }, {
        INDEX: 4,
        id: 4,
        description: "Para el fortalecimiento en infraestructura tecnología y equipo humano",
    }
];

export const LIST_LINES_PROGRAMS: LineProgramDto[] = [
    {
        INDEX: 1,
        id: 1,
        parentId: 1,
        description: "Mejoramiento de la interacción de la FGN con la ciudadanía a través de lo digital"
    }, {
        INDEX: 2,
        id: 2,
        parentId: 1,
        description: "Mejoramiento de la infraestructura física de la FGN a nivel nacional"
    }, {
        INDEX: 3,
        id: 3,
        parentId: 1,
        description: "Ampliación de la infraestructura física en la FGN a nivel nacional"
    }, {
        INDEX: 4,
        id: 4,
        parentId: 1,
        description: "Operatividad para el acceso a la justicia"
    }, {
        INDEX: 5,
        id: 5,
        parentId: 2,
        description: "Fortalecimiento de los mecanismos jurídicos y tecnológicos para la consulta e intercambio de información que apoyan la investigación criminal"
    }, {
        INDEX: 6,
        id: 6,
        parentId: 3,
        description: "Toma de decisiones mediante analítica de datos para el apoyo a los territorios"
    }, {
        INDEX: 7,
        id: 7,
        parentId: 3,
        description: "Fortalecimiento de la capacidad técnico-científica de los laboratorios y grupos de criminalística"
    }, {
        INDEX: 8,
        id: 8,
        parentId: 3,
        description: "Fortalecimiento y modernización tecnológica de la policía judicial de la FGN para la investigación penal"
    }, {
        INDEX: 9,
        id: 9,
        parentId: 3,
        description: "Fortalecimiento de las investigaciones de los delitos contra los recursos naturales y el medio ambiente"
    }, {
        INDEX: 10,
        id: 10,
        parentId: 3,
        description: "Fortalecimiento del conocimiento y competencias de los servidores de la Fiscalía"
    }, {
        INDEX: 11,
        id: 11,
        parentId: 3,
        description: "Fortalecimiento de las investigaciones de los demás delitos"
    }, {
        INDEX: 12,
        id: 12,
        parentId: 4,
        description: "Fortalecer los sistemas de información penal y de apoyo de la FGN"
    }, {
        INDEX: 13,
        id: 13,
        parentId: 5,
        description: "Fortalecer los sistemas de información penal y de apoyo de la FGN"
    }, {
        INDEX: 14,
        id: 14,
        parentId: 5,
        description: "Fortalecimiento de los servicios de TIC en la implementación de la arquitectura institucional"
    }
];

export const LIST_PROGRAMS: ProgramDto[] = [
    {
        INDEX: 1,
        id: 1,
        name: "Acceso a la justicia",
        description: "Acceso a la justicia",
    }, {
        INDEX: 2,
        id: 2,
        name: "Interoperabilidad",
        description: "Interoperabilidad",
    }, {
        INDEX: 3,
        id: 3,
        name: "Capacidades investigativas y analíticas",
        description: "Capacidades investigativas y analíticas",
    }, {
        INDEX: 4,
        id: 4,
        name: "Soluciones tecnológicas",
        description: "Soluciones tecnológicas",
    }, {
        INDEX: 5,
        id: 5,
        name: "Capacidades de TI adaptables",
        description: "Capacidades de TI adaptables"
    }
];

export const LIST_ACTIONS_STRATEGIES_OBJETIVES: ActionStrategyObjetiveDto[] = [
    {
        id: 1,
        INDEX: 1,
        description: "Fortalecimiento de la presencia de la Fiscalía  en los territorios de Colombia, adaptando sus  capacidades a los fenómenos delictivos de cada zona",
        name: "Fortalecimiento de la presencia de la Fiscalía  en los territorios de Colombia, adaptando sus  capacidades a los fenómenos delictivos de cada zona",
    }, {
        id: 2,
        INDEX: 2,
        description: "Intervenciones itinerantes en delitos y regiones  priorizadas",
        name: "Intervenciones itinerantes en delitos y regiones  priorizadas",
    }, {
        id: 3,
        INDEX: 3,
        description: "Desarrollo de un modelo investigativo que responda a las dinámicas delictivas de cada región",
        name: "Desarrollo de un modelo investigativo que responda a las dinámicas delictivas de cada región",
    }, {
        id: 4,
        INDEX: 4,
        description: "Redistribución de la presencia institucional de la Entidad",
        name: "Redistribución de la presencia institucional de la Entidad",
    }, {
        id: 5,
        INDEX: 5,
        description: "Fortalecimiento de la policía judicial por medio de la cooperación interinstitucional",
        name: "Fortalecimiento de la policía judicial por medio de la cooperación interinstitucional",
    }, {
        id: 6,
        INDEX: 6,
        description: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
        name: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
    }, {
        id: 7,
        INDEX: 7,
        description: "Estándares y protocolos de investigación",
        name: "Estándares y protocolos de investigación",
    }, {
        id: 8,
        INDEX: 8,
        description: "Mayor uso de tecnología para la investigación  de delitos",
        name: "Mayor uso de tecnología para la investigación  de delitos",
    }, {
        id: 9,
        INDEX: 9,
        description: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
        name: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
    }, {
        id: 10,
        INDEX: 10,
        description: "Ampliación del acceso a la justicia por medio del uso de múltiples canales",
        name: "Ampliación del acceso a la justicia por medio del uso de múltiples canales",
    }, {
        id: 11,
        INDEX: 11,
        description: "Aprovechamiento de herramientas legales para elevar el éxito procesal de la FGN",
        name: "Aprovechamiento de herramientas legales para elevar el éxito procesal de la FGN",
    }, {
        id: 12,
        INDEX: 12,
        description: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
        name: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
    }, {
        id: 13,
        INDEX: 13,
        description: "Articulación de la FGN con la normativa y la institucionalidad internacionales",
        name: "Articulación de la FGN con la normativa y la institucionalidad internacionales",
    }
];























