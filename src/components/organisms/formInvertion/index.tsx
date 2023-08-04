import React from "react";
import "./index.scss";

// --- Components libraries ---
import { Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import OriginProject from "../../molecules/originProject/index";
import InfoBasic from "../../molecules/Invertion/infoBasic";
import InfoProyect from "../../molecules/Invertion/infoProject/index";


export default function FormInvertion() {
	return (
		<div className="content container-fluid">
			<Tabs
				defaultActiveKey="home"
				transition={false}
				id="noanim-tab-example"
				className="mb-3"
			>
				<Tab eventKey="home" title="PROCEDENCIA DEL PROYECTO">
					<OriginProject />
				</Tab>
				<Tab eventKey="general" title="INFORMACIÓN BÁSICA">
					<InfoBasic />
				</Tab>

				<Tab eventKey="description" title="INFORMACIÓN DEL PROYECTO">
					<InfoProyect />
				</Tab>

				<Tab eventKey="goods" title="OBJETIVO GENERAL">
				</Tab>
			</Tabs>

			<InfoProyect />
		</div>
	);
}
