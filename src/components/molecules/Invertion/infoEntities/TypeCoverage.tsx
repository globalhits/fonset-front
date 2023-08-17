import { useState, useEffect } from "react";
import { Table, Button, Form } from "react-bootstrap";
import InputSelected from "../../../atoms/selected/InputSelected";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { CoverageDto, TypeCoverageDto } from "../../../../models/general/TypeCoverageDto";
import { DepartamentSelector, fetchApiDepartament } from "../../../../redux/states/generals/departament.slice";
import { MunicipalitySelector, fetchApiMunicipality, findByDepartamentId } from "../../../../redux/states/generals/municipality.slice";
import Buttons from "../../../atoms/button/Buttons";
import { GeneralSelector, addTypeCoverages, setTypeCoverage } from "../../../../redux/states/generals/general.slice";

const TypeCoverage = () => {

    const dispatch = useAppDispatch();

    const [disabledMunicipalities, setDisabledMunicipalities] = useState<boolean>(true);

    const [disabledTable, setDisabledTable] = useState<boolean>(false);

    const [departamentSelected, setDepartamentSelected] = useState("");

    const [municipalitySelected, setMunicipalitySelected] = useState("");

    const [error, setError] = useState("");

    const { data } = useAppSelector(GeneralSelector);

    const { departaments } = useAppSelector(DepartamentSelector);

    const { filters } = useAppSelector(MunicipalitySelector);

    useEffect(() => {
        // Disparar la acción para obtener los datos
        dispatch(fetchApiDepartament());
        dispatch(fetchApiMunicipality());
    }, [dispatch]);

    const changeTypeCoverage = async (e: any) => {
        let value = e.target.value;

        if (value == "nacional") {
            setDisabledTable(true);
            setDepartamentSelected("");
            setMunicipalitySelected("");
            setDisabledMunicipalities(true)
        } else {
            setDisabledTable(false);
        }

        dispatch(setTypeCoverage(value))

    }

    const addItem = async () => {

        console.log("departamentSelected", departamentSelected);

        console.log("municipalitySelected", municipalitySelected);

        if (departamentSelected.toString().trim() === "") {
            setError('El departamento no ha sido seleccionado.');
            return;
        }

        if (municipalitySelected.toString().trim() === "") {
            setError('El municipio no ha sido seleccionado.');
            return;
        }

        let listCoverage: CoverageDto[] = data.PROY_COBERTURA?.COBERTURA ? data.PROY_COBERTURA.COBERTURA : [];

        const newItem = [...listCoverage, {
            departamento_id: departamentSelected,
            nombre_deparamento: departaments.find((item: any) => item.id == departamentSelected),
            municipio_id: municipalitySelected,
            nombre_municipio: filters.find((item: any) => item.id == municipalitySelected),
        }]

        dispatch(addTypeCoverages(newItem));

        setError("");
        setDepartamentSelected("");
        setMunicipalitySelected("");
        setDisabledMunicipalities(true);
    }

    const deleteItem = (item: any, index: number) => {

    }

    const changeDepartament = (departament: any) => {
        if (departament != null) {
            setDepartamentSelected(departament);

            dispatch(findByDepartamentId(departament));

            setDisabledMunicipalities(false);
        }
    }

    const viewRadio = () => {
        return (
            <Form>
                <div key={`type-coverage`} className="mb-3">

                    <div className="row">

                        <div className="col-lg-6">
                            <Form.Check
                                inline
                                label="Nacional"
                                name="group1"
                                type="radio"
                                id={`type-coverage-1`}
                                value="nacional"
                                onChange={(e: any) => changeTypeCoverage(e)}
                            />
                        </div>

                        <div className="col-lg-6">

                            <Form.Check
                                inline
                                label="Focalizada"
                                name="group1"
                                type="radio"
                                id={`type-coverage-2`}
                                value="focalizada"
                                onChange={(e: any) => changeTypeCoverage(e)}
                            />
                        </div>
                    </div>

                </div>
            </Form>
        )
    }


    return (
        <>
            <div className="row" key={"type-coverage"}>
                <div className="col-lg-12">
                    {viewRadio()}
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 mb-2">
                    <InputSelected label="Departamento*" className="mb-2 inputFloating" options={departaments} onChange={(value: any) => changeDepartament(value)} value={departamentSelected} disabled={disabledTable} />
                </div>
                <div className="col-lg-5 mb-2">
                    <InputSelected label="Departamento*" className="mb-3 inputFloating" options={filters} onChange={(value: any) => setMunicipalitySelected(value)} value={municipalitySelected} disabled={disabledMunicipalities} />
                </div>
                <div className="col-lg-2">
                    <Button disabled={(departamentSelected !== "" && municipalitySelected !== "") ? false : true} className="mt-4 mb-2" variant="warning" onClick={() => addItem()}>+</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-12">
                    <Table className="table table-bordered table-condensed table-stripe">
                        <thead>
                            <tr>
                                <th className="text-center">Departamentos</th>
                                <th className="text-center">Municipios</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.PROY_COBERTURA?.COBERTURA?.map((item: any, index: number) => (
                                    <tr key={index}>
                                        <td width={"40%"}>{item.nombre_deparamento}</td>
                                        <td width={"40%"}>{item.nombre_municipio}</td>
                                        <td width={"20%"} className="text-center">
                                            <Buttons size="xs" icon="trash3-fill" variant="danger" key={index} onClick={() => deleteItem(item, index)} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    );

}

export default TypeCoverage;