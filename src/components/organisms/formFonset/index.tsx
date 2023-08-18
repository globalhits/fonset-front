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

import Loader from "../../atoms/loader";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { loadingSelector, setLoading } from "../../../redux/states/generals/loading.slice";
import { RequestDto } from "../../../models/general/RequestDto";
import { GeneralSelector, showAlertForInputs } from "../../../redux/states/generals/general.slice";


export default function FormFonset() {

	const { data, error, errorInputs, response } = useAppSelector(GeneralSelector); 

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setLoading(false))
	}, [])

	const saveForm = () => {
		console.log("guardar form", data);
	}

	const finishForm = () => {

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

		console.log("guardar form", data);
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

							<Tab eventKey="documents" title="DOCUMENTOS">
							</Tab>

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
