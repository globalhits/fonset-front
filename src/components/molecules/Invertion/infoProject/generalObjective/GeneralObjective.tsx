import TextArea from "../../../../atoms/area/TextArea"
import InputFloating from "../../../../atoms/input/Input"

interface GeneralObjectiveInterface {
    type?: string;
}

export const GeneralObjective = ({ type }: GeneralObjectiveInterface) => {
    return (
        <>
            <div className="row mt-4">
                <div className="col-lg-12">
                    <InputFloating label="Digite el objetivo" className="mb-3 inputFloating" type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <InputFloating label="Descripción" className="mb-3 inputFloating" type="text" />
                </div>
                <div className="col-lg-6">
                    <InputFloating label="Indicador" className="mb-3 inputFloating" type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <InputFloating label="Linea base" className="mb-3 inputFloating" type="text" />
                </div>
                <div className="col-lg-3">
                    <InputFloating label="Meta" className="mb-3 inputFloating" type="text" />
                </div>
                <div className="col-lg-6">
                    <InputFloating label="Entregable" className="mb-3 inputFloating" type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">

                    <InputFloating label="Mes Inicio" className="inputFloating" type="date" />

                </div>
                <div className="col-lg-3">

                    <InputFloating label="Mes Final" className="inputFloating" type="date" />

                </div>
                <div className="col-lg-6">
                    <TextArea label="Descripción del entregable" />
                </div>
            </div>
            {
                type === "specific" ? (
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <InputFloating label="Archivo" className="mb-3 inputFloating" type="file" />
                        </div>
                    </div>
                ) :
                    <></>
            }
        </>
    )
}