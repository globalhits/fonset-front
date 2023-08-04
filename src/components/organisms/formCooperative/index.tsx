import React from "react";
import "./index.scss";

// --- Components project ---
import OriginProject from "../../molecules/originProject/index";
import InfoProyect from "./../../molecules/infoProject/index";
import InputFloating from "../../atoms/input/Input";
import FormInfoCooperation from "../../molecules/infoProject/FormInfoCooperation";


export default function FormCooperative() {
	return (
		<>
			<div className="content">
				{/* <OriginProject /> */}
				<FormInfoCooperation />
			</div>
		</>
	);
}
