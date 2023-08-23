
import { ActionStrategyObjetiveDto } from "../models/general/ActionStrategyObjetiveDto";
import { DependencyInvolvedDto } from "../models/general/DependencyInvolvedDto";
import { LineProgramDto, ProgramDto } from "../models/general/LineProgramDto";
import { ObjetiveStrategyDirectionDto, SubObjetive } from "../models/general/ObjetiveStrategyDirectionDto";

export const CATEGORY_GENERAL = [
    {
        "id": 158712,
        "name": "Componentes tecnológicos y de conectividad",
        "description": "Componentes tecnológicos y de conectividad",
        "value": "CTC"
    },
    {
        "id": 158713,
        "name": "Infraestructura física",
        "description": "Infraestructura física",
        "value": "IF"
    },
    {
        "id": 158714,
        "name": "Parque automotor",
        "description": "Parque automotor",
        "value": "PA"
    },
    {
        "id": 158715,
        "name": "PJ - Criminalística",
        "description": "PJ - Criminalística",
        "value": "PJ"
    },
    {
        "id": 158716,
        "name": "PJ - Investigaciones",
        "description": "PJ - Investigaciones",
        "value": "PJINVES"
    },
    {
        "id": 158717,
        "name": "Prevención del delito",
        "description": "Prevención del delito",
        "value": "PD"
    }
];

export const CATEGORY_SPECIFYC = [
    {
        "id": 159242,
        "name": "Camperos",
        "description": "Camperos",
        "value": "CAMP",
        "parentId": 158714
    },
    {
        "id": 159243,
        "name": "Motocicletas",
        "description": "Motocicletas",
        "value": "MOT",
        "parentId": 158714
    },
    {
        "id": 159244,
        "name": "Necromóviles",
        "description": "Necromóviles",
        "value": "NECR",
        "parentId": 158714
    },
    {
        "id": 159256,
        "name": "Acústica",
        "description": "Acústica",
        "value": "ACUS",
        "parentId": 158715
    },
    {
        "id": 159366,
        "name": "Inteligencia",
        "description": "Inteligencia",
        "value": "INTE",
        "parentId": 158716
    },
    {
        "id": 159367,
        "name": "Armamento",
        "description": "Armamento",
        "value": "ARM",
        "parentId": 158716
    },
    {
        "id": 159174,
        "name": "Micrófonos",
        "description": "Micrófonos",
        "value": "MIC",
        "parentId": 158712
    },
    {
        "id": 159177,
        "name": "Suministro e instalación de sistemas de seguridad",
        "description": "Suministro e instalación de sistemas de seguridad",
        "value": "SUM",
        "parentId": 158712
    },
    {
        "id": 159245,
        "name": "Accesorios",
        "description": "Accesorios",
        "value": "ACC",
        "parentId": 158714
    },
    {
        "id": 159257,
        "name": "Arquitectura, Ing. Civil y Topografía",
        "description": "Arquitectura, Ing. Civil y Topografía",
        "value": "ARQ",
        "parentId": 158715
    },
    {
        "id": 159258,
        "name": "Automotores",
        "description": "Automotores",
        "value": "AUT",
        "parentId": 158715
    },
    {
        "id": 159259,
        "name": "Balística",
        "description": "Balística",
        "value": "BAL",
        "parentId": 158715
    },
    {
        "id": 159260,
        "name": "Criminalística campo",
        "description": "Criminalística campo",
        "value": "CRIMCAM",
        "parentId": 158715
    },
    {
        "id": 159152,
        "name": "Audífonos",
        "description": "Audífonos",
        "value": "AUD",
        "parentId": 158712
    },
    {
        "id": 159264,
        "name": "Genética",
        "description": "Genética",
        "value": "GEN",
        "parentId": 158715
    },
    {
        "id": 159261,
        "name": "Documentología y grafología",
        "description": "Documentología y grafología",
        "value": "DOCGRA",
        "parentId": 158715
    },
    {
        "id": 159262,
        "name": "Elementos de bioseguridad",
        "description": "Elementos de bioseguridad",
        "value": "ELEMBIOS",
        "parentId": 158715
    },
    {
        "id": 159263,
        "name": "Fotografía y video",
        "description": "Fotografía y video",
        "value": "FOTVID",
        "parentId": 158715
    },
    {
        "id": 159265,
        "name": "Grafología",
        "description": "Grafología",
        "value": "GRAF",
        "parentId": 158715
    },
    {
        "id": 159266,
        "name": "Informática forense",
        "description": "Informática forense",
        "value": "INFOREN",
        "parentId": 158715
    },
    {
        "id": 159267,
        "name": "Lofoscopia",
        "description": "Lofoscopia",
        "value": "LOF",
        "parentId": 158715
    },
    {
        "id": 159268,
        "name": "Metrología",
        "description": "Metrología",
        "value": "METR",
        "parentId": 158715
    },
    {
        "id": 159269,
        "name": "Química",
        "description": "Química",
        "value": "QUIM",
        "parentId": 158715
    },
    {
        "id": 159365,
        "name": "Tácticos",
        "description": "Tácticos",
        "value": "TACT",
        "parentId": 158716
    },
    {
        "id": 159362,
        "name": "Medios tecnológicos",
        "description": "Medios tecnológicos",
        "value": "MEDTEC",
        "parentId": 158716
    },
    {
        "id": 159363,
        "name": "Equipo militar",
        "description": "Equipo militar",
        "value": "EQUMIL",
        "parentId": 158716
    },
    {
        "id": 159364,
        "name": "Explosivos",
        "description": "Explosivos",
        "value": "EXPL",
        "parentId": 158716
    },
    {
        "id": 159382,
        "name": "Kit Futuro Colombia",
        "description": "Kit Futuro Colombia",
        "value": "KITFUT",
        "parentId": 158717
    },
    {
        "id": 159383,
        "name": "Campañas",
        "description": "Campañas",
        "value": "CAMP",
        "parentId": 158717
    },
    {
        "id": 159176,
        "name": "Solución de videoconferencia",
        "description": "Solución de videoconferencia",
        "value": "SOL",
        "parentId": 158712
    },
    {
        "id": 159172,
        "name": "Kit de videoconferencia",
        "description": "kit",
        "value": "KIT",
        "parentId": 158712
    },
    {
        "id": 159173,
        "name": "Cámaras Gesell",
        "description": "Cámaras",
        "value": "GES",
        "parentId": 158712
    },
    {
        "id": 159175,
        "name": "Monitores",
        "description": "Monitores",
        "value": "MON",
        "parentId": 158712
    },
    {
        "id": 159178,
        "name": "Videoproyectores",
        "description": "Videoproyectores",
        "value": "VID",
        "parentId": 158712
    },
    {
        "id": 159194,
        "name": "Adquisición de inmuebles",
        "description": "Adquisición de inmuebles",
        "value": "ADQ",
        "parentId": 158713
    },
    {
        "id": 159195,
        "name": "Estudios, diseños y/o licencias",
        "description": "Estudios, diseños y/o licencias",
        "value": "EST",
        "parentId": 158713
    },
    {
        "id": 159196,
        "name": "Nueva construcción de inmuebles",
        "description": "Nueva construcción de inmuebles",
        "value": "NUE",
        "parentId": 158713
    },
    {
        "id": 159197,
        "name": "Adecuaciones locativas",
        "description": "Adecuaciones locativas",
        "value": "ADE",
        "parentId": 158713
    },
    {
        "id": 159198,
        "name": "Mantenimiento general de sedes",
        "description": "Mantenimiento general de sedes",
        "value": "MANT",
        "parentId": 158713
    },
    {
        "id": 159199,
        "name": "Suministro e instalación de mobiliario",
        "description": "Suministro e instalación de mobiliario",
        "value": "SUM",
        "parentId": 158713
    },
    {
        "id": 159200,
        "name": "Suministro e instalación de redes eléctricas",
        "description": "Suministro e instalación de redes eléctricas",
        "value": "SUMRED",
        "parentId": 158713
    },
    {
        "id": 159201,
        "name": "Suministro y/o mantenimiento de aires acondicionados",
        "description": "Suministro y/o mantenimiento de aires acondicionados",
        "value": "SUMACON",
        "parentId": 158713
    },
    {
        "id": 159202,
        "name": "Suministro, instalación y/o mantenimiento de ascensores",
        "description": "Suministro, instalación y/o mantenimiento de ascensores",
        "value": "SUMASCE",
        "parentId": 158713
    },
    {
        "id": 159203,
        "name": "Suministro y/o instalación de plantas eléctricas",
        "description": "Suministro y/o instalación de plantas eléctricas",
        "value": "SUMPLA",
        "parentId": 158713
    },
    {
        "id": 159204,
        "name": "Señalización institucional",
        "description": "Señalización institucional",
        "value": "SEÑA",
        "parentId": 158713
    },
    {
        "id": 159240,
        "name": "Automóviles",
        "description": "Automóviles",
        "value": "AUT",
        "parentId": 158714
    },
    {
        "id": 159241,
        "name": "Camionetas",
        "description": "Camionetas",
        "value": "CAM",
        "parentId": 158714
    }
]

export const SERVICES = [
    {
        "id": 159218,
        "name": "Sofá",
        "description": "Sofá",
        "value": "SOF",
        "parentId": 159199
    },
    {
        "id": 159220,
        "name": "Suministro e instalación de redes eléctricas",
        "description": "Suministro e instalación de redes eléctricas",
        "value": "SUMRED",
        "parentId": 159200
    },
    {
        "id": 159251,
        "name": "Motocicleta alto cilindraje",
        "description": "Motocicleta alto cilindraje",
        "value": "MOTALCI",
        "parentId": 159243
    },
    {
        "id": 159252,
        "name": "Motocicleta bajo cilindraje",
        "description": "Motocicleta bajo cilindraje",
        "value": "MOTBAJCIL",
        "parentId": 159243
    },
    {
        "id": 159253,
        "name": "Necromóviles",
        "description": "Necromóviles",
        "value": "NECRO",
        "parentId": 159244
    },
    {
        "id": 159288,
        "name": "Software Leica Map Star",
        "description": "Software Leica Map Star",
        "value": "SOFT",
        "parentId": 159259
    },
    {
        "id": 159289,
        "name": "SUCOBA",
        "description": "SUCOBA",
        "value": "SUCO",
        "parentId": 159259
    },
    {
        "id": 159293,
        "name": "Maletín profesional para levantamiento de evidencias",
        "description": "Maletín profesional para levantamiento de evidencias",
        "value": "MALPRO",
        "parentId": 159260
    },
    {
        "id": 159304,
        "name": "Congeladores 1447 L",
        "description": "Congeladores 1447 L",
        "value": "CON1447",
        "parentId": 159264
    },
    {
        "id": 159305,
        "name": "Congeladores 650 L",
        "description": "Congeladores 650 L",
        "value": "CON650",
        "parentId": 159264
    },
    {
        "id": 159306,
        "name": "Crosslinker UV",
        "description": "Crosslinker UV",
        "value": "CROSS",
        "parentId": 159264
    },
    {
        "id": 159307,
        "name": "Equipo de cuantificación en tiempo real",
        "description": "Equipo de cuantificación en tiempo real",
        "value": "EQUTIREAL",
        "parentId": 159264
    },
    {
        "id": 159326,
        "name": "Kit de bloqueadores",
        "description": "Kit de bloqueadores",
        "value": "KITBLO",
        "parentId": 159266
    },
    {
        "id": 159327,
        "name": "Cabina Ninhidrina (revelado de huellas dactilares con extracción de gases y humos)",
        "description": "Cabina Ninhidrina (revelado de huellas dactilares con extracción de gases y humos)",
        "value": "CABNIN",
        "parentId": 159267
    },
    {
        "id": 159335,
        "name": "Kit dactiloscopia",
        "description": "Kit dactiloscopia",
        "value": "KITDAC",
        "parentId": 159267
    },
    {
        "id": 159336,
        "name": "Morphoeva",
        "description": "Morphoeva",
        "value": "MOR",
        "parentId": 159267
    },
    {
        "id": 159337,
        "name": "Sistema AFIS",
        "description": "Sistema AFIS",
        "value": "AFIS",
        "parentId": 159267
    },
    {
        "id": 159368,
        "name": "Cámara telescópica/endoscópica",
        "description": "Cámara telescópica/endoscópica",
        "value": "CAMTEL",
        "parentId": 159362
    },
    {
        "id": 159369,
        "name": "Cámaras de inmersión",
        "description": "Cámaras de inmersión",
        "value": "CAMINV",
        "parentId": 159362
    },
    {
        "id": 159370,
        "name": "Elementos de inteligencia",
        "description": "Elementos de inteligencia",
        "value": "ELEMINT",
        "parentId": 159362
    },
    {
        "id": 159371,
        "name": "Cascos balísticos",
        "description": "Cascos balísticos",
        "value": "CAS",
        "parentId": 159363
    },
    {
        "id": 159381,
        "name": "Chalecos antibalas",
        "description": "Chalecos antibalas",
        "value": "CHALE",
        "parentId": 159367
    },
    {
        "id": 159384,
        "name": "Carpa toldo plegable para exteriores",
        "description": "Carpa toldo plegable para exteriores",
        "value": "CARPATOL",
        "parentId": 159382
    },
    {
        "id": 159385,
        "name": "Pendones roll up",
        "description": "Pendones roll up",
        "value": "PENDO",
        "parentId": 159382
    },
    {
        "id": 159388,
        "name": "Llavero Con Argolla Y Mini Linterna Con Luz Led",
        "description": "Llavero Con Argolla Y Mini Linterna Con Luz Led",
        "value": "LLAV",
        "parentId": 159382
    },
    {
        "id": 159182,
        "name": "Parlantes",
        "description": "Parlantes",
        "value": "PAR",
        "parentId": 159172
    },
    {
        "id": 159183,
        "name": "Cámaras Gesell",
        "description": "Cámaras Gesell",
        "value": "GES",
        "parentId": 159173
    },
    {
        "id": 159184,
        "name": "Micrófonos",
        "description": "Micrófonos",
        "value": "MIC",
        "parentId": 159174
    },
    {
        "id": 159185,
        "name": "Monitor 40 pul",
        "description": "Monitor 40 pul",
        "value": "MON",
        "parentId": 159175
    },
    {
        "id": 159189,
        "name": "Cámaras tipo bala",
        "description": "Cámaras tipo bala",
        "value": "CAMBAL",
        "parentId": 159177
    },
    {
        "id": 159190,
        "name": "Control biométrico",
        "description": "Control biométrico",
        "value": "CONT",
        "parentId": 159177
    },
    {
        "id": 159205,
        "name": "Lote",
        "description": "Lote",
        "value": "LOT",
        "parentId": 159194
    },
    {
        "id": 159206,
        "name": "Casa",
        "description": "Casa",
        "value": "CAS",
        "parentId": 159194
    },
    {
        "id": 159207,
        "name": "Estudios, diseños y/o licencias",
        "description": "Estudios, diseños y/o licencias",
        "value": "EST",
        "parentId": 159195
    },
    {
        "id": 159211,
        "name": "Puesto tipo investigador",
        "description": "Puesto tipo investigador",
        "value": "PUESTI",
        "parentId": 159199
    },
    {
        "id": 159213,
        "name": "Puesto tipo asistente",
        "description": "Puesto tipo asistente",
        "value": "PUESTIASIS",
        "parentId": 159199
    },
    {
        "id": 159215,
        "name": "Archivador",
        "description": "Archivador",
        "value": "ARCH",
        "parentId": 159199
    },
    {
        "id": 159216,
        "name": "Sillas tándem",
        "description": "Sillas tándem",
        "value": "SILLATAN",
        "parentId": 159199
    },
    {
        "id": 159217,
        "name": "Sillas",
        "description": "SILLAS",
        "value": "SILL",
        "parentId": 159199
    },
    {
        "id": 159221,
        "name": "Suministro e instalación aires",
        "description": "Suministro e instalación aires",
        "value": "SUMAIR",
        "parentId": 159201
    },
    {
        "id": 159222,
        "name": "Equipo de aires acondicionados",
        "description": "Equipo de aires acondicionados",
        "value": "EQUIAIR",
        "parentId": 159201
    },
    {
        "id": 159223,
        "name": "Mantenimiento de aires",
        "description": "Mantenimiento de aires",
        "value": "MANAIR",
        "parentId": 159201
    },
    {
        "id": 159233,
        "name": "Equipo ascensores",
        "description": "Equipo ascensores",
        "value": "EQUASC",
        "parentId": 159201
    },
    {
        "id": 159234,
        "name": "Mantenimiento de ascensores",
        "description": "Mantenimiento de ascensores",
        "value": "MANTASC",
        "parentId": 159201
    },
    {
        "id": 159235,
        "name": "Generador eléctrico",
        "description": "Generador eléctrico",
        "value": "GEN",
        "parentId": 159203
    },
    {
        "id": 159236,
        "name": "Planta eléctrica",
        "description": "Planta eléctrica",
        "value": "PLAELEC",
        "parentId": 159200
    },
    {
        "id": 159237,
        "name": "UPS",
        "description": "UPS",
        "value": "UPS",
        "parentId": 159200
    },
    {
        "id": 159238,
        "name": "Señalización externa",
        "description": "Señalización externa",
        "value": "SEÑALEXT",
        "parentId": 159204
    },
    {
        "id": 159246,
        "name": "Automóvil sedan",
        "description": "Automóvil sedan",
        "value": "AUTSED",
        "parentId": 159240
    },
    {
        "id": 159247,
        "name": "Camioneta 4x4",
        "description": "Camioneta 4x4",
        "value": "CAM4X4",
        "parentId": 159240
    },
    {
        "id": 159248,
        "name": "Camioneta 4x2",
        "description": "Camioneta 4x2",
        "value": "CAM4X2",
        "parentId": 159240
    },
    {
        "id": 159249,
        "name": "Camioneta tipo platón",
        "description": "Camioneta tipo platón",
        "value": "CAMPLA",
        "parentId": 159240
    },
    {
        "id": 159250,
        "name": "Camperos",
        "description": "Camperos",
        "value": "CAMP",
        "parentId": 159242
    },
    {
        "id": 159254,
        "name": "Casco",
        "description": "Casco",
        "value": "Casco",
        "parentId": 159245
    },
    {
        "id": 159255,
        "name": "Rodilleras",
        "description": "Rodilleras",
        "value": "ROD",
        "parentId": 159245
    },
    {
        "id": 159273,
        "name": "GNSS",
        "description": "GNSS",
        "value": "GNSS",
        "parentId": 159257
    },
    {
        "id": 159270,
        "name": "Solución profesional para análisis de voz (cotejos de voz)",
        "description": "Solución profesional para análisis de voz (cotejos de voz)",
        "value": "ACUS",
        "parentId": 159256
    },
    {
        "id": 159271,
        "name": "Distanciómetro GPS",
        "description": "Distanciómetro GPS",
        "value": "DISTGPS",
        "parentId": 159257
    },
    {
        "id": 159272,
        "name": "Esclerómetro",
        "description": "Esclerómetro",
        "value": "ESCL",
        "parentId": 159257
    },
    {
        "id": 159274,
        "name": "GPS",
        "description": "GPS",
        "value": "GPS",
        "parentId": 159257
    },
    {
        "id": 159275,
        "name": "Medidor distancia láser",
        "description": "Medidor distancia láser",
        "value": "MEDLAS",
        "parentId": 159257
    },
    {
        "id": 159276,
        "name": "Odómetros",
        "description": "Odómetros",
        "value": "ODO",
        "parentId": 159257
    },
    {
        "id": 159277,
        "name": "Escáner 3D",
        "description": "Escáner 3D",
        "value": "ESC",
        "parentId": 159257
    },
    {
        "id": 159278,
        "name": "Software a perpetuidad de drone",
        "description": "Software a perpetuidad de drone",
        "value": "SOFT",
        "parentId": 159257
    },
    {
        "id": 159279,
        "name": "Drone",
        "description": "Drone",
        "value": "Drone",
        "parentId": 159257
    },
    {
        "id": 159280,
        "name": "Escáner vehícular",
        "description": "Escáner vehícular",
        "value": "ESCVEH",
        "parentId": 159258
    },
    {
        "id": 159281,
        "name": "Boroscopio",
        "description": "Boroscopio",
        "value": "BOR",
        "parentId": 159259
    },
    {
        "id": 159282,
        "name": "Cabina de extracción sin ductos",
        "description": "Cabina de extracción sin ductos",
        "value": "CABEXTR",
        "parentId": 159259
    },
    {
        "id": 159283,
        "name": "Kit de balística de campo",
        "description": "Kit de balística de campo",
        "value": "KIT",
        "parentId": 159259
    },
    {
        "id": 159284,
        "name": "Kit de trayectorias balísticas",
        "description": "Kit de trayectorias balísticas",
        "value": "KITTRA",
        "parentId": 159259
    },
    {
        "id": 159285,
        "name": "Kit SUCOBA",
        "description": "Kit SUCOBA",
        "value": "KITSUCO",
        "parentId": 159259
    },
    {
        "id": 159286,
        "name": "Macroscopio de comparación balística",
        "description": "Macroscopio de comparación balística",
        "value": "MACRO",
        "parentId": 159259
    },
    {
        "id": 159287,
        "name": "Medidor digital de fuerza (dinamómetro)",
        "description": "Medidor digital de fuerza (dinamómetro)",
        "value": "MED",
        "parentId": 159259
    },
    {
        "id": 159290,
        "name": "Tanque recuperador en agua",
        "description": "Tanque recuperador en agua",
        "value": "TANREAGUA",
        "parentId": 159259
    },
    {
        "id": 159291,
        "name": "Tanque recuperador en algodón",
        "description": "Tanque recuperador en algodón",
        "value": "TAREALG",
        "parentId": 159259
    },
    {
        "id": 159292,
        "name": "Reflectores portátiles",
        "description": "Reflectores portátiles",
        "value": "REFPOR",
        "parentId": 159260
    },
    {
        "id": 159294,
        "name": "Reflectores portátiles",
        "description": "Reflectores portátiles",
        "value": "REFPOR",
        "parentId": 159261
    },
    {
        "id": 159295,
        "name": "Elementos de bioseguridad",
        "description": "Elementos de bioseguridad",
        "value": "ELEBIO",
        "parentId": 159262
    },
    {
        "id": 159296,
        "name": "Comparador espectral",
        "description": "Comparador espectral",
        "value": "COMESP",
        "parentId": 159263
    },
    {
        "id": 159297,
        "name": "Cámaras compactas",
        "description": "Cámaras compactas",
        "value": "CAMCOM",
        "parentId": 159263
    },
    {
        "id": 159298,
        "name": "Kit de fotografía",
        "description": "Kit de fotografía",
        "value": "KITFOT",
        "parentId": 159263
    },
    {
        "id": 159299,
        "name": "Trípodes",
        "description": "Trípodes",
        "value": "Trípodes",
        "parentId": 159263
    },
    {
        "id": 159300,
        "name": "Videocámaras",
        "description": "Videocámaras",
        "value": "VID",
        "parentId": 159263
    },
    {
        "id": 159301,
        "name": "Estaciones gráficas",
        "description": "Estaciones gráficas",
        "value": "ESGRA",
        "parentId": 159263
    },
    {
        "id": 159302,
        "name": "Analizador genético",
        "description": "Analizador genético",
        "value": "ANAGEN",
        "parentId": 159264
    },
    {
        "id": 159303,
        "name": "Cabina para reacción en cadena de la polimerasa",
        "description": "Cabina para reacción en cadena de la polimerasa",
        "value": "CABREA",
        "parentId": 159264
    },
    {
        "id": 159308,
        "name": "Sistema concentrador integrado de vacío",
        "description": "Sistema concentrador integrado de vacío",
        "value": "SISVAC",
        "parentId": 159264
    },
    {
        "id": 159309,
        "name": "Sistema de purificación de agua",
        "description": "Sistema de purificación de agua",
        "value": "SISPURAGU",
        "parentId": 159264
    },
    {
        "id": 159310,
        "name": "Termociclador de punto final 3x32 pozos",
        "description": "Termociclador de punto final 3x32 pozos",
        "value": "TERMC",
        "parentId": 159264
    },
    {
        "id": 159311,
        "name": "Termociclador de punto final 96 pozos",
        "description": "Termociclador de punto final 96 pozos",
        "value": "TERMC996",
        "parentId": 159264
    },
    {
        "id": 159312,
        "name": "Comparador de video espectral",
        "description": "Comparador de video espectral",
        "value": "COMPVID",
        "parentId": 159265
    },
    {
        "id": 159313,
        "name": "Estereomicroscopios",
        "description": "Estereomicroscopios",
        "value": "ESTE",
        "parentId": 159265
    },
    {
        "id": 159314,
        "name": "Actualización FTK",
        "description": "Actualización FTK",
        "value": "FTK",
        "parentId": 159266
    },
    {
        "id": 159315,
        "name": "Actualización EnCase",
        "description": "Actualización EnCase",
        "value": "ENCASE",
        "parentId": 159266
    },
    {
        "id": 159316,
        "name": "Actualización DVR-Examiner",
        "description": "Actualización DVR-Examiner",
        "value": "EXAMINER",
        "parentId": 159266
    },
    {
        "id": 159317,
        "name": "Actualización IEF-Axiom",
        "description": "Actualización IEF-Axiom",
        "value": "AXIOM",
        "parentId": 159266
    },
    {
        "id": 159318,
        "name": "Actualización UFED 4PC",
        "description": "UFED",
        "value": "UFED",
        "parentId": 159266
    },
    {
        "id": 159319,
        "name": "Actualización UFED Cloud",
        "description": "Actualización UFED Cloud",
        "value": "UFEDCLO",
        "parentId": 159266
    },
    {
        "id": 159320,
        "name": "Actualización Link Analisys",
        "description": "Actualización Link Analisys",
        "value": "LINK",
        "parentId": 159266
    },
    {
        "id": 159321,
        "name": "Actualización Elcomsoft",
        "description": "Actualización Elcomsoft",
        "value": "ELCOMSOFT",
        "parentId": 159266
    },
    {
        "id": 159322,
        "name": "Actualización Oxygen Forensic",
        "description": "Actualización Oxygen Forensic",
        "value": "OXYGEN",
        "parentId": 159266
    },
    {
        "id": 159323,
        "name": "Actualización XRY",
        "description": "Actualización XRY",
        "value": "XRY",
        "parentId": 159266
    },
    {
        "id": 159324,
        "name": "Actualización BlackBag",
        "description": "Actualización BlackBag",
        "value": "BLACKBAG",
        "parentId": 159266
    },
    {
        "id": 159325,
        "name": "Bolsas antiestáticas",
        "description": "Bolsas antiestáticas",
        "value": "BOLANT",
        "parentId": 159266
    },
    {
        "id": 159328,
        "name": "Cámaras de visión térmica",
        "description": "Cámaras de visión térmica",
        "value": "CAMVI",
        "parentId": 159267
    },
    {
        "id": 159329,
        "name": "Computador full work station",
        "description": "Computador full work station",
        "value": "COMFULL",
        "parentId": 159267
    },
    {
        "id": 159330,
        "name": "Estación difusora de polvo descendente",
        "description": "Estación difusora de polvo descendente",
        "value": "ESTPOL",
        "parentId": 159267
    },
    {
        "id": 159352,
        "name": "Balanzas < 500 g",
        "description": "Balanzas < 500 g",
        "value": "metr",
        "parentId": 159268
    },
    {
        "id": 159354,
        "name": "Básculas",
        "description": "Básculas",
        "value": "bas",
        "parentId": 159268
    },
    {
        "id": 159333,
        "name": "Kit de luces forenses",
        "description": "Kit de luces forenses",
        "value": "KITLLU",
        "parentId": 159267
    },
    {
        "id": 159334,
        "name": "Estereomicroscopios",
        "description": "Estereomicroscopios",
        "value": "ESTER",
        "parentId": 159267
    },
    {
        "id": 159338,
        "name": "Sistema de detección de huellas dactilares en móviles multiespectrales",
        "description": "Sistema de detección de huellas dactilares en móviles multiespectrales",
        "value": "SISHUEE",
        "parentId": 159267
    },
    {
        "id": 159339,
        "name": "Sistema UV-VIS-IR de captura, optimización y procesamiento de huellas",
        "description": "Sistema UV-VIS-IR de captura, optimización y procesamiento de huellas",
        "value": "SISVIS",
        "parentId": 159267
    },
    {
        "id": 159353,
        "name": "Balanzas > 500 g",
        "description": "Balanzas > 500 g",
        "value": "BALAN",
        "parentId": 159268
    },
    {
        "id": 159355,
        "name": "Cintas métricas",
        "description": "Cintas métricas",
        "value": "cin",
        "parentId": 159268
    },
    {
        "id": 159356,
        "name": "Pie de rey",
        "description": "Pie de rey",
        "value": "pie",
        "parentId": 159268
    },
    {
        "id": 159357,
        "name": "Termohidrómetros",
        "description": "Termohidrómetros",
        "value": "termo",
        "parentId": 159268
    },
    {
        "id": 159358,
        "name": "Cromatógrafo de gases con detector selectivo de masas",
        "description": "Cromatógrafo de gases con detector selectivo de masas",
        "value": "crom",
        "parentId": 159269
    },
    {
        "id": 159372,
        "name": "Chalecos multipropósito",
        "description": "Chalecos multipropósito",
        "value": "CHALE",
        "parentId": 159363
    },
    {
        "id": 159359,
        "name": "Cromatógrafo líquido con detector selectivo de masas",
        "description": "Cromatógrafo líquido con detector selectivo de masas",
        "value": "crom1",
        "parentId": 159269
    },
    {
        "id": 159360,
        "name": "Destilador y desionizador",
        "description": "Destilador y desionizador",
        "value": "dEST",
        "parentId": 159269
    },
    {
        "id": 159361,
        "name": "Espectrofotómetro infrarrojo de transformada de Fourier",
        "description": "Espectrofotómetro infrarrojo de transformada de Fourier",
        "value": "espec",
        "parentId": 159269
    },
    {
        "id": 159373,
        "name": "Sistema de almacenamiento interno para vehículo antiexplosivos y transporte de robot",
        "description": "Sistema de almacenamiento interno para vehículo antiexplosivos y transporte de robot",
        "value": "SISALMA",
        "parentId": 159364
    },
    {
        "id": 159374,
        "name": "Espectrometro raman portatil",
        "description": "Espectrometro raman portatil",
        "value": "ESPECT",
        "parentId": 159364
    },
    {
        "id": 159375,
        "name": "Equipo rayos x",
        "description": "Equipo rayos x",
        "value": "RX",
        "parentId": 159364
    },
    {
        "id": 159376,
        "name": "Radar",
        "description": "Radar",
        "value": "RAD",
        "parentId": 159364
    },
    {
        "id": 159377,
        "name": "Kit de brecheo",
        "description": "Kit de brecheo",
        "value": "KITBRE",
        "parentId": 159365
    },
    {
        "id": 159378,
        "name": "Linternas",
        "description": "Linternas",
        "value": "LINT",
        "parentId": 159365
    },
    {
        "id": 159379,
        "name": "Sala de interceptación",
        "description": "Sala de interceptación",
        "value": "SALINTE",
        "parentId": 159366
    },
    {
        "id": 159380,
        "name": "Gi2",
        "description": "Gi2",
        "value": "Gi2",
        "parentId": 159366
    },
    {
        "id": 159386,
        "name": "Folletos",
        "description": "Folletos",
        "value": "FOLL",
        "parentId": 159382
    },
    {
        "id": 159387,
        "name": "Cuadernos argollados pasta dura",
        "description": "Cuadernos argollados pasta dura",
        "value": "CUADE",
        "parentId": 159382
    },
    {
        "id": 159389,
        "name": "Botilito metálico",
        "description": "Botilito metálico",
        "value": "BOT",
        "parentId": 159382
    },
    {
        "id": 159390,
        "name": "Mugs personalizados",
        "description": "Mugs personalizados",
        "value": "MUGS",
        "parentId": 159382
    },
    {
        "id": 159391,
        "name": "Bolígrafo publicitario",
        "description": "Bolígrafo publicitario",
        "value": "BOL",
        "parentId": 159382
    },
    {
        "id": 159392,
        "name": "Cuaderno Fiscalía",
        "description": "Cuaderno Fiscalía",
        "value": "CUADERFIS",
        "parentId": 159383
    },
    {
        "id": 159393,
        "name": "Escarapela",
        "description": "Escarapela",
        "value": "ESCA",
        "parentId": 159383
    },
    {
        "id": 159413,
        "name": "Distanciómetros",
        "description": "Distanciómetros",
        "value": "distan",
        "parentId": 159268
    },
    {
        "id": 159186,
        "name": "Monitor 60 pul",
        "description": "Monitor 60 pul",
        "value": "MO60",
        "parentId": 159175
    },
    {
        "id": 159179,
        "name": "Audífonos",
        "description": "Audífonos",
        "value": "AUD",
        "parentId": 159152
    },
    {
        "id": 159180,
        "name": "Cámaras web",
        "description": "Cámaras web",
        "value": "CAM",
        "parentId": 159172
    },
    {
        "id": 159181,
        "name": "Diademas",
        "description": "Diademas",
        "value": "DIA",
        "parentId": 159172
    },
    {
        "id": 159187,
        "name": "Solución de videoconferencia",
        "description": "Solución de videoconferencia",
        "value": "SOL",
        "parentId": 159176
    },
    {
        "id": 159188,
        "name": "Cámaras domo",
        "description": "Cámaras domo",
        "value": "CAMDOM",
        "parentId": 159177
    },
    {
        "id": 159191,
        "name": "DVR-NVR",
        "description": "DVR-NVR",
        "value": "DVR",
        "parentId": 159177
    },
    {
        "id": 159192,
        "name": "Sensores",
        "description": "Sensores",
        "value": "SEN",
        "parentId": 159177
    },
    {
        "id": 159193,
        "name": "Videoproyectores",
        "description": "Videoproyectores",
        "value": "VIDE",
        "parentId": 159178
    },
    {
        "id": 159208,
        "name": "Construcción de inmuebles",
        "description": "Construcción de inmuebles",
        "value": "CONS",
        "parentId": 159196
    },
    {
        "id": 159209,
        "name": "Adecuaciones locativas",
        "description": "Adecuaciones locativas",
        "value": "ADE",
        "parentId": 159197
    },
    {
        "id": 159210,
        "name": "Mantenimiento general de sedes",
        "description": "Mantenimiento general de sedes",
        "value": "MANSEDE",
        "parentId": 159198
    },
    {
        "id": 159214,
        "name": "Puesto tipo fiscal",
        "description": "Puesto tipo fiscal",
        "value": "PUESFIS",
        "parentId": 159199
    },
    {
        "id": 159219,
        "name": "Poltrona",
        "description": "Poltrona",
        "value": "POL",
        "parentId": 159199
    },
    {
        "id": 159232,
        "name": "Suministro e instalación ascensores",
        "description": "Suministro e instalación ascensores",
        "value": "SUMASC",
        "parentId": 159202
    },
    {
        "id": 159239,
        "name": "Señalización interna",
        "description": "Señalización interna",
        "value": "SEÑAINTE",
        "parentId": 159204
    }
]

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

export const UNID_MEASUREMENT = [
    { INDEX: 1, id: 1, name: "Porcentaje", description: "Porcentaje" },
    { INDEX: 2, id: 2, name: "Capacidad", descripcion: "Capacidad" },
    { INDEX: 3, id: 3, name: "Frecuencia", descripcion: "Frecuencia" },
    { INDEX: 4, id: 4, name: "Longitud", descripcion: "Longitud" },
    { INDEX: 5, id: 5, name: "Masa y peso", descripcion: "Masa y peso" },
];

export const SUB_UNID_MEASUREMENT = [
    // Porcentaje
    { INDEX: 1, id: 1, parentId: 1, name: "Porcentaje", simbolo: "%", description: "Porcentaje" },

    // Unidades de Capacidad
    { INDEX: 2, id: 2, parentId: 2, name: "Litro", simbolo: "L", description: "Litro" },
    { INDEX: 3, id: 3, parentId: 2, name: "Mililitro", simbolo: "mL", description: "Mililitro" },
    { INDEX: 4, id: 4, parentId: 2, name: "Metro Cúbico", simbolo: "m³", description: "Metro Cúbico" },
    { INDEX: 5, id: 5, parentId: 2, name: "Galon", simbolo: "gal", description: "Galon" },

    // Unidad de Frecuencia
    { INDEX: 6, id: 6, parentId: 3, name: "Hertz", simbolo: "Hz", description: "Hertz" },
    { INDEX: 7, id: 7, parentId: 3, name: "Kilohertz", simbolo: "kHz", description: "Kilohertz" },
    { INDEX: 8, id: 8, parentId: 3, name: "Megahertz", simbolo: "MHz", description: "Megahertz" },

    // Longitud
    { INDEX: 9, id: 9, parentId: 4, name: "Metro", simbolo: "m", description: "Metro" },
    { INDEX: 10, id: 10, parentId: 4, name: "Kilómetro", simbolo: "km", description: "Kilómetro" },
    { INDEX: 11, id: 11, parentId: 4, name: "Centímetro", simbolo: "cm", description: "Centímetro" },
    { INDEX: 12, id: 12, parentId: 4, name: "Pulgada", simbolo: "in", description: "Pulgada" },

    // Masa y Peso
    { INDEX: 13, id: 13, parentId: 5, name: "Gramo", simbolo: "g", description: "Gramo" },
    { INDEX: 14, id: 14, parentId: 5, name: "Kilogramo", simbolo: "kg", description: "Kilogramo" },
    { INDEX: 15, id: 15, parentId: 5, name: "Tonelada", simbolo: "t", description: "Tonelada" },
    { INDEX: 16, id: 16, parentId: 5, name: "Libra", simbolo: "lb", description: "Libra" },
];

export const TIPE_PRESENTATION = [
    { id: 1, name: "caja", description: "caja" },
    { id: 2, name: "Carpeta", description: "Carpeta" },
    { id: 3, name: "Folder", description: "Folder" },
    { id: 4, name: "Resma", description: "Resma" },
    { id: 3, name: "Galon", description: "Galon" },
    { id: 4, name: "Garrafa", description: "Garrafa" },
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






















