import React from "react";
import "./index.scss";

// --- Components project ---
import FormInfoFonset from "../../molecules/infoProject/FormInfoFonset";

export default function FormFonset() {
	return (
		<>
			<div className="content-header">
				<h4 className="text">Formulario fonset</h4>
			</div>
			<div className="content">
				{/* Información de fonset */}
				<FormInfoFonset />
			</div>
		</>
	);
}
