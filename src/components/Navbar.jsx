

import React, { useContext } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { NavDropdown, Button } from 'react-bootstrap';



import {myLogo} from '../../images/logo2.png';

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
            height: auto;
          }
  
          /* Define styles for active link */
          .nav-link.active {
            color: #fff;
            background-color: #30287A;
            border-radius: 5px;
            padding: 5px 10px;
          }
        `}
      </style>
      <Navbar bg="light" expand="lg" className="fixed-top" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}> {/* add fixed-top class and inline style */}
        {loggedIn ? (
          <>
            
            <Navbar.Toggle aria-controls="navbarNav" />
            
            <Navbar.Collapse id="navbarNav">
            <Link  className="navbar-brand fw-bold">
              <img src="../../images/logo2.png" alt="logo" />
            </Link>
              <Nav className="ms-auto">
                <NavLink as={Link} to="/clicks"  className="active"> {/* add activeClassName prop */}
                  Clicks
                </NavLink>
                <NavLink as={Link} to="/yourchats"  className="active">
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
        ) : (
          <Link to="/" className="navbar-brand fw-bold">
            <img src={myLogo} alt="logo" />
          </Link>
        )}
      </Navbar>
    </>
  );
}






export default Navigation;
