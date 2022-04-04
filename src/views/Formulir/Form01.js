import React, { useState } from 'react';

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
import Swal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
// const MySwal = withReactContent(Swal);

const success = async () => {
	const MySwal = withReactContent(Swal);

	await MySwal.fire({
		title: <strong>Success</strong>,
		html: <i>Data berhasil diinput</i>,
		icon: 'success',
	});
	window.location.href = '/form';
};

function Form01() {
	const [valueV, setValueV] = useState('');
	const [valueA, setValueA] = useState('');
	const [valueV_BT, setValueV_BT] = useState('');
	const [kodeJam, setKodeJam] = useState('');
	const [aktif, setAktif] = useState(false);

	const [user, setUser] = useState({
		valueV: '',
		valueA: '',
		valueV_BT: '',
		valueVolta1_2: '',
		valueVolta2_3: '',
		valueVolta3_1: '',
		value1Loadamp: '',
		value2Loadamp: '',
		value3Loadamp: '',
		valuePowerfactor: '',
		valueMeter_mvar: '',
		valueRecord_mvar: '',
		valueMeter_loadmw: '',
		valueRecord_loadmw: '',
	});

	function GetURLParameter(sParam) {
		let sPageURL = window.location.search.substring(1);
		let sURLVariables = sPageURL.split('&');
		for (let i = 0; i < sURLVariables.length; i++) {
			let sParameterName = sURLVariables[i].split('=');
			if (sParameterName[0] === sParam) {
				return sParameterName[1];
			}
		}
	}
	let clock = GetURLParameter('jam');

	const onChangeInput = e => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const tryPost = async e => {
		e.preventDefault();
		try {
			const input = await axios.post('http://localhost:4000/users/form1', {
				...user,
				kode_jam: clock,
			});

			setValueV(input.data.from.valueV);
			setValueA(input.data.from.valueA);

			console.log('Nilai V', valueV);
			console.log('Nilai A', valueA);
		} catch (error) {
			console.log('error => ' + error.message);
		}

		// let dataField = {
		// 	dataV: valueV,
		// 	dataA: valueA,
		// };
		// return dataField;
	};

	return (
		<div className=''>
			<Row>
				<Col md='12'>
					<Card className='card-user'>
						<CardHeader className='tengah mb-2'>
							<CardTitle tag='h1'>FORM 01</CardTitle>
						</CardHeader>
						<CardBody>
							<Form onSubmit={tryPost}>
								<Row>
									<Col className='pr-1' md='6'>
										<CardTitle tag='h5' className='tengah'>
											FIELD
										</CardTitle>
										<hr />
										<Row>
											<Col className='' md='6'>
												<Input
													placeholder='0'
													type='number'
													className='text-center mb-2'
													name='valueV'
													onChange={onChangeInput}
													value={user.valueV}
												/>
											</Col>
											<Col md='6'>
												<Input
													placeholder='0'
													type='number'
													className='text-center mb-2'
													name='valueA'
													onChange={onChangeInput}
													value={user.valueA}
												/>
											</Col>
										</Row>
									</Col>
									<Col className='pr-1' md='6'>
										<CardTitle tag='h5' className='tengah'>
											VOLTAGE BT
										</CardTitle>
										<hr />
										<Row>
											<Col className='px-1' md='12'>
												<Input
													className='text-center'
													placeholder='V'
													type='number'
													name='valueV_BT'
													onChange={onChangeInput}
													value={user.valueV_BT}
												/>
											</Col>
										</Row>
									</Col>
								</Row>
								<Row>
									<Col className='pr-1' md='6'>
										<CardTitle tag='h5' className='tengah'>
											VOLTAGE AT
										</CardTitle>
										<hr />
										<Row>
											<Col className='' md='4'>
												<Input
													className='text-center mb-2'
													placeholder='1-2'
													type='number'
													name='valueVolta1_2'
													onChange={onChangeInput}
													value={user.valueVolta1_2}
												/>
											</Col>
											<Col md='4'>
												<Input
													className='text-center mb-2'
													placeholder='2-3'
													type='number'
													name='valueVolta2_3'
													onChange={onChangeInput}
													value={user.valueVolta2_3}
												/>
											</Col>
											<Col md='4'>
												<Input
													className='text-center mb-2'
													placeholder='3-1'
													type='number'
													name='valueVolta3_1'
													onChange={onChangeInput}
													value={user.valueVolta3_1}
												/>
											</Col>
										</Row>
									</Col>
									<Col className='pr-1' md='6'>
										<CardTitle tag='h5' className='tengah'>
											LOAD AMP
										</CardTitle>
										<hr />
										<Row>
											<Col className='' md='4'>
												<Input
													className='text-center mb-2'
													placeholder='1'
													type='number'
													name='value1Loadamp'
													onChange={onChangeInput}
													value={user.value1Loadamp}
												/>
											</Col>
											<Col md='4'>
												<Input
													className='text-center mb-2'
													placeholder='2'
													type='number'
													name='value2Loadamp'
													onChange={onChangeInput}
													value={user.value2Loadamp}
												/>
											</Col>
											<Col md='4'>
												<Input
													className='text-center mb-2'
													placeholder='3'
													type='number'
													name='value3Loadamp'
													onChange={onChangeInput}
													value={user.value3Loadamp}
												/>
											</Col>
										</Row>
									</Col>
								</Row>
								<Row>
									<Col className='pr-1' md='6'>
										<CardTitle tag='h5' className='tengah'>
											LOAD MW
										</CardTitle>
										<hr />
										<Row>
											<Col className='input-center-row' md='6'>
												<div className='input-center-input mb-2'>
													<span className='mr-8 p-2'>METER</span>
													<Input
														className='text-center'
														placeholder='1-2'
														type='number'
														name='valueMeter_loadmw'
														onChange={onChangeInput}
														value={user.valueMeter_loadmw}
													/>
												</div>
											</Col>
											<Col className='input-center-row' md='6'>
												<div className='input-center-input  mb-2'>
													<span className='mr-8 p-2'>RECORD</span>
													<Input
														className='text-center'
														placeholder='1-2'
														type='number'
														name='valueRecord_loadmw'
														onChange={onChangeInput}
														value={user.valueRecord_loadmw}
													/>
												</div>
											</Col>
										</Row>
									</Col>
									<Col className='pr-1' md='6'>
										<CardTitle tag='h5' className='tengah'>
											M VAR
										</CardTitle>
										<hr />
										<Row>
											<Col className='input-center-row' md='6'>
												<div className='input-center-input  mb-2 '>
													<span className='mr-8 p-2'>Meter</span>
													<Input
														className='text-center'
														placeholder='1-2'
														type='number'
														name='valueMeter_mvar'
														onChange={onChangeInput}
														value={user.valueMeter_mvar}
													/>
												</div>
											</Col>
											<Col className='input-center-row' md='6'>
												<div className='input-center-input'>
													<span className='mr-8 p-2'>Meter</span>
													<Input
														className='text-center'
														placeholder='1-2'
														type='number'
														name='valueRecord_mvar'
														onChange={onChangeInput}
														value={user.valueRecord_mvar}
													/>
												</div>
											</Col>
										</Row>
									</Col>
								</Row>
								<Row>
									<Col className='pr-1' md='6'>
										<CardTitle tag='h5' className='tengah'>
											POWER FACTOR
										</CardTitle>
										<hr />
										<Row>
											<Col className='input-center-row' md='12'>
												<div className='input-center-input mb-2'>
													<span className='mr-8 p-2'>METER</span>
													<Input
														className='text-center'
														placeholder=''
														type='number'
														name='valuePowerfactor'
														onChange={onChangeInput}
														value={user.valuePowerfactor}
													/>
												</div>
											</Col>
										</Row>
									</Col>
								</Row>

								<Row>
									<div className='update ml-auto mr-auto text-center   '>
										<Button
											className='btn-roundr'
											color='danger'
											type='submit'
											onClick={success}>
											Upload
										</Button>
									</div>
								</Row>
							</Form>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default Form01;
