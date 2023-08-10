import React from 'react';
import Header from './header/index';
import Footer from './footer/index'
import Sidebar from './sidebar/index';


interface LayoutInterface {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />
			<Sidebar />
			<div className="content-wrapper">
				<div className="content container-fluid">
					{children}
				</div>
			</div>
			<Footer />
			<div id="sidebar-overlay"></div>
		</div>
	);
};

export default Layout;
