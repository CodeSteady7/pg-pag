import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	FormGroup,
	Form,
	Input,
	Row,
	Col,
} from 'reactstrap';

import Sidebar from 'components/Sidebar/Sidebar.js';
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import Index from 'views/Formulir/index';

import routes from 'routes.js';

function Formulir(props) {
	return (
		<>
			<div className='wrapper App '>
				<DemoNavbar />
				<Index />
			</div>
		</>
	);
}

export default Formulir;
