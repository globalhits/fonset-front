import React from "react";
import './header.scss'
import Buttons from "../../../atoms/button/Buttons";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { GeneralSelector, showTypeBtnToSave } from "../../../../redux/states/generals/general.slice";



export default function Header() {

	const { typeBtnToSave } = useAppSelector(GeneralSelector);

	const dispatch = useAppDispatch();

	const setTypeSaveForm = (type: string) => {
		dispatch(showTypeBtnToSave(type));
	}

	return (
		<nav className="main-header navbar navbar-expand navbar-white navbar-light header-position">
			{/* Left navbar links */}
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="nav-link" data-widget="pushmenu" href="#" role="button">
						<i className="fas fa-bars " />
					</a>
				</li>
				<li className="nav-item menu d-flex d-sm-inline-block" style={{ background: typeBtnToSave === "temp" ? "#e9ecef" : "white", borderRadius: "10px" }}>
					<Buttons label="Guardado temporal" classStyle="nav-link" variant="" icon="clock-history" onClick={() => setTypeSaveForm("temp")} />
				</li>
				<li className="nav-item menu d-flex d-sm-inline-block" style={{ background: typeBtnToSave === "direct" ? "#e9ecef" : "white", borderRadius: "10px" }}>
					<Buttons label="Guardado directo" classStyle="nav-link" variant="" icon="save-fill" onClick={() => setTypeSaveForm("direct")} />
				</li>
			</ul>
			{/* Right navbar links */}
			<ul className="navbar-nav ml-auto">
				{/* Notifications Dropdown Menu */}
				<li className="nav-item dropdown">
					<a className="nav-link" data-toggle="dropdown" href="#" style={{ width: "50px !important" }}>
						<i className="bi bi-bell-fill"></i>
						<span className="badge badge-warning navbar-badge">15</span>
					</a>
					<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
						<span className="dropdown-item dropdown-header">
							15 Notifications
						</span>
						<div className="dropdown-divider" />
						<a href="#" className="dropdown-item">
							<i className="fas fa-envelope mr-2" /> 4 new messages
							<span className="float-right text-muted text-sm">3 mins</span>
						</a>
						<div className="dropdown-divider" />
						<a href="#" className="dropdown-item">
							<i className="fas fa-users mr-2" /> 8 friend requests
							<span className="float-right text-muted text-sm">12 hours</span>
						</a>
						<div className="dropdown-divider" />
						<a href="#" className="dropdown-item">
							<i className="fas fa-file mr-2" /> 3 new reports
							<span className="float-right text-muted text-sm">2 days</span>
						</a>
						<div className="dropdown-divider" />
						<a href="#" className="dropdown-item dropdown-footer">
							See All Notifications
						</a>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link" data-toggle="dropdown" href="#">
						<img
							src="/images/user-avatar.png"
							alt="User Avatar"
							className=" mr-3 img-circle"
							height={"35px"}
							width={"38px"}
						/>
					</a>
					<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right mt-2">
						{/* <div className="dropdown-divider" /> */}
						<a href="#" className="dropdown-item">
							<i className="bi bi-person-fill-gear mr-2"></i>
							Perfil
						</a>
						<div className="dropdown-divider" />
						<a href="#" className="dropdown-item">
							<i className="bi bi-box-arrow-in-left mr-2"></i>
							Cerrar sesión
						</a>
					</div>
				</li>
			</ul>
		</nav>
	);
}
