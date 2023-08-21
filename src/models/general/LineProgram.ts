export interface Program {
    INDEX?: number,
    ID?: number,
    NOMBRE?: string,
    DESCRIPCION?: string
    LINES_PROGRAMAS?: LineProgramDto[]
}

export interface LineProgramDto {
    INDEX?: number,
    ID?: number,
    DESCRIPCION?: string
}