import React, { useEffect } from "react";
import "./index.scss";

// --- Components libraries ---
import { Card, Container, Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import OriginProject from "../../molecules/originProject/index";
import InfoBasic from "../../molecules/general/infoBasic";
import InfoBasicProject from "./../../molecules/Invertion/infoProject/infoBasicProject/InfoBasicProject";
import Buttons from "../../atoms/button/Buttons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/states/generals/loading.slice";
import { GeneralSelector, consecutiveApi, saveFormInvertionApi, setDataGeneral, setDataTypeForm, setTypeFormToSave, showAlertForInputs } from "../../../redux/states/generals/general.slice";
import { GeneralObjective } from "../../molecules/general/objective/generalObjective/GeneralObjective";
import DocumentUpload from "../../molecules/upload/DocumentUpload";
import alertService from "../../../services/generals/alert.service";
import Swal from "sweetalert2";
import { GeneralSpecific } from "../../molecules/general/objective/generalSpecific/GeneralSpecific";
import { useNavigate } from "react-router-dom";

export default function FormInvertion() {

	const { data, error, status, typeBtnToSave } = useAppSelector(GeneralSelector);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(consecutiveApi("PGN"));
		dispatch(setLoading(false));
	}, [])

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
					navigate("/fonset");
				}
			});
		}
	};

	const saveForm = async () => {

		await dispatch(setDataTypeForm("inversion_temp"));

		await dispatch(setTypeFormToSave("TEMPPGN"))

		await dispatch(setLoading(true));

		if (data.PROY_CODIGO != "") {
			alertService.showAlert("Error", "Codigo temporal es requerido", "error", "OK", false);
		}

		await dispatch(saveFormInvertionApi(data));

		if (status == "succeeded") {
			alertService.showAlert("Correcto", "¡Proyecto guardado correctamente!", "success", "OK", false);
		} else if (status == "failed") {
			alertService.showAlert("Error", error, "error", "OK", false);
		}

		await dispatch(setLoading(false));
		console.log("guardar form", data);

	}

	const finishForm = async () => {

		await dispatch(setDataTypeForm("inversion"))

		await dispatch(setTypeFormToSave("PGN"))

		await dispatch(setLoading(true))

		if (validationsInputsToFinish() > 0) {
			showAlertsForInputsRequired();
			alertService.showAlert("Error", "Verificar los campos requeridos", "error", "OK", false);
			dispatch(setLoading(false))
			return;
		}

		await dispatch(saveFormInvertionApi(data));

		if (status == "succeeded") {
			alertService.showAlert("Correcto", "¡Proyecto guardado correctamente!", "success", "OK", false);
		} else if (status == "failed") {
			alertService.showAlert("Error", error, "error", "OK", false);
		}

		await dispatch(setLoading(false))
	}

	const showAlertsForInputsRequired = () => {
		dispatch(showAlertForInputs(true));
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

		if (data.PROY_DEPENDENCIA_RESPONSABLE == "") {
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

		//TAB INFORMACIÓN GENERAL

		if (data.PROY_JUSTIFICACION_ANTECEDENTES == "") {
			errorsCount++;
		}

		if (data.PROY_POBLACION_AFECTADA == "") {
			errorsCount++;
		}

		if (data.PROY_POBLACION_OBJETO == "") {
			errorsCount++;
		}

		if (data.PROY_CARACTERISTICAS_DEMOGRAFICAS == "") {
			errorsCount++;
		}

		if (data.PROY_ANALISIS_PARTICIPANTES?.length == 0) {
			errorsCount++;
		}

		// TAB OBJETIVO GENERAL

		if (data.PROY_OBJETIVO_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_DESCRIPCION_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_INDICADOR_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_LINEA_BASE_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_META_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_ENTREGABLE_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_MES_INICIO_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_MES_FINAL_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_DESCRIPCION_ENTREGABLE_GENERAL == "") {
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
		<div className="content container-fluid">
			<Card>
				<Card.Header>
					<Card.Title as={"h4"}>
						PROYECTO DE INVERSIÓN
					</Card.Title>
				</Card.Header>
				<Card.Body className="pt-3" >
					<OriginProject />
					<Tabs
						defaultActiveKey="infoBasic"
						transition={false}
						id="info-project"
						className="mt-4 mb-3"
					>
						<Tab eventKey="infoBasic" title="INFORMACIÓN BÁSICA">
							<InfoBasic />
						</Tab>

						<Tab eventKey="infoGeneral" title="INFORMACIÓN GENERAL">
							<InfoBasicProject />
						</Tab>

						<Tab eventKey="objGeneral" title="OBJ. GENERAL">
							<GeneralObjective type={"invertion"} />
						</Tab>

						<Tab eventKey="obj_especifico" title="OBJ. ESPECIFICO">
							<GeneralSpecific type={"invertion"} viewDetail={false} />
						</Tab>

						<Tab eventKey="documents" title="DOCUMENTOS">
							<DocumentUpload />
						</Tab>
					</Tabs>
					<hr />
					<div className="row">
						<div className="col-lg-6">
							<Buttons variant="light" label="Cancelar" onClick={() => showConfirmationAlert()} />
						</div>
						<div className="col-lg-6 text-right">
							{typeBtnToSave == "temp"
								? (<Buttons variant="primary" label="Guardar" classStyle="mr-3" icon="clock-history" onClick={() => saveForm()} />)
								: (<Buttons variant="outline-success" label="Finalizar" icon="save-fill" onClick={() => finishForm()} />)
							}
						</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
