import React from "react";
import "./index.scss";

// --- Components libraries ---
import { Tab, Tabs } from "react-bootstrap";

// --- Components project ---
import InputFloating from "../../atoms/input/Input";
import FormDataGeneralCoop from "../../molecules/cooperation/dataGeneralCoop/FormDataGeneraCoop";
import Entities from "../../molecules/Invertion/infoEntities";
import InputSelected from "../../atoms/selected/InputSelected";
import FormObjGeneralCoop from "../../molecules/cooperation/objGeneralCoop/ObjGeneralCoop";
import FormObjEspecificoCoop from "../../molecules/cooperation/objEspecificoCoop/ObjEspecificoCoop";

export default function FormCooperative() {
	return (
		<>
			<div className="content">
				{/* <OriginProject /> */}
				<Tabs
					defaultActiveKey="home"
					transition={false}
					id="noanim-tab-example"
					className="mb-3"
				>
					<Tab eventKey="home" title="PROCEDENCIA DEL PROYECTO">
						<div className="row mt-3">
							<div className="col-lg-4">
								<InputFloating label="Cod. proyecto*" className="mb-3 inputFloating" type="number" placeholder="1234" setValueChange={(value: string) => { }} value="" />
							</div>
							<div className="col-lg-4">
								<InputFloating label="Fecha*" className="mb-3 inputFloating" type="date" placeholder="Fecha" setValueChange={(value: string) => { }} value="" />
							</div>
							<div className="col-lg-4">
								<InputFloating label="Nombre del proyecto*" className="mb-3 inputFloating" type="text" placeholder="Nombre del proyecto" setValueChange={(value: string) => { }} value="" />
							</div>
						</div>
					</Tab>

					<Tab eventKey="general" title="DATOS GENERALES">
						<FormDataGeneralCoop />
					</Tab>

					<Tab eventKey="entidades" title="ENTIDADES">
						<Entities />

						<div className="row">
							<div className="col-lg-6">
								<InputSelected label="Pais coperante que podria financiar el proyecto" className="mb-3 inputFloating" options={[]} value="" />
							</div>
							<div className="col-lg-6">
								<InputFloating label="Implementador (es)" className="mb-3 inputFloating" type="text" setValueChange={(value: string) => { }} value="" />
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
			</div>
		</>
	);
}