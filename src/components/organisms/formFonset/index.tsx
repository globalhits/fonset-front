import React, { useState } from "react";
import "./index.scss";

// --- Components libraries ---
import { Card, Container, Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import OriginProject from "../../molecules/originProject";
import FormDataGeneral from "../../molecules/fonset/dataGeneral/FormDataGeneral";
import FormDescription from "../../molecules/fonset/description/FormDescription";
import FormGoods from "../../molecules/fonset/goods/FormGoods";
import Buttons from "../../atoms/button/Buttons";
import { useAppSelector } from "../../../redux/hooks";
import { GeneralSelector } from "../../../redux/states/generals/general.slice";

export default function FormFonset() {

	const { data } = useAppSelector(GeneralSelector);

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
								<Buttons variant="primary" label="Guardar" classStyle="mr-3" onClick={() => { }} />
								<Buttons variant="outline-success" label="Finalizar" onClick={() => { }} />
							</div>
						</div>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
