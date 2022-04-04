import React, { useState, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Modal, Container, Row, Table, Col } from 'react-bootstrap';

import { GlobalState } from 'GlobalState.js';
const PowerFactor = () => {
	const state = useContext(GlobalState);
	const [view_powerfactor] = state.formApi.powerfactor;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const label_jam = [];
	const data_Powerfactor = [];
	let no = 0;
	let temp_no = 0;
	view_powerfactor.map((prop, key) => {
		key = { key };
		temp_no = no++;
		data_Powerfactor[temp_no] = prop.valuePowerfactor;
		label_jam[temp_no] = prop.nilai_jam;
	});
	const ModalBar = () => {
		return (
			<Bar
				data={{
					labels: label_jam,
					datasets: [
						{
							label: ['V'],
							data: data_Powerfactor,
							backgroundColor: ['rgba(255, 99, 132, 0.8)'],
							borderColor: ['rgba(255, 99, 132, 1)'],
							borderWidth: 3,
							barThickness: 12,
							hoverOffset: 10,
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
						text: 'Power Factor',
						fontSize: 25,
					},
					legend: {
						display: true,
						position: 'bottom',
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
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{view_powerfactor.map((prop, key) => {
						return (
							<tr>
								<td>{prop.nilai_jam}</td>
								<td>{prop.valuePowerfactor}</td>
							</tr>
						);
					})}
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
				<Modal.Body>
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

export default PowerFactor;
