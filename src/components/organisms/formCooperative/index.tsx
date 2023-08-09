import React from "react";
import "./index.scss";

// --- Components libraries ---
import { Tab, Tabs, Card, Container } from "react-bootstrap";

// --- Components project ---
import OriginProject from "../../molecules/originProject";
import InputFloating from "../../atoms/input/Input";
import FormDataGeneralCoop from "../../molecules/cooperation/dataGeneralCoop/FormDataGeneraCoop";
import Entities from "../../molecules/Invertion/infoEntities";
import InputSelected from "../../atoms/selected/InputSelected";
import FormObjGeneralCoop from "../../molecules/cooperation/objGeneralCoop/ObjGeneralCoop";
import FormObjEspecificoCoop from "../../molecules/cooperation/objEspecificoCoop/ObjEspecificoCoop";
import Buttons from "../../atoms/button/Buttons";


export default function FormCooperative() {
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
								defaultActiveKey="infoBasic"
								transition={false}
								id="info-project"
								className="mt-4 mb-3"
							>

								<Tab eventKey="general" title="DATOS GENERALES">
									<FormDataGeneralCoop />
								
										<Entities />

										<div className="row">
											<div className="col-lg-6">
												<InputSelected label="Pais coperante que podria financiar el proyecto" className="mb-3 inputFloating" />
											</div>
											<div className="col-lg-6">
												<InputFloating label="Implementador (es)" className="mb-3 inputFloating" type="text" placeholder="Indique el operador que podria ejecutar el proyecto." />
											</div>
										</div>

									
								</Tab>



								<Tab eventKey="obj_general" title="OBJ. GENERAL">
									<FormObjGeneralCoop />
								</Tab>

								<Tab eventKey="obj_especifico" title="OBJ. ESPECIFICO">
									<FormObjEspecificoCoop />
								</Tab>
							</Tabs>
							
						</Card.Body>
					</Card>
				</Container>
			</div>
		</>
	);
}
