

import React, { useContext } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';



import "/styles/navbar.css";


function Navigation() {
  const { loggedIn, user, logout, deletedProfile } = useContext(AuthContext);

  return (
    <Navbar
      id="navigate"
      expand="md"
      style={{
        justifyContent: "center",
        top: "0",
        backgroundColor: "white",
        position: "fixed",
        width: "100%",
      }}
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <NavLink className="nav-link" to="/">
            <img src="../images/logo2.png" style={{ width: '40%' }}/>
          </NavLink>
          {loggedIn ? (
            <>
              <NavLink className="nav-link" to="/clicks" >
                Your Clicks
              </NavLink>
              <NavLink className="nav-link" to="/yourchats" >
                Your Chats
              </NavLink>
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
              <Link to="/" className="nav-link" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  
}

export default Navigation;
