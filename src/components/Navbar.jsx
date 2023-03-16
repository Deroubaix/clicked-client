

import React, { useContext } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { NavDropdown, Button } from 'react-bootstrap';


import logo from '../../images/logo2.png';

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
            max-width: 25%;
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
      <Navbar bg="light" expand="lg" className="fixed-top"> {/* add fixed-top class */}
        {loggedIn ? (
          <>
            <Link  className="navbar-brand fw-bold">
              <img src="../../images/logo2.png" alt="logo" />
            </Link>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto">
                <NavLink as={Link} to="/clicks" activeClassName="active"> {/* add activeClassName prop */}
                  Your Clicks
                </NavLink>
                <NavLink as={Link} to="/yourchats" activeClassName="active">
                  Your Chats
                </NavLink>
                <NavLink as={Link} to="/profile" activeClassName="active">
                  Profile
                </NavLink>
                <NavLink variant="link" onClick={logout}>
                  Logout
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <Link to="/" className="navbar-brand fw-bold">
            <img src="../../images/logo2.png" alt="logo" />
          </Link>
        )}
      </Navbar>
    </>
  );
}






export default Navigation;
