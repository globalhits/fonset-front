import React from "react";
import "./index.scss";

// --- Components project ---
import OriginProject from "../../molecules/originProject/index";
import InfoProyect from "./../../molecules/infoProject/index";


export default function FormInvertion() {
	return (
		<>
			<div className="container">
				<OriginProject />
				<InfoProyect />
			</div>
		</>
	);
}
