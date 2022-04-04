import React from 'react';
import Field from '../components/Charts/Field';
import LoadAmp from '../components/Charts/LoadAmp';
import LoadMW from '../components/Charts/LoadMW';
import Mvar from '../components/Charts/Mvar';
import PowerFactor from '../components/Charts/PowerFactor';
import VoltAfterTrafo from '../components/Charts/VoltAfterTrafo';
import VoltBeforeTrafo from '../components/Charts/VoltBeforeTrafo';
import DemoNavbar from 'components/Navbars/DemoNavbar.js';

import { Card, CardBody, CardFooter, Row, Col } from 'reactstrap';

let today = new Date();
let date = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
function Grafik(props) {
	return (
		<div>
			<div className='wrapper  App'>
				<DemoNavbar logic={true} />
				<Row>
					<Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>Field</p>
											<Field />

											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>VoltBeforeTrafo</p>
											<VoltBeforeTrafo />
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>VoltAfterTrafo</p>
											<VoltAfterTrafo />
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>LoadAmp</p>
											<LoadAmp />

											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>PowerFactor</p>
											<PowerFactor />
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>LoadMW</p>
											<LoadMW />
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>Mvar</p>
											<Mvar />
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col>
					{/* <Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>GenTrafo</p>
											<GenTrafo />
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col>
					<Col lg='4' md='6' sm='6'>
						<Card className='card-stats'>
							<CardBody>
								<Row>
									<Col md='12'>
										<div className='numbers'>
											<p className='card-category text-center mb-3'>ReactTrafoTemp</p>
											<ReactTrafoTemp />
											<p />
										</div>
									</Col>
								</Row>
							</CardBody>
							<CardFooter>
								<hr />
								<div className='stats'>
									<i className='fas fa-sync-alt' /> {date}
								</div>
							</CardFooter>
						</Card>
					</Col> */}
				</Row>

				{/* <div className='center' style={{ justifyContent: 'center' }}> */}
				{/* <div className='tengah'> */}
				{/* <h1>POWER GENERATION SYSTEM UNIT - 9001 </h1> */}
				<div>{/* <Input /> */}</div>
				{/* </div> */}
				{/* </div> */}
				{/* <div className=''></div> */}
				{/* <div className='' style={{}}> */}
				{/* <Field /> */}
				{/* <VoltBeforeTrafo /> */}
				{/* <VoltAfterTrafo /> */}
				{/* <LoadAmp /> */}
				{/* </div> */}
				{/* <div className='onepage'>
				<PowerFactor />
				<LoadMW />
				<Mvar />
				<GenTrafo />
			</div>
			<div className='onepage'>
				<ReactTrafoTemp />
			</div> */}
			</div>
		</div>
	);
}

export default Grafik;
// https://web.dev/add-manifest/
