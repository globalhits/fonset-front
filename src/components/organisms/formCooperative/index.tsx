import React, { useState } from "react";
import "./index.scss";

// --- Components libraries ---
import { Tab, Tabs, Card, Container, Button } from "react-bootstrap";
import Swal from 'sweetalert2';

// --- Components project ---
import OriginProject from "../../molecules/originProject";
import InputFloating from "../../atoms/input/Input";
import Buttons from "../../atoms/button/Buttons";
import FormDataGeneralCoop from "../../molecules/cooperation/dataGeneralCoop/FormDataGeneralCoop";
import Entities from "../../molecules/Invertion/infoEntities";
import InputSelected from "../../atoms/selected/InputSelected";
import FormObjGeneralCoop from "../../molecules/cooperation/objGeneralCoop/ObjGeneralCoop";
import FormObjEspecificoCoop from "../../molecules/cooperation/objEspecificoCoop/ObjEspecificoCoop";
import { useAppSelector } from "../../../redux/hooks";
import { GeneralSelector } from "../../../redux/states/generals/general.slice";


export default function FormCooperative() {

	const { data } = useAppSelector(GeneralSelector);

	const showConfirmationAlert = () => {
		Swal.fire({
			title: 'Una pregunta',
			text: '¿Seguro que no desea continuar?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Cerrar',
			cancelButtonText: 'Si, seguro',
		}).then((result) => {
			if (result.isConfirmed) {
				// Aquí puedes agregar el código para cerrar la ventana o realizar alguna acción adicional
				console.log('La ventana se cerrará');
			}
		});
	};
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
								defaultActiveKey="general"
								transition={false}
								id="info-project"
								className="mt-4 mb-3"
							>
								<Tab eventKey="general" title="DATOS GENERALES">
									<FormDataGeneralCoop />
									<Entities />
									<div className="row">
										<div className="col-lg-6">
											<InputSelected label="Pais coperante que podria financiar el proyecto" className="mb-3 inputFloating" options={[]} onChange={(value: any) => { }} value="" />
										</div>
										<div className="col-lg-6">
											<InputFloating label="Implementador (es)" className="mb-3 inputFloating" type="text" placeholder="Indique el operador que podria ejecutar el proyecto." setValueChange={(value: string) => { }} value="" />
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

							<hr className="" />
							<div className="row">
								<div className="col-lg-6">
									<Button variant="light" onClick={showConfirmationAlert}>Cancelar</Button>
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
		</>
	);
}