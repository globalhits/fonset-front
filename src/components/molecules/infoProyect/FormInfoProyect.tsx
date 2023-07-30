import React from "react";
import InputFloating from "../../atoms/input/Input";
import './FormInfoProyect.scss'

export default function FormInfoProyect() {

    return (
        <>
            <div className="containerInfo">
                <InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" placeholder="1234" />
                <InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" placeholder="Fecha" />
                <InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" />
            </div>
        </>
    )
}