import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Input,
	InputGroup,
} from 'reactstrap';

import routes from 'routes.js';

function Header(props) {
	return (
		<div className=''>
			<Navbar color='white' expand='md' light className=''>
				<NavbarBrand href='/' className='text-dark navbar-brand'>
					GRAPHIC
				</NavbarBrand>
				{/* <Collapse navbar> */}
				<Nav className='me-auto'>
					<NavItem>
						<NavLink href='/form' className='text-dark '>
							FORM
						</NavLink>
					</NavItem>
					{/* <NavItem>
						<NavLink href='/formulir' className='text-dark'>
							FORMULIR
						</NavLink>
					</NavItem> */}
				</Nav>
				{props.logic ? (
					<form className='res-input'>
						<InputGroup className='no-border'>
							<Input
								placeholder='Search...'
								className=''
								type='date'
								style={{ background: 'white' }}
							/>
						</InputGroup>
					</form>
				) : (
					''
				)}
				{/* </Collapse> */}
			</Navbar>
		</div>
	);
}

export default Header;
