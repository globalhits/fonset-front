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
import { loadingSelector, setLoading } from "../../../redux/states/generals/loading.slice";
import { GeneralSelector, saveFormInvertionApi, setDataGeneral, setDataTypeForm, showAlertForInputs } from "../../../redux/states/generals/general.slice";
import { GeneralObjective } from "../../molecules/Invertion/infoProject/generalObjective/GeneralObjective";
import { GeneralSpecific } from "../../molecules/Invertion/infoProject/generalSpecific/GeneralSpecific";


export default function FormInvertion() {

	const { data, error, errorInputs, response } = useAppSelector(GeneralSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setLoading(false))
	}, [])

	const saveForm = () => {
		dispatch(setDataTypeForm("inversion_temp"))
		console.log("guardar form", data);
	}

	const finishForm = () => {

		dispatch(setDataTypeForm("inversion"))

		dispatch(setLoading(true))

		showAlertsForInputsRequired();

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

		dispatch(saveFormInvertionApi(data));

		dispatch(setLoading(false))
	}

	const showAlertsForInputsRequired = () => {
		dispatch(showAlertForInputs(true));
	}

	return (
		<div className="content container-fluid">
			<Container>
				<Card>
					<Card.Header>
						<Card.Title as={"h4"}>
							PROYECTO DE INVERSIÓN
						</Card.Title>
					</Card.Header>
					<Card.Body className="pt-3">
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
								<GeneralSpecific type={"invertion"} />
							</Tab>

							{/* <Tab eventKey="documents" title="DOCUMENTOS">
							</Tab> */}
						</Tabs>
						<hr />
						<div className="row">
							<div className="col-lg-6">
								<Buttons variant="light" label="Cancelar" onClick={() => { }} />
							</div>
							<div className="col-lg-6 text-right">
								<Buttons variant="primary" label="Guardar" classStyle="mr-3" onClick={() => saveForm()} />
								<Buttons variant="outline-success" label="Finalizar" onClick={() => finishForm()} />
							</div>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
