import React, { useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { GlobalState } from 'GlobalState.js';
import { Modal, Container, Row, Table, Col } from 'react-bootstrap';

const LoadMW = () => {
	const state = useContext(GlobalState);
	const [view_load_mw] = state.formApi.load_mw;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const label_jam = [];
	const valueMeter = [];
	const valueRecord = [];
	let no = 0;
	let temp_no = 0;

	view_load_mw.map((prop, key) => {
		key = { key };
		temp_no = no++;
		valueMeter[temp_no] = prop.valueMeter_loadmw;
		valueRecord[temp_no] = prop.valueRecord_loadmw;
		label_jam[temp_no] = prop.nilai_jam;
	});

	const ModalLine = () => {
		return (
			<Line
				data={{
					labels: label_jam,
					datasets: [
						{
							label: 'Meter',
							data: valueMeter,
							backgroundColor: 'white',
							fill: false,
							borderColor: 'rgba(255, 99, 132, 0.8)',
							// borderWidth: 1,
						},
						{
							label: 'Record',
							data: valueRecord,
							backgroundColor: 'white',
							fill: false,
							borderColor: 'rgba(54, 162, 235, 0.8)',
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
						text: 'Load MW',
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
						<th>Meter</th>
						<th>Record</th>
					</tr>
				</thead>
				<tbody>
					{view_load_mw.map((prop, key) => {
						return (
							<>
								<tr>
									<td>{prop.nilai_jam}</td>
									<td>{prop.valueMeter_loadmw}</td>
									<td>{prop.valueRecord_loadmw}</td>
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

export default LoadMW;
