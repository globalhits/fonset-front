import React from "react";
import "./index.scss";

// --- Components project ---
import FormInfoFonset from "../../molecules/infoProject/FormInfoFonset";

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
