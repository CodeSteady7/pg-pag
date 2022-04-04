import React, { useState, useContext } from 'react';
import { defaults, Bar, HorizontalBar } from 'react-chartjs-2';
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
import { canvasVoltBeforeTrafo } from './Charts.js';
import { GlobalState } from 'GlobalState.js';

// defaults.global.tooltips.enabled = false;
// defaults.global.legend.position = 'bottom';

const VoltBeforeTrafo = () => {
	const state = useContext(GlobalState);
	const [view_volfBF] = state.formApi.volfBF;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const label_jam = [];
	const data_valueV_BT = [];
	let no = 0;
	let temp_no = 0;

	view_volfBF.map((prop, key) => {
		key = { key };
		temp_no = no++;
		data_valueV_BT[temp_no] = prop.valueV_BT;
		label_jam[temp_no] = prop.nilai_jam;
	});
	const ModalBar = () => {
		return (
			<Bar
				data={{
					labels: label_jam,
					datasets: [
						{
							label: 'V',
							data: data_valueV_BT,
							backgroundColor: ['rgba(255, 99, 132, 0.8)'],
							fill: false,
							borderColor: ['rgba(255, 99, 132, 1)'],
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
						text: 'Field',
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
						<th>V</th>
					</tr>
				</thead>
				<tbody>
					{view_volfBF.map((prop, key) => {
						return (
							<>
								<tr>
									<td>{prop.nilai_jam}</td>
									<td>{prop.valueV_BT}</td>
								</tr>
							</>
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

export default VoltBeforeTrafo;
