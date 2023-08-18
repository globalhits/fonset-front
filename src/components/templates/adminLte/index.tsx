import React from 'react';
import Header from './header/index';
import Footer from './footer/index'
import Sidebar from './sidebar/index';
import Loader from '../../atoms/loader';
import { useAppSelector } from '../../../redux/hooks';
import { loadingSelector } from '../../../redux/states/generals/loading.slice';

interface LayoutInterface {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {

	const { isLoading } = useAppSelector(loadingSelector);

	return (
		<div className='wrapper'>
			{isLoading ? <Loader /> : null}
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
