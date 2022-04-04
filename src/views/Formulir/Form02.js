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

function Form02() {
	return (
		<div>
			<div className=''>
				<Row>
					<Col md='12'>
						<Card className='card-user'>
							<CardHeader className='tengah mb-2'>
								<CardTitle tag='h1'>FORM 02</CardTitle>
							</CardHeader>
							<CardBody>
								<Form>
									<Row className='mb-3'>
										<Col className='pr-1' md='6'>
											<CardTitle tag='h5' className='tengah'>
												GEN TRAFO
											</CardTitle>
											<hr />
											<Row>
												<Col md='4'>
													<div className='input-center-input'>
														{/* <span>LIQUID LEVEL</span> */}
														<Input
															placeholder='LIQUID LEVEL'
															type='text'
															className='text-center mb-2'
														/>
													</div>
												</Col>
												<Col md='4'>
													<Input
														placeholder='LIQUID TEMP'
														type='text'
														className='text-center mb-2'
													/>
												</Col>
												<Col md='4'>
													<Input
														placeholder='WIND TEMP'
														type='text'
														className='text-center mb-2'
													/>
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='6'>
											<CardTitle tag='h5' className='tengah'>
												RECT TRAFO LIQUID TEMP
											</CardTitle>
											<hr />
											<Row>
												<Col className='px-1' md='12'>
													<Input
														className='text-center'
														placeholder='RECT TRAFO LIQUID TEMP'
														type='text'
													/>
												</Col>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col className='pr-1' md='6'>
											<CardTitle tag='h5' className='tengah'>
												KW HOURS
											</CardTitle>
											<hr />
											<Row>
												<Col className='' md='12'>
													<Input
														className='text-center mb-2'
														placeholder='KW HOURS'
														type='text'
													/>
												</Col>
											</Row>
										</Col>
										<Col className='pr-1' md='6'>
											<CardTitle tag='h5' className='tengah'>
												VISUAL CHECK
											</CardTitle>
											<hr />
											<Row>
												<Col className='' md='4'>
													<Input
														className='text-center mb-2'
														placeholder='L/O'
														type='text'
													/>
												</Col>
												<Col md='4'>
													<Input
														className='text-center mb-2'
														placeholder='TEMP'
														type='text'
													/>
												</Col>
												<Col md='4'>
													<Input
														className='text-center mb-2'
														placeholder='SOUND'
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

export default Form02;
