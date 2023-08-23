import React, { useEffect } from "react";
import "./index.scss";

// --- Components libraries ---
import { Tab, Tabs, Card, Container, Button, Col, Row } from "react-bootstrap";
import Swal from 'sweetalert2';

// --- Components project ---
import OriginProject from "../../molecules/originProject";
import InputSelected from "../../atoms/selected/InputSelected";
import InputFloating from "../../atoms/input/Input";
import Buttons from "../../atoms/button/Buttons";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setLoading } from "../../../redux/states/generals/loading.slice";
import InfoBasic from "../../molecules/general/infoBasic";
import { GeneralSelector, saveFormCooperativeApi, setDataGeneral, setDataTypeForm, showAlertForInputs } from "../../../redux/states/generals/general.slice";
import { GeneralSpecific } from "../../molecules/Invertion/infoProject/generalSpecific/GeneralSpecific";
import { GeneralObjective } from "../../molecules/Invertion/infoProject/generalObjective/GeneralObjective";
import { CountrySelector, fetchApiCountry } from "../../../redux/states/generals/country.slice";
import { RequestDto } from "../../../models/general/RequestDto";


export default function FormCooperative() {

	const { data, errorInputs } = useAppSelector(GeneralSelector);

	const { countries } = useAppSelector(CountrySelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setLoading(false));
		dispatch(fetchApiCountry());
	}, []);

	const saveForm = () => {
		dispatch(setDataTypeForm("cooperacion_temp"))
		console.log("guardar form", data);
	}

	const finishForm = async () => {

		await dispatch(setDataTypeForm("inversion"))

		await dispatch(setLoading(true))

		await showAlertsForInputsRequired();

		if (data.PROY_CODIGO != "") {
			//ALERT ARROJAR ERROR
		}

		if (data.PROY_NOMBRE != "") {
			//ALERT ARROJAR ERROR
		}

		if (data.PROY_FECHA != "") {
			//ALERT ARROJAR ERROR
		}

		if (data.PROY_COBERTURA?.TIPO == "focalizada" && data.PROY_COBERTURA.COBERTURA?.length == 0) {
			//Arrojar error
			alert("error")
		}
		console.log("guardar form", data);

		await dispatch(saveFormCooperativeApi(data));

		await dispatch(setLoading(false))
	}

	const showAlertsForInputsRequired = () => {
		dispatch(showAlertForInputs(true));
	}

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

	const setValueByIndex = (index: any, value: any) => {
		let updatedRequest: RequestDto = {};

		updatedRequest = {
			...data,
			[index]: value
		}

		dispatch(setDataGeneral(updatedRequest));
	}

	return (
		<>
			<div className="content container-fluid">
				<Container>
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
									{/* <FormDataGeneralCoop formData={dataForm} setFormData={(data: RequestCooperativeDto) => setDataForm(data)}/> */}
									<InfoBasic type="cooperative" />
									<Row>
										<Col lg={6}>
											<InputSelected label="Pais coperante que podria financiar el proyecto" className="inputFloating" options={countries} onChange={(value: any) => setValueByIndex("PROY_PAIS_COOPERANTE", value)} value={data.PROY_PAIS_COOPERANTE} isInvalid={!data.PROY_PAIS_COOPERANTE && errorInputs} />
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
							</Tabs>

							<hr className="" />
							<Row sm={12}>
								<Col sm={6}>
									<Button variant="light" onClick={showConfirmationAlert}>Cancelar</Button>
								</Col>
								<Col sm={6} className="text-right">
									<Buttons variant="primary" label="Guardar" classStyle="mr-3" onClick={() => saveForm()} />
									<Buttons variant="outline-success" label="Finalizar" onClick={() => finishForm()} />
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Container>
			</div>
		</>
	);
}