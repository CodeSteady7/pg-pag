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

function Form03() {
	return (
		<div>
			<div className=''>
				<Row>
					<Col md='12'>
						<Card className='card-user'>
							<CardHeader className='tengah mb-2'>
								<CardTitle tag='h1'>FORM 03</CardTitle>
							</CardHeader>
							<CardBody>
								<Form>
									<Row>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												TURBIN SPEED
											</CardTitle>
											<hr />
											<Row>
												<Col md='12'>
													<div className='input-center-input'>
														{/* <span>LIQUID LEVEL</span> */}
														<Input
															placeholder='RPM'
															type='text'
															className='text-center mb-2'
														/>
													</div>
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												VCE
											</CardTitle>
											<hr />
											<Row>
												<Col className='px-1' md='12'>
													<Input className='text-center' placeholder='VCE' type='text' />
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												LOAD
											</CardTitle>
											<hr />
											<Row>
												<Col className='px-1' md='12'>
													<Input className='text-center' placeholder='MW' type='text' />
												</Col>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												DSP
											</CardTitle>
											<hr />
											<Row>
												<Col className='' md='12'>
													<Input className='text-center mb-2' placeholder='V' type='text' />
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												GASFLOW
											</CardTitle>
											<hr />
											<Row>
												<Col md='12'>
													<Input
														className='text-center mb-2'
														placeholder='M3/HR'
														type='text'
													/>
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												FIRED TIME
											</CardTitle>
											<hr />
											<Row>
												<Col md='12'>
													<Input
														className='text-center mb-2'
														placeholder='FIRED TIME'
														type='text'
													/>
												</Col>
											</Row>
										</Col>
									</Row>
									<Row className='mb-2'>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												PEAK FIRED TIME
											</CardTitle>
											<hr />
											<Row>
												<Col className='' md='12'>
													<Input
														className='text-center mb-2'
														placeholder='PEAK FIRED TIME'
														type='text'
													/>
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												FIRED STARTS
											</CardTitle>
											<hr />
											<Row>
												<Col md='12'>
													<Input
														className='text-center mb-2'
														placeholder='FIRED STARTS'
														type='text'
													/>
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='4'>
											<CardTitle tag='h5' className='tengah'>
												MANUAL INITIATED START
											</CardTitle>
											<hr />
											<Row>
												<Col md='12'>
													<Input className='text-center mb-2' placeholder='' type='text' />
												</Col>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col className='pr-1' md='12'>
											<CardTitle tag='h5' className='tengah'>
												LUBE OIL TEMPERATUR ('C)
											</CardTitle>
											<hr />
											<Row>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='OIL COOLER INLET'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='OIL COOLER OUTLET'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='JOURNAL AND THRUST DRAIN'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='BEEARING DRAIN NO.2'
														type='text'
													/>
												</Col>
											</Row>
											<Row>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='GEAR PINION NO.1'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='GEAR WHEEL NO.2'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='GEAR WHEEL NO.3'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='GEAR WHEEL NO.4'
														type='text'
													/>
												</Col>
											</Row>
											<Row>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='GEAR PINION NO.5'
														type='text'
													/>
												</Col>
												<Col className='' md='3'>
													<Input
														className='text-center mb-2'
														placeholder='GENERATOR DRAIN'
														type='text'
													/>
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

export default Form03;
