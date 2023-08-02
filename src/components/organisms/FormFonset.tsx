import React from "react";
import FormInfoFonset from "../molecules/infoProject/FormInfoFonset";

/* import "./FormInfoBasic.scss"; */


export default function FormFonset() {
	return (
		<>
			<div className="container">
				<div className="title-view">
					<h4 className="text">Formulario fonset</h4>
				</div>
				{/* Información de fonset */}
				<FormInfoFonset />
			</div>
		</>
	);
}
