import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import img from '../assets/img/pag.png';
import bgPAG from '../assets/img/bg-pag.jpg';
import './users.css';
import pagimg from '../assets/img/pagimage.png';
import axios from 'axios';
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
	CardImg,
} from 'reactstrap';

function Users() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	console.log(username, password);

	const tryLogin = async e => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:4000/users/login', {
				username,
				password,
			});

			// console.log('response ', response.data.accesstoken);
			localStorage.setItem('user', JSON.stringify(response.data.user));
			localStorage.setItem('token', response.data.accesstoken);

			window.location.href = '/form';
		} catch (err) {
			console.log('console', err);
			alert(err.message);
		}
	};
	return (
		<div className='Apps mt-5'>
			<Row className='layout'>
				<Col md='6' lg='6' className='background-user layout-img'>
					<img alt='' src={bgPAG} width='100%' height='100%' />
				</Col>
				<Col md='6' className=''>
					<div className='d-flex justify-content-center'>
						<img alt='' src={pagimg} className='d-flex justify-content-center' />
					</div>
					<div>
						<Card body color='light' outline className='card-users border-0 '>
							<CardHeader className='bg-transparent '>
								<CardTitle tag='h5' className='text-center'>
									LOGIN
								</CardTitle>
							</CardHeader>
							<CardBody>
								<Form>
									<Row>
										<Col className='pr-1' md='12'>
											<FormGroup>
												<label>Username</label>
												<Input
													placeholder='Username'
													type='text'
													name='username'
													value={username}
													onChange={e => setUsername(e.target.value)}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md='12'>
											<FormGroup>
												<label>Passowrd</label>
												<Input
													placeholder='Passowrd'
													type='text'
													name='passowrd'
													value={password}
													onChange={e => setPassword(e.target.value)}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col md='12'>
											<div className='update ml-auto mr-auto d-flex justify-content-center'>
												<Button
													className='btn-round'
													color='danger'
													type='submit'
													onClick={tryLogin}>
													LOGIN
												</Button>
											</div>
										</Col>
									</Row>
								</Form>
							</CardBody>
						</Card>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default Users;
