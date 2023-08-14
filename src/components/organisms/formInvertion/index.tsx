import React, { useState } from "react";
import "./index.scss";

// --- Components libraries ---
import { Card, Container, Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import OriginProject from "../../molecules/originProject/index";
import InfoBasic from "../../molecules/Invertion/infoBasic";
import InfoBasicProject from "./../../molecules/Invertion/infoProject/infoBasicProject/InfoBasicProject";
import Buttons from "../../atoms/button/Buttons";
import Objectives from "./../../molecules/Invertion/infoProject/objectives/Objectives";
import { RequestInvertionDto } from "../../../models/invertion/RequestInvertionDto";

import Loader from "../../atoms/loader";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { InvertionSelector, initialState, initialStateFormInvertion } from "../../../redux/states/invertion/invertion.slice";
import { loadingSelector } from "../../../redux/states/generals/loading.slice";


export default function FormInvertion() {

	const { isLoading } = useAppSelector(loadingSelector);

	const { data } = useAppSelector(InvertionSelector);

	const [dataFormInvertion, setDataFormInvertion] = useState<RequestInvertionDto>(initialStateFormInvertion);

	const dispatch = useAppDispatch();

	if (isLoading) return <Loader />;

	const saveForm = () => {

		console.log("guardar form", data);
	}

	const updateDate = (data: RequestInvertionDto) => {

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

							<Tab eventKey="objetiveGeneral" title="OBJETIVOS">
								<Objectives />
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
								<Buttons variant="outline-success" label="Finalizar" onClick={() => saveForm()} />
							</div>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
