import React, { useEffect } from "react";
import "./index.scss";

// --- Components libraries ---
import { Tab, Tabs, Card, Col, Row } from "react-bootstrap";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

// --- Components project ---
import OriginProject from "../../molecules/originProject";
import InputSelected from "../../atoms/selected/InputSelected";
import InputFloating from "../../atoms/input/Input";
import Buttons from "../../atoms/button/Buttons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/states/generals/loading.slice";
import InfoBasic from "../../molecules/general/infoBasic";
import { GeneralSelector, consecutiveApi, saveFormCooperativeApi, setDataGeneral, setDataTypeForm, setTypeFormToSave, showAlertForInputs } from "../../../redux/states/generals/general.slice";
import { CountrySelector, fetchApiCountry } from "../../../redux/states/generals/country.slice";
import { RequestDto } from "../../../models/general/RequestDto";
import alertService from "../../../services/generals/alert.service";
import DocumentUpload from "../../molecules/upload/DocumentUpload";
import { GeneralObjective } from "../../molecules/general/objective/generalObjective/GeneralObjective";
import { GeneralSpecific } from "../../molecules/general/objective/generalSpecific/GeneralSpecific";


export default function FormCooperative() {

	const { data, errorInputs, typeBtnToSave, error, response } = useAppSelector(GeneralSelector);

	const { countries } = useAppSelector(CountrySelector);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(consecutiveApi("CTI"));
		dispatch(setLoading(false));
		dispatch(fetchApiCountry());
	}, []);

	const saveForm = async () => {

		await dispatch(setDataTypeForm("cooperacion_temp"));

		await dispatch(setTypeFormToSave("TEMPCTI"));

		await dispatch(setLoading(true));

		if (data.PROY_CODIGO != "") {
			alertService.showAlert("Error", "Codigo temporal es requerido", "error", "OK", false);
		}

		await dispatch(saveFormCooperativeApi(data));

		if (response.status == 200) {
			alertService.showAlert("Correcto", "¡Proyecto guardado correctamente!", "success", "OK", false);
		} else {
			alertService.showAlert("Error", response.message || error.message, "error", "OK", false);
		}

		await dispatch(setLoading(false));
	}

	const finishForm = async () => {

		await dispatch(setDataTypeForm("cooperacion"));

		await dispatch(setTypeFormToSave("CTI"));

		await dispatch(setLoading(true));

		// if (validationsInputsToFinish() > 0) {
		// 	showAlertsForInputsRequired();
		// 	alertService.showAlert("Error", "Es necesario diligenciar los campos marcados como requeridos antes de finalizar la formulación del proyecto", "error", "OK", false);
		// 	dispatch(setLoading(false))
		// 	return;
		// }

		await dispatch(saveFormCooperativeApi(data));

		if (response.status == 200) {
			alertService.showAlert("Correcto", "¡Proyecto guardado correctamente!", "success", "OK", false);
		} else {
			alertService.showAlert("Error", response.message || error.message, "error", "OK", false);
		}

		await dispatch(setLoading(false))
	}

	const showAlertsForInputsRequired = () => {
		dispatch(showAlertForInputs(true));
	}

	const showConfirmationAlert = () => {
		if (data != null) {
			Swal.fire({
				title: 'Una pregunta',
				text: '¿Seguro que no desea continuar?',
				icon: 'question',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Si, seguro',
				cancelButtonText: 'Cerrar',
				allowOutsideClick: false
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/cooperation");
				}
			});
		}
	};

	const setValueByIndex = (index: any, value: any) => {
		let updatedRequest: RequestDto = {};

		updatedRequest = {
			...data,
			[index]: value
		}

		dispatch(setDataGeneral(updatedRequest));
	}

	const validationsInputsToFinish = () => {
		let errorsCount = 0;

		//TAB INFORMACIÓN BASICA

		if (data.PROY_CODIGO == "") {
			errorsCount++;
		}

		if (data.PROY_NOMBRE == "") {
			errorsCount++;
		}

		if (data.PROY_FECHA == "") {
			errorsCount++;
		}

		if (data.PROY_TIPO?.length == 0) {
			errorsCount++;
		}

		if (data.PROY_DEPENDENCIA_FUNCIONAL_RESPONSABLE == "") {
			errorsCount++;
		}

		if (data.PROY_COBERTURA?.TIPO == "focalizada" && data.PROY_COBERTURA.COBERTURA?.length == 0) {
			errorsCount++;
		}

		if (data.PROY_ENTIDAD_NACIONAL_INVOLUCRADA?.length == 0) {
			errorsCount++;
		}

		if (data.PROY_DEPENDENCIAS_INVOLUCRADAS?.length == 0) {
			errorsCount++;
		}

		if (data.PROY_PAIS_COOPERANTE == "") {
			errorsCount++;
		}

		if (data.PROY_IMPLEMENTADOR == "") {
			errorsCount++;
		}


		// TAB OBJETIVO GENERAL

		if (data.PROY_JUSTIFICACION_ANTECEDENTES == "") {
			errorsCount++;
		}

		if (data.PROY_FECHA_ESPERADA_INICIO == "") {
			errorsCount++;
		}

		if (data.PROY_FECHA_ESPERADA_TERMINADA == "") {
			errorsCount++;
		}

		if (data.PROY_DURACION_ESTIMADA_MESES == 0) {
			errorsCount++;
		}

		if (data.PROY_OBJETIVO_GENERAL == "") {
			errorsCount++;
		}

		// Objetivos especificos

		if (data.PROY_OBJETIVOS_ESPECIFICOS?.length == 0) {
			errorsCount++;
		}

		// Documentos
		if (data.PROY_DOCUMENTOS_ANEXOS?.length == 0) {
			errorsCount++;
		}

		return errorsCount;
	}

	return (
		<>
			<div className="content container-fluid">
				<Card>
					<Card.Header>
						<Card.Title as={"h4"}>
							REGISTRO DE COOPERACION INTERNACIONAL
						</Card.Title>
					</Card.Header>
					<Card.Body className="pt-3">
						<OriginProject />
						<Tabs
							defaultActiveKey="general"
							transition={false}
							id="info-project"
							className="mt-4 mb-3"
						>
							<Tab eventKey="general" title="DATOS GENERALES">
								<InfoBasic type="cooperative" />
								<Row>
									<Col lg={6}>
										<InputSelected label="Pais coperante que podria financiar el proyecto" className="inputFloating" options={countries ? countries : []} onChange={(value: any) => setValueByIndex("PROY_PAIS_COOPERANTE", value)} value={data.PROY_PAIS_COOPERANTE} isInvalid={!data.PROY_PAIS_COOPERANTE && errorInputs} />
									</Col>
									<Col lg={6}>
										<InputFloating label="Implementador (es)" className="inputFloating" type="text" placeholder="Indique el operador que podria ejecutar el proyecto." setValueChange={(value: string) => setValueByIndex("PROY_IMPLEMENTADOR", value)} value={data.PROY_IMPLEMENTADOR} isInvalid={!data.PROY_IMPLEMENTADOR && errorInputs} />
									</Col>
								</Row>
							</Tab>

							<Tab eventKey="obj_general" title="OBJ. GENERAL">
								<GeneralObjective type={"cooperative"} />
							</Tab>

							<Tab eventKey="obj_especifico" title="OBJ. ESPECIFICO">
								<GeneralSpecific type={"cooperative"} />
							</Tab>

							<Tab eventKey="documents" title="DOCUMENTOS ANEXOS">
								<DocumentUpload />
							</Tab>
						</Tabs>

						<hr className="" />
						<Row sm={12}>
							<div className="col-lg-6">
								<Buttons variant="light" label="Cancelar" onClick={() => showConfirmationAlert()} />
							</div>
							<Col sm={6} className="text-right">
								{typeBtnToSave == "temp"
									? (<Buttons variant="primary" label="Guardar" classStyle="mr-3" icon="clock-history" onClick={() => saveForm()} />)
									: (<Buttons variant="outline-success" label="Finalizar" icon="save-fill" onClick={() => finishForm()} />)
								}
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</div >
		</>
	);
}