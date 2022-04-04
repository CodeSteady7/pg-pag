import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Input.css';
function Input() {
	return (
		<div className='input-center'>
			<Row>
				<Col md='8'>
					<Form.Control type='date' placeholder='Readonly input here...' />
				</Col>
				<Col>
					<Button>Search</Button>
				</Col>
			</Row>
		</div>
	);
}

export default Input;
