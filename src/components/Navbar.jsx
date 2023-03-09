

import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar id='navigate' expand="md" style={{ justifyContent: "flex-start" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{ display: "flex", width: "100%" }}>
                    <NavLink className="nav-link" to="/" >Home</NavLink>
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                    <NavLink className="nav-link" to="/signup"> Signup </NavLink>
                    <NavLink className="nav-link" to="/login"> Login </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation