
import { ActionStrategyObjetiveDto } from "../models/general/ActionStrategyObjetiveDto";
import { DependencyInvolvedDto } from "../models/general/DependencyInvolvedDto";
import { ObjetiveStrategyDirectionDto } from "../models/general/ObjetiveStrategyDirectionDto";

export const LIST_FGN_DEPENDENCY: DependencyInvolvedDto[] = [
    {
        ID: 1,
        DESCRIPCION: "dependencia 1"
    },
    {
        ID: 2,
        DESCRIPCION: "dependencia 2"
    }, {
        ID: 3,
        DESCRIPCION: "dependencia 3"
    }, {
        ID: 4,
        DESCRIPCION: "dependencia 3"
    },
];


export const LIST_OBJETIVES_STRATEGIES_DIRECTIONS: ObjetiveStrategyDirectionDto[] = [
    {
        INDEX: 1,
        ID: 1,
        DESCRIPCION: "Para la seguridad ciudadana",
        SUB_OBJETIVES: [
            {
                INDEX: 1,
                ID: 1,
                DESCRIPCION: "Proteger la vida de las personas, con énfasis en algunas poblaciones priorizadas"
            }, {
                INDEX: 2,
                ID: 2,
                DESCRIPCION: "Contribuir a la garantía de una vida libre de violencia para las mujeres y las niñas niños y adolescentes"
            }, {
                INDEX: 3,
                ID: 3,
                DESCRIPCION: "Contribuir al desarrollo armónico e integral de las niñas y los niños, así como a la formación integral de los adolescentes"
            }, {
                INDEX: 4,
                ID: 4,
                DESCRIPCION: "Proteger el patrimonio y la integridad de la población"
            }, {
                INDEX: 5,
                ID: 5,
                DESCRIPCION: "Proteger la vida y la integridad de los animales"
            }
        ]
    }, {
        INDEX: 2,
        ID: 2,
        DESCRIPCION: "Para la criminalidad organizada",
        SUB_OBJETIVES: [
            {
                INDEX: 1,
                ID: 1,
                DESCRIPCION: "Corredores Regionales de Criminalidad"
            }, {
                INDEX: 2,
                ID: 2,
                DESCRIPCION: "Concentración de los esfuerzos investigativos en objetivos de alto valor y en Fenómenos criminales priorizado"
            }, {
                INDEX: 3,
                ID: 3,
                DESCRIPCION: "Fenómenos criminales priorizados"
            },
        ]
    }, {
        INDEX: 3,
        ID: 3,
        DESCRIPCION: "En la lucha contra la corrupción",
        SUB_OBJETIVES: [
            {
                INDEX: 1,
                ID: 1,
                DESCRIPCION: "OE en la Lucha contra la Corrupción"
            }
        ]
    }, {
        INDEX: 4,
        ID: 4,
        DESCRIPCION: "Para el fortalecimiento en infraestructura tecnología y equipo humano",
        SUB_OBJETIVES: [
            {
                INDEX: 1,
                ID: 1,
                DESCRIPCION: "Dotar a la Fiscalía con la infraestructura física adecuada para sus necesidades"
            }, {
                INDEX: 2,
                ID: 2,
                DESCRIPCION: "Elevar el uso de tecnología en la lucha contra el delito"
            }, {
                INDEX: 3,
                ID: 3,
                DESCRIPCION: "Elevar el uso de tecnología en la lucha contra el delito"
            }, {
                INDEX: 4,
                ID: 4,
                DESCRIPCION: "Fortalecer el Sistema de Gestión Integral"
            }
        ]
    }
];

// export const LIST_PROGRAMS: Program[] = [
//     {
//         INDEX: 1,
//         ID: 1,
//         DESCRIPCION: "Acceso a la justicia",
//         LINES_PROGRAMAS: [
//             {
//                 INDEX: 1,
//                 ID: 1,
//                 DESCRIPCION: "Mejoramiento de la interacción de la FGN con la ciudadanía a través de lo digital"
//             }, {
//                 INDEX: 2,
//                 ID: 2,
//                 DESCRIPCION: "Mejoramiento de la infraestructura física de la FGN a nivel nacional"
//             }, {
//                 INDEX: 3,
//                 ID: 3,
//                 DESCRIPCION: "Ampliación de la infraestructura física en la FGN a nivel nacional"
//             }, {
//                 INDEX: 4,
//                 ID: 4,
//                 DESCRIPCION: "Operatividad para el acceso a la justicia"
//             }
//         ]
//     }, {
//         INDEX: 2,
//         ID: 2,
//         DESCRIPCION: "Interoperabilidad",
//         LINES_PROGRAMAS: [
//             {
//                 INDEX: 1,
//                 ID: 1,
//                 DESCRIPCION: "Fortalecimiento de los mecanismos jurídicos y tecnológicos para la consulta e intercambio de información que apoyan la investigación criminal"
//             }
//         ]
//     }, {
//         INDEX: 3,
//         ID: 3,
//         DESCRIPCION: "Capacidades investigativas y analíticas",
//         LINES_PROGRAMAS: [
//             {
//                 INDEX: 1,
//                 ID: 1,
//                 DESCRIPCION: "Toma de decisiones mediante analítica de datos para el apoyo a los territorios"
//             }, {
//                 INDEX: 2,
//                 ID: 2,
//                 DESCRIPCION: "Fortalecimiento de la capacidad técnico-científica de los laboratorios y grupos de criminalística"
//             }, {
//                 INDEX: 3,
//                 ID: 3,
//                 DESCRIPCION: "Fortalecimiento y modernización tecnológica de la policía judicial de la FGN para la investigación penal"
//             }, {
//                 INDEX: 4,
//                 ID: 4,
//                 DESCRIPCION: "Fortalecimiento de las investigaciones de los delitos contra los recursos naturales y el medio ambiente"
//             }, {
//                 INDEX: 5,
//                 ID: 5,
//                 DESCRIPCION: "Fortalecimiento del conocimiento y competencias de los servidores de la Fiscalía"
//             }, {
//                 INDEX: 6,
//                 ID: 6,
//                 DESCRIPCION: "Fortalecimiento de las investigaciones de los demás delitos"
//             }
//         ]
//     }, {
//         INDEX: 4,
//         ID: 4,
//         DESCRIPCION: "Soluciones tecnológicas",
//         LINES_PROGRAMAS: [
//             {
//                 INDEX: 1,
//                 ID: 1,
//                 DESCRIPCION: "Fortalecer los sistemas de información penal y de apoyo de la FGN"
//             }
//         ]
//     }, {
//         INDEX: 5,
//         ID: 5,
//         DESCRIPCION: "Capacidades de TI adaptables",
//         LINES_PROGRAMAS: [
//             {
//                 INDEX: 1,
//                 ID: 1,
//                 DESCRIPCION: "Fortalecer los sistemas de información penal y de apoyo de la FGN"
//             }, {
//                 INDEX: 2,
//                 ID: 2,
//                 DESCRIPCION: "Fortalecimiento de los servicios de TIC en la implementación de la arquitectura institucional"
//             }
//         ]
//     }
// ];

export const LIST_ACTIONS_STRATEGIES_OBJETIVES: ActionStrategyObjetiveDto[] = [
    {
        ID: 1,
        INDEX: 1,
        DESCRIPCION: "Fortalecimiento de la presencia de la Fiscalía  en los territorios de Colombia, adaptando sus  capacidades a los fenómenos delictivos de cada zona",
        NOMBRE: "Fortalecimiento de la presencia de la Fiscalía  en los territorios de Colombia, adaptando sus  capacidades a los fenómenos delictivos de cada zona",
    }, {
        ID: 2,
        INDEX: 2,
        DESCRIPCION: "Intervenciones itinerantes en delitos y regiones  priorizadas",
        NOMBRE: "Intervenciones itinerantes en delitos y regiones  priorizadas",
    }, {
        ID: 3,
        INDEX: 3,
        DESCRIPCION: "Desarrollo de un modelo investigativo que responda a las dinámicas delictivas de cada región",
        NOMBRE: "Desarrollo de un modelo investigativo que responda a las dinámicas delictivas de cada región",
    }, {
        ID: 4,
        INDEX: 4,
        DESCRIPCION: "Redistribución de la presencia institucional de la Entidad",
        NOMBRE: "Redistribución de la presencia institucional de la Entidad",
    }, {
        ID: 5,
        INDEX: 5,
        DESCRIPCION: "Fortalecimiento de la policía judicial por medio de la cooperación interinstitucional",
        NOMBRE: "Fortalecimiento de la policía judicial por medio de la cooperación interinstitucional",
    }, {
        ID: 6,
        INDEX: 6,
        DESCRIPCION: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
        NOMBRE: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
    }, {
        ID: 7,
        INDEX: 7,
        DESCRIPCION: "Estándares y protocolos de investigación",
        NOMBRE: "Estándares y protocolos de investigación",
    }, {
        ID: 8,
        INDEX: 8,
        DESCRIPCION: "Mayor uso de tecnología para la investigación  de delitos",
        NOMBRE: "Mayor uso de tecnología para la investigación  de delitos",
    }, {
        ID: 9,
        INDEX: 9,
        DESCRIPCION: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
        NOMBRE: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
    }, {
        ID: 10,
        INDEX: 10,
        DESCRIPCION: "Ampliación del acceso a la justicia por medio del uso de múltiples canales",
        NOMBRE: "Ampliación del acceso a la justicia por medio del uso de múltiples canales",
    }, {
        ID: 11,
        INDEX: 11,
        DESCRIPCION: "Aprovechamiento de herramientas legales para elevar el éxito procesal de la FGN",
        NOMBRE: "Aprovechamiento de herramientas legales para elevar el éxito procesal de la FGN",
    }, {
        ID: 12,
        INDEX: 12,
        DESCRIPCION: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
        NOMBRE: "Adopción de herramientas para mejorar la  investigación: análisis de información,  estandarización de procesos, mejor tecnología  y capacitación",
    }, {
        ID: 13,
        INDEX: 13,
        DESCRIPCION: "Articulación de la FGN con la normativa y la institucionalidad internacionales",
        NOMBRE: "Articulación de la FGN con la normativa y la institucionalidad internacionales",
    }
];























