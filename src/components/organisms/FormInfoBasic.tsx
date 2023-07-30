import React from "react";
import FormInfoProyect from "../molecules/infoProyect/FormInfoProyect";
import FormInfoBasic from "../molecules/infoBasic/FormInfoBasic";

import "./FormInfoBasic.scss";


export default function FormInvertion() {
	return (
		<>
			<div className="container">
				<div className="title-view">
					<h4 className="text">INFORMACION DE PROYECTO</h4>
				</div>
				<FormInfoProyect />
				<FormInfoBasic />
			</div>
		</>
	);
}
