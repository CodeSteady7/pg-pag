import Sidebar from 'components/Sidebar/Sidebar.js';
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import OnePage from 'views/OnePage';
import ScanPage from 'views/ScanPage';
import routes from 'routes.js';

function Scan(props) {
	return (
		<>
			<div className='wrapper App'>
				{/* <Sidebar {...props} routes={routes} /> */}
				{/* <div className='main-panel'> */}
				<DemoNavbar />
				<ScanPage />
				{/* </div> */}
			</div>
		</>
	);
}

export default Scan;
