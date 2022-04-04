import React, { useState, useContext } from 'react';
import { Line } from 'react-chartjs-2';

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
import { GlobalState } from 'GlobalState.js';

const VoltAfterTrafo = () => {
	const state = useContext(GlobalState);
	const [view_voltaf] = state.formApi.voltAF;
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const label_jam = [];
	const valueVolta1_2 = [];
	const valueVolta2_3 = [];
	const valueVolta3_1 = [];
	let no = 0;
	let temp_no = 0;

	view_voltaf.map((prop, key) => {
		key = { key };
		temp_no = no++;
		valueVolta1_2[temp_no] = prop.valueVolta1_2;
		valueVolta2_3[temp_no] = prop.valueVolta2_3;
		valueVolta3_1[temp_no] = prop.valueVolta3_1;
		label_jam[temp_no] = prop.nilai_jam;
	});

	const ModalLine = () => {
		return (
			<Line
				data={{
					labels: label_jam,
					datasets: [
						{
							label: '1 - 2',
							data: valueVolta1_2,
							fill: false,
							// backgroundColor: 'white',
							borderColor: 'rgba(255, 99, 132, 0.8)',
							// borderWidth: 1,
						},
						{
							label: '2 - 3',
							data: valueVolta2_3,
							fill: false,
							// backgroundColor: 'white',
							borderColor: 'rgba(54, 162, 235, 0.8)',
						},
						{
							label: '3 - 1',
							data: valueVolta3_1,
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
						text: 'Voltage After',
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
						<th>1-2</th>
						<th>2-3</th>
						<th>3-1</th>
					</tr>
				</thead>
				<tbody>
					{view_voltaf.map((prop, key) => {
						return (
							<tr>
								<td>{prop.nilai_jam}</td>
								<td>{prop.valueVolta1_2}</td>
								<td>{prop.valueVolta2_3}</td>
								<td>{prop.valueVolta3_1}</td>
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
				onHide={handleClose}
				keyboard={false}
				size='lg'
				className=''>
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

export default VoltAfterTrafo;
