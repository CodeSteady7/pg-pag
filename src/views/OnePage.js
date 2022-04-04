import React, { useState, useContext } from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	Row,
	Col,
	Input,
	Button,
} from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import { GlobalState } from 'GlobalState.js';
function OnePage() {
	const navigate = useNavigate();

	const state = useContext(GlobalState);
	const [tblJam] = state.formApi.tbl_Jam;
	const [tblField] = state.formApi.tbl_Field;
	// const [aktif] = state.formApi.aktif;
	const [aktif, setAktif] = useState('');
	let nm = [];
	let no = 0;
	let temp_no = no++;

	let today = new Date();
	let date =
		today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

	const onForm = () => {
		// navigate('/scan');
		// window.location.href = '/form';
		// console.log(tblJam);
		return tblJam;
	};

	for (let i = 0; i < tblJam.length; i++) {
		let data = tblJam[i].nilai_jam;
		// console.log('1', data);
	}

	let nm1 = tblJam.map((prop, key) => {
		return prop.nilai_jam;
		// console.log('1', prop.nilai_jam);
	});

	let nm2 = tblField.map((prop, key) => {
		return prop.nilai_jam;
		// console.log('2', prop.nilai_jam);
	});
	// let get = nampung;

	// const check = aktif.every(item => {
	// 	return it
	// })

	return (
		<div>
			<>
				{/* {console.log('nilai = ', nm2, nm1)} */}
				{/* {console.log('data jam = ', tblJam)} */}
				{/* {console.log('data  = ', get)} */}
				<div className='content'>
					{/* {console.log('data table jam =>', tblJam[0].nilai_jam)} */}
					{/* {tblJam.map((prop, key) => {
						return console.log(prop.nilai_jam);
					})} */}
					<Row>
						{tblJam.map((prop, key) => {
							return (
								<Col lg='3' md='6' sm='6' key={key}>
									<Card className='card-stats pb-5'>
										<CardBody onClick={onForm}>
											<a href={`/scan?jam=${prop.nilai_jam}&tgl=${date}`}>
												<Row>
													<Col md='4' xs='5'>
														<div className='icon-big text-center icon-warning'>
															{nm2 < nm1 ? (
																<i className='nc-icon nc-time-alarm text-danger' />
															) : (
																<i className='nc-icon nc-time-alarm text-warning' />
															)}
														</div>
													</Col>
													<Col md='8' xs='7'>
														<div className='numbers'>
															<p className='card-category'>{date}</p>
															<CardTitle tag='p'>{prop.nilai_jam}</CardTitle>
															<p />
														</div>
													</Col>
												</Row>
											</a>
										</CardBody>
									</Card>
								</Col>
							);
						})}
					</Row>
					{/*
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats  pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>01.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>03.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>05.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>07.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>09.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>11.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>13.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>15.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>17.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>19.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>21.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col lg='3' md='6' sm='6'>
							<Card className='card-stats pb-5'>
								<CardBody onClick={onForm}>
									<Row>
										<Col md='4' xs='5'>
											<div className='icon-big text-center icon-warning'>
												<i className='nc-icon nc-time-alarm text-warning' />
											</div>
										</Col>
										<Col md='8' xs='7'>
											<div className='numbers'>
												<p className='card-category'>{date}</p>
												<CardTitle tag='p'>23.00</CardTitle>
												<p />
											</div>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>

 */}
				</div>
			</>
		</div>
	);
}

export default OnePage;
