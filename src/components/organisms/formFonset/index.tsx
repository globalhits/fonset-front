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
import Loader from "../../atoms/loader";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { RequestFonsetDto } from "../../../models/fonset/RequestFonsetDto";
import { loadingSelector } from "../../../redux/states/generals/loading.slice";
import { initialStateFormFonset } from "../../../redux/states/fonset/fonset.slice";

export default function FormFonset() {

	const { isLoading } = useAppSelector(loadingSelector);

	const [dataForm, setDataForm] = useState<RequestFonsetDto>(initialStateFormFonset);

	const dispatch = useAppDispatch();

	if (isLoading) return <Loader />;

	const saveForm = () => {
		console.log("guardar form", dataForm);
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
						<OriginProject formData={dataForm} setFormData={setDataForm} />
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
								<FormDescription formData={dataForm} setFormData={(data: RequestFonsetDto) => setDataForm(data)}/>
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
