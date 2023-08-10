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
<<<<<<< HEAD
                    <InputFloating label="Digite el objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Digite el objetivo" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
<<<<<<< HEAD
                    <InputFloating label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value=""/>
                </div>
                <div className="col-lg-6">
                    <InputFloating label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Descripción" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-6">
                    <InputFloating label="Indicador" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
<<<<<<< HEAD
                    <InputFloating label="Linea base" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value=""/>
                </div>
                <div className="col-lg-3">
                    <InputFloating label="Meta" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value=""/>
                </div>
                <div className="col-lg-6">
                    <InputFloating label="Entregable" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Linea base" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-3">
                    <InputFloating label="Meta" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
                </div>
                <div className="col-lg-6">
                    <InputFloating label="Entregable" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">

<<<<<<< HEAD
                    <InputFloating label="Mes Inicio" className="inputFloating" type="date" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Mes Inicio" className="inputFloating" type="date" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c

                </div>
                <div className="col-lg-3">

<<<<<<< HEAD
                    <InputFloating label="Mes Final" className="inputFloating" type="date" setValueChange={(value: string) => { }} value=""/>
=======
                    <InputFloating label="Mes Final" className="inputFloating" type="date" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c

                </div>
                <div className="col-lg-6">
                    <TextArea label="Descripción del entregable" />
                </div>
            </div>
            {
                type === "specific" ? (
                    <div className="row mt-5">
                        <div className="col-lg-12">
<<<<<<< HEAD
                            <InputFloating label="Archivo" className="mb-3 inputFloating" type="file" setValueChange={(value: string) => { }} value=""/>
=======
                            <InputFloating label="Archivo" className="mb-3 inputFloating" type="file" setValueChange={(value: string) => { }} value="" />
>>>>>>> d29b9b85102dd4c96d36fef38dc60a5bcf1ca16c
                        </div>
                    </div>
                ) :
                    <></>
            }
        </>
    )
}