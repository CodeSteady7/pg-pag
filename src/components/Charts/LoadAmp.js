import React, { useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { GlobalState } from 'GlobalState.js';
import { Modal, Container, Row, Table, Col } from 'react-bootstrap';

const LoadAmp = () => {
	const state = useContext(GlobalState);
	const [view_loadamp] = state.formApi.loadAmp;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const label_jam = [];
	const value1Loadamp = [];
	const value2Loadamp = [];
	const value3Loadamp = [];
	let no = 0;
	let temp_no = 0;

	 view_loadamp.map((prop, key) => {
		key = { key };
		temp_no = no++;
		value1Loadamp[temp_no] = prop.value1Loadamp;
		value2Loadamp[temp_no] = prop.value2Loadamp;
		value3Loadamp[temp_no] = prop.value3Loadamp;
		label_jam[temp_no] = prop.nilai_jam;
	});

	const ModalLine = () => {
		return (
			<Line
				data={{
					labels: label_jam,
					datasets: [
						{
							label: '1',
							data: value1Loadamp,
							backgroundColor: 'white',
							fill: false,
							borderColor: 'rgba(255, 99, 132, 0.8)',

							// borderWidth: 1,
						},
						{
							label: '2',
							data: value2Loadamp,
							backgroundColor: 'white',
							fill: false,
							borderColor: 'rgba(54, 162, 235, 0.8)',
						},
						{
							label: '3',
							data: value3Loadamp,
							backgroundColor: 'white',
							fill: false,
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
						y: {
							// defining min and max so hiding the dataset does not change scale range
							min: 0,
							max: 100,
						},
					},
					title: {
						display: true,
						text: 'Load Amp',
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
			<Table>
				<thead>
					<tr>
						<th>Hours</th>
						<th>1</th>
						<th>2</th>
						<th>3</th>
					</tr>
				</thead>
				<tbody>
					{view_loadamp.map((prop, key) => {
						return (
							<tr>
								<td>{prop.nilai_jam}</td>
								<td>{prop.value1Loadamp}</td>
								<td>{prop.value2Loadamp}</td>
								<td>{prop.value3Loadamp}</td>
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

export default LoadAmp;
