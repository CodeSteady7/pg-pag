import React, { useState } from 'react';
import { defaults, Bar } from 'react-chartjs-2';
// import './garis.css';

import {
	Modal,
	Button,
	Container,
	Row,
	ModalBody,
	ModalDialog,
	Table,
	Col,
} from 'react-bootstrap';

// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = 'bottom';

const ReactTrafoTemp = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const ModalBar = () => {
		return (
			<Bar
				data={{
					labels: ['01.00', '05.00', '09.00', '13.00', '17.00', '21.00'],
					datasets: [
						{
							label: ['V'],
							data: [10.0, 18.0, 20.0, 4, 12.0, 14.0, 16.0],
							backgroundColor: [
								'rgba(255, 99, 132, 0.8)',
								'rgba(255, 99, 132, 0.8)',
								'rgba(255, 99, 132, 0.8)',
								'rgba(255, 99, 132, 0.8)',
								'rgba(255, 99, 132, 0.8)',
								'rgba(255, 99, 132, 0.8)',
							],
							borderColor: [
								'rgba(255, 99, 132, 1)',
								'rgba(255, 99, 132, 1)',
								'rgba(255, 99, 132, 1)',
								'rgba(255, 99, 132, 1)',
								'rgba(255, 99, 132, 1)',
								'rgba(255, 99, 132, 1)',
							],
							borderWidth: 3,
							hoverOffset: 10,
							barThickness: 12,
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
						text: 'Rect Trafo Liquid Temp',
						fontSize: 25,
					},
					legend: {
						display: true,
						position: 'bottom',
					},
				}}
			/>
		);

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
				<ModalBar />
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
								<ModalBar field className='graphic' />
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

export default ReactTrafoTemp;
