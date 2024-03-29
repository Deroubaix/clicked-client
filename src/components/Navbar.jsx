

import React, { useContext } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { NavDropdown, Button } from 'react-bootstrap';
import '/styles/navbar.css';


/* import myLogo from '../../images/logo2.png'; */



function Navigation() {
  const { loggedIn, user, logout, deletedProfile } = useContext(AuthContext);

  return (
    <>
      <style>
        {`
          .navbar-nav > li {
            margin-right: 0;
          }
  
          .navbar-nav > li:not(:last-child) {
            margin-right: 15px;
            
          }
  
          .navbar-nav a {
            padding-left: 30px;
            padding-right: 30px;
            text-decoration: none;
            color:#30287A;
          }
  
          .navbar-brand img {
            max-width: 20%;
            min-width: 20%
            height: 20%;
          }
  
          /* Define styles for active link */
          .nav-link.active {
            color: #fff;
            background-color: #30287A;
            border-radius: 5px;
            padding: 5px 10px;
          }
  
          /* Make navbar transparent */
          .navbar {
            background-color: rgba(255, 255, 255, 0.5) !important;
            box-shadow: none !important;
          }
        `}
      </style>
      <Navbar
        bg="light"
        expand="lg"
        className="fixed-top"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <Link to="/" className="navbar-brand fw-bold"> <h2>
          Clicked </h2>
        </Link>
        {loggedIn ? (
          <>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto">
                <NavLink as={Link} to="/clicks" className="active">
                  Clicks
                </NavLink>
                <NavLink as={Link} to="/yourchats" className="active">
                  Chats
                </NavLink>
                <NavLink as={Link} to="/profile" className="active">
                  Profile
                </NavLink>
                <NavLink className="logout-link" variant="link" onClick={logout}>
                  Logout
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : null}
      </Navbar>
    </>
  );
  
}






export default Navigation;
