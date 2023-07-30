import React from "react";
import './sidebar.scss'

const Sidebar = () => {

	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4 elementoSidebar">
			{/* Brand Logo */}
			<a href="#" className="brand-link text-center">

				<span className="brand-text font-weight-light">FISCALIA - GESTOR</span>
			</a>
			{/* Sidebar */}

			{/* Sidebar user panel (optional) */}
			<div className="user-panel mt-3 pb-3 mb-3 d-flex">
				<div className="image">
					<img src={"/images/logo.png"} className="brand-image elevation-3" style={{ opacity: ".8", width: "120px", height: "80px", marginLeft: "50px" }} />
				</div>
			</div>

			<div className="sidebar">
				{/* SidebarSearch Form */}
				{/* Sidebar Menu */}
				<nav className="mt-2">
					<ul
						className="nav nav-pills nav-sidebar flex-column"
						data-widget="treeview"
						role="menu"
						data-accordion="false"
					>
						{/* Add icons to the links using the .nav-icon class
         					with font-awesome or any other icon font library */}
						<li className="nav-item">
							<a href="./index.html" className="nav-link active">
								<i className="far fa-circle nav-icon" />
								<p>Formulario Inversión</p>
							</a>
						</li>
						<li className="nav-item">
							<a href="./index2.html" className="nav-link">
								<i className="far fa-circle nav-icon" />
								<p>Formulario Fonset</p>
							</a>
						</li>
						<li className="nav-item">
							<a href="./index3.html" className="nav-link">
								<i className="far fa-circle nav-icon" />
								<p>Cooperación</p>
							</a>
						</li>
					</ul>

				</nav>
				{/* /.sidebar-menu */}
			</div>
			{/* /.sidebar */}
		</aside>
	);
};

export default Sidebar;
