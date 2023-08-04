import React from "react";
import "./index.scss";

// --- Components libraries ---
import { Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import OriginProject from "../../molecules/originProject";
import FormDataGeneral from "../../molecules/fonset/dataGeneral/FormDataGeneral";
import FormDescription from "../../molecules/fonset/description/FormDescription";
import FormGoods from "../../molecules/fonset/goods/FormGoods";

export default function FormFonset() {
	return (
		<div className="content container-fluid">
			<div className="content-header">
				<h4 className="text">Formulario fonset</h4>
			</div>
			<div className="content container-fluid">
				{/* Información de fonset */}
				<Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
					<Tab eventKey="home" title="INFORMACION DE PROYECTO">
						<OriginProject />
					</Tab>

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
			</div>
		</div>
	);
}
