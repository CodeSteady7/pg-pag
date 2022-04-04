import React, { useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Modal, Container, Row, Table, Col } from 'react-bootstrap';

import { GlobalState } from 'GlobalState.js';
const Field = () => {
	const state = useContext(GlobalState);
	const [tblField] = state.formApi.tbl_Field;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const label_jam = [];
	const data_field_V = [];
	const data_field_A = [];
	let no = 0;
	let temp_no = 0;

	tblField.map((prop, key) => {
		key = { key };
		temp_no = no++;
		data_field_V[temp_no] = prop.valueV;
		data_field_A[temp_no] = prop.valueA;
		label_jam[temp_no] = prop.nilai_jam;
	});

	// console.log(data_field);
	// {
	// 	tblField.map((prop, key) => {
	// 		// console.log(prop.nilai_jam);
	// 		setSimpan(prop.nilai_jam);
	// 	});
	// }
	// for (let i = 0; i < tblField.length; i++) {
	// 	arr = i;
	// }

	const ModalLine = field => {
		return (
			<>
				<Line
					data={{
						labels: label_jam,
						datasets: [
							{
								label: 'V',
								data: data_field_V,
								backgroundColor: 'white',
								fill: false,
								borderColor: 'rgba(255, 99, 132, 0.8)',
								// borderWidth: 1,
							},
							{
								label: 'A',
								data: data_field_A,
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
							text: 'Field',
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
			</>
		);
	};

	const TableForm = () => {
		return (
			<>
				<Table>
					<thead>
						<tr>
							<th>Hours</th>
							<th>V</th>
							<th>A</th>
						</tr>
					</thead>
					<tbody>
						{tblField.map((prop, key) => {
							return (
								<>
									<tr>
										<td>{prop.nilai_jam}</td>
										<td>{prop.valueV}</td>
										<td>{prop.valueA}</td>
									</tr>
								</>
							);
						})}
					</tbody>
				</Table>
			</>
		);
	};

	return (
		<>
			{/* {console.log('data jaml= ', tblField)} */}
			{/* {console.log('data event = ', events)} */}
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

export default Field;
