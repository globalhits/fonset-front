import React, { useEffect } from "react";
import "./index.scss";

// --- Components libraries ---
import { Card, Container, Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import OriginProject from "../../molecules/originProject";
import FormDataGeneral from "../../molecules/fonset/dataGeneral/FormDataGeneral";
import FormDescription from "../../molecules/fonset/description/FormDescription";
import FormGoods from "../../molecules/fonset/goods/FormGoods";
import Buttons from "../../atoms/button/Buttons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/states/generals/loading.slice";
import { GeneralSelector, consecutiveApi, saveFormFonsetApi, setDataTypeForm, setTypeFormToSave, showAlertForInputs } from "../../../redux/states/generals/general.slice";
import DocumentUpload from "../../molecules/upload/DocumentUpload";
import alertService from "../../../services/generals/alert.service";
import Swal from "sweetalert2";


export default function FormFonset() {

	const { data, error, status, typeBtnToSave, response } = useAppSelector(GeneralSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(consecutiveApi("FONSET"));
		dispatch(setLoading(false))
	}, [])

	const showConfirmationAlert = () => {
		Swal.fire({
			title: 'Una pregunta',
			text: '¿Seguro que no desea continuar?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Cerrar',
			cancelButtonText: 'Si, seguro',
		}).then((result) => {
			if (result.isConfirmed) {
				// Aquí puedes agregar el código para cerrar la ventana o realizar alguna acción adicional
				console.log('La ventana se cerrará');
			}
		});
	};

	const saveForm = async () => {
		await dispatch(setDataTypeForm("fonset_temp"));

		await dispatch(setTypeFormToSave("TEMPFONSET"))

		await dispatch(setLoading(true));

		if (data.PROY_CODIGO != "") {
			alertService.showAlert("Error", "Codigo temporal es requerido", "error", "OK", false);
		}

		await dispatch(saveFormFonsetApi(data));

		if (status == "succeeded") {
			alertService.showAlert("Correcto", "¡Proyecto guardado correctamente!", "success", "OK", false);
		} else if (status == "failed") {
			alertService.showAlert("Error", error, "error", "OK", false);
		}

		await dispatch(setLoading(false));
		console.log("guardar form", data);
	}

	const finishForm = async () => {

		await dispatch(setDataTypeForm("fonset"));

		await dispatch(setTypeFormToSave("FONSET"))

		await dispatch(setLoading(true));

		if (validationsInputsToFinish() > 0) {
			showAlertsForInputsRequired();
			alertService.showAlert("Error", "Verificar los campos requeridos", "error", "OK", false);
			dispatch(setLoading(false))
			return;
		}

		await dispatch(saveFormFonsetApi(data));

		if (response !== undefined) {
			alertService.showAlert("Correcto", "¡Proyecto guardado correctamente!", "success", "OK", false);
		} else if (status == "failed") {
			alertService.showAlert("Error", error, "error", "OK", false);
		}

		await dispatch(setLoading(false))

		console.log("guardar form", data);

		console.log("res", response);

		console.log("error", error);

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

		// TAB DATOS GENERALES

		if (data.PROY_SUB_REGIONAL_APOYO == "") {
			errorsCount++;
		}

		if (data.PROY_DEPARTAMENTO == "") {
			errorsCount++;
		}

		if (data.PROY_MUNICIPIO_ORIGEN == "") {
			errorsCount++;
		}

		if (data.PROY_SECCIONAL == "") {
			errorsCount++;
		}

		if (data.PROY_ENTIDAD_DEPENDENCIA_RESPONSABLE == "") {
			errorsCount++;
		}

		if (data.PROY_DISTRITO_JUDICIAL == "") {
			errorsCount++;
		}

		//TAB DESCRIPCION

		if (data.PROY_OBJETIVO_GENERAL == "") {
			errorsCount++;
		}

		if (data.PROY_OBJETIVO_ESPECIFICO == "") {
			errorsCount++;
		}

		if (data.PROY_POBLACION_OBJETIVO == "") {
			errorsCount++;
		}

		if (data.PROY_DESCRIPCION_BIENES_SERVICIOS == "") {
			errorsCount++;
		}

		if (data.PROY_JUSTIFICACION == "") {
			errorsCount++;
		}

		if (data.PROY_DESCRIPCION_PROBLEMA == "") {
			errorsCount++;
		}

		// TAB BIENES Y SERVICIOS

		if (data.PROY_BIENES_SERVICIOS?.length == 0) {
			errorsCount++;
		}

		// 'DOCUMENTOS

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
						FORMULARIO FONSET
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
							<FormDataGeneral />
						</Tab>

						<Tab eventKey="description" title="DESCRIPCION">
							<FormDescription />
						</Tab>

						<Tab eventKey="goods" title="BIENES Y/O SERVICIOS">
							<FormGoods />
						</Tab>

						<Tab eventKey="documents" title="DOCUMENTOS ANEXOS">
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
		</div >
	);
}
