import React from 'react';
import GoogleAuth from './GoogleAuth';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<React.Fragment>
			<Navbar collapseOnSelect expand="lg">
				<p className="logo">NY</p>
				<Navbar.Brand className="brand white" href="/">
					neekyo.tv
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto" />
					<Nav>
						<Nav.Link href="/">All streams</Nav.Link>
					</Nav>
					<GoogleAuth />
				</Navbar.Collapse>
			</Navbar>
		</React.Fragment>
	);
};

export default Header;
