import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {} from 'reactstrap';
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import OnePage from 'views/OnePage';

function Form(props) {
	return (
		<>
			<div className='wrapper App '>
				<DemoNavbar logic={true} />
				<OnePage />
			</div>
		</>
	);
}

export default Form;
