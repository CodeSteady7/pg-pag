import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Modal, Container, Row, Table, Col } from 'react-bootstrap';

const GenTrafo = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const ModalLine = () => {
		return (
			<Line
				data={{
					labels: ['01.00', '05.00', '09.00', '13.00', '17.00', '21.00'],
					datasets: [
						{
							label: '1 - 2',
							data: [19.4, 3.5, 11, 4, 5.1, 8, 13],
							fill: false,
							// backgroundColor: 'white',
							borderColor: 'rgba(255, 99, 132, 0.8)',
							// borderWidth: 1,
						},
						{
							label: '2 - 3',
							data: [47, 52, 52, 67, 58, 9],
							fill: false,
							// backgroundColor: 'white',
							borderColor: 'rgba(54, 162, 235, 0.8)',
						},
						{
							label: '3 - 1',
							data: [42, 12, 77, 10, 20, 40],
							fill: false,
							// backgroundColor: 'white',
							borderColor: 'rgba(255, 206, 86, 0.8)',
						},
					],
				}}
				height={400}
				width={600}
				options={{
					onClick: e => {
						handleShow();
					},
					maintainAspectRatio: true,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
					title: {
						display: true,
						text: 'Gen Trafo',
						fontSize: 25,
					},
					legend: {
						display: 'true',
						labels: {
							fontSize: 10,
						},
					},
				}}
			/>
		);
	};

	const TableForm = () => {
		return (
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Hours</th>
						<th>V</th>
						<th>A</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>01.00</td>
						<td>190</td>
						<td>188</td>
					</tr>
					<tr>
						<td>03.00</td>
						<td>130</td>
						<td>144</td>
					</tr>
					<tr>
						<td>06.00</td>
						<td>123</td>
						<td>53</td>
					</tr>
				</tbody>
			</Table>
		);
	};

	return (
		<>
			<div className='style'>
				<ModalLine />
			</div>
			<Modal
				show={show}
				// fullscreen={'xxl-down'}
				onHide={handleClose}
				keyboard={false}
				size='lg'
				className=''>
				{/* <Modal.Header closeButton className=''>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header> */}
				<Modal.Body className=''>
					<Container>
						<Row>
							<Col xs={12} md={12}>
								<ModalLine field className='graphic' />
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={12}>
								<TableForm />
							</Col>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default GenTrafo;
