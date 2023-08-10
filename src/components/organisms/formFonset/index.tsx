import React from "react";
import "./index.scss";

// --- Components libraries ---
import { Card, Container, Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import OriginProject from "../../molecules/originProject";
import FormDataGeneral from "../../molecules/fonset/dataGeneral/FormDataGeneral";
import FormDescription from "../../molecules/fonset/description/FormDescription";
import FormGoods from "../../molecules/fonset/goods/FormGoods";

export default function FormFonset() {
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
							defaultActiveKey="infoBasic"
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

							<Tab eventKey="goods" title="BIENES">
								<FormGoods />
							</Tab>

						</Tabs>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}
