import React from 'react';
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

function Form04() {
	return (
		<div>
			<div className=''>
				<Row>
					<Col md='12'>
						<Card className='card-user'>
							<CardHeader className='tengah mb-2'>
								<CardTitle tag='h1'>FORM 04</CardTitle>
							</CardHeader>
							<CardBody>
								<Form>
									<Row className='mb-3'>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												LUBE OIL TANK TEMP
											</CardTitle>
											<hr />
											<Row>
												<Col md='12'>
													<div className='input-center-input'>
														{/* <span>LIQUID LEVEL</span> */}
														<Input placeholder='' type='text' className='text-center mb-2' />
													</div>
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												LUBE OIL BEARING TEMP
											</CardTitle>
											<hr />
											<Row>
												<Col className='px-1' md='12'>
													<Input className='text-center' placeholder='' type='text' />
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												COOLING WATER TEMP
											</CardTitle>
											<hr />
											<Row>
												<Col className='px-1' md='12'>
													<Input className='text-center' placeholder='' type='text' />
												</Col>
											</Row>
										</Col>
									</Row>
									<Row className='mb-3'>
										<Col className='pr-1' md='12'>
											<CardTitle tag='h5' className='tengah'>
												LUBE OIL PRESS
											</CardTitle>
											<hr />
											<Row>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='MAN OIL PUMP DISCH'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='AUX OIL PUMP DISCH'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='ENGINE OIL PUMP DISCH'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='FWD FILTER'
														type='text'
													/>
												</Col>
											</Row>
											<Row>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='TURBINE BEARING HEADER'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='GEN. BEARING HEADER'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='(FOR 63 HR)'
														type='text'
													/>
												</Col>
											</Row>
										</Col>
									</Row>
									<Row className='mb-3'>
										<Col className='pr-1' md='6'>
											<CardTitle tag='h5' className='tengah'>
												HYD. TRIP CURCUIT PRESS
											</CardTitle>
											<hr />
											<Row>
												<Col md='12'>
													<div className='input-center-input'>
														<Input placeholder='' type='text' className='text-center mb-2' />
													</div>
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='6'>
											<CardTitle tag='h5' className='tengah'>
												HYD. OIL PRESS (FOR 63HQ)
											</CardTitle>
											<hr />
											<Row>
												<Col className='px-1' md='12'>
													<Input className='text-center' placeholder='' type='text' />
												</Col>
											</Row>
										</Col>
									</Row>
									<Row>
										<div className='update ml-auto mr-auto text-center   '>
											<Button className='btn-roundr' color='danger' type='submit'>
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
		</div>
	);
}

export default Form04;
