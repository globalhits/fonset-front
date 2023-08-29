import React, { useState } from "react";
import './sidebar.scss'
import { Nav, NavLink } from "react-bootstrap";

const Sidebar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>("invertion");

  const handleNavItemSelect = (navItem: string) => {
    setSelectedNavItem(navItem);
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <NavLink as={"a"} href="/invertion" className="brand-link text-center p-3">
        GESTOR DE PROYECTOS
      </NavLink>
      <div className="sidebar">
	  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
					<div className="image">
						<img src="/images/logo-vertical.png" alt="Logo de la fiscalia" className="brand-image elevation-3" style={{ opacity: ".8", width: "120px", height: "150px", marginLeft: "50px" }} />
					</div>
				</div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <Nav.Item as="li" className="nav-item">
              <Nav.Link
                href="/invertion"
                className={`nav-link ${selectedNavItem === "invertion" ? "active" : ""}`}
                onClick={() => handleNavItemSelect("invertion")}
              >
                <i className="far fa-circle nav-icon" />
                <p>Formulario Inversión</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-item">
              <Nav.Link
                href="/fonset"
                className={`nav-link ${selectedNavItem === "fonset" ? "active" : ""}`}
                onClick={() => handleNavItemSelect("fonset")}
              >
                <i className="far fa-circle nav-icon" />
                <p>Formulario Fonset</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="nav-item">
              <Nav.Link
                href="/cooperation"
                className={`nav-link ${selectedNavItem === "cooperation" ? "active" : ""}`}
                onClick={() => handleNavItemSelect("cooperation")}
              >
                <i className="far fa-circle nav-icon" />
                <p>Formulario Cooperación</p>
              </Nav.Link>
            </Nav.Item>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
};

export default Sidebar;
