/* 
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function AllClicks() {
 const { user } = useParams();
 
 const [clicks, setClicks] = useState([]);

  const getClicks = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks`
      );
      setClicks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClicks();
  }, []);

  return (
    <div>
      <h1>Clicks</h1>

     <h3>Hi {updatedUser && updatedUser.name}</h3> 

      {updatedUser && (
        <>
          <p>Color: {updatedUser.questionnaire[0]}</p>
          <p>You like to: {updatedUser.questionnaire[1]}</p>
          <p>Favoutite thing: {updatedUser.questionnaire[2]}</p>
          <p>What is what: {updatedUser.questionnaire[3]}</p>
        </>
      )} 
    <Link to={`/clicks/${user._id}`}/>


  {updatedUser ? (
        <Link to="/profile/questionnaire">Redo Questionnaire</Link>
      ) : (
        <Link to="/profile/questionnaire">Start Questionnaire</Link>
      )} 

    </div>
  );
}

export default AllClicks; */

/* import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function AllClicks() {
  const { users } = useContext(AuthContext);
  const [clicks, setClicks] = useState([]);

  const getClicks = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks`
      );
      setClicks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClicks();
  }, []);

  return (
    <div>
      <h1>Clicks</h1>
      {clicks.map((click) => (
        <Link key={click._id} to={`/clicks/${click.users._id}`}>
          {click.users.name}
        </Link>
      ))}
    </div>
  );
}

export default AllClicks; */

import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { Link } from "react-router-dom";
import "/styles/allClicks.css";

function AllClicks() {
  const [allClicks, setAllClicks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const storedToken = localStorage.getItem("authToken");

  const getAllClicks = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks?name=${searchQuery}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setAllClicks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllClicks();
  }, [searchQuery]);

  return (
    <div className="facebook-container">
      <div className="left-sidebar">
        <div className="bottom-left-button">
          <button className="btn-primary-chat">Back to Profile</button>
        </div>
      </div>
      <div className="main-content">
        <h1>Your Clicks</h1>
        <div className="facebook-feed">
          {allClicks
            .filter((user) =>
              user.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((user) => (
              <div className="card" key={user._id}>
                <div className="card-content">
                  <div className="card-image-wrapper">
                    <img
                      className="card-img-top rounded"
                      src={user.imageUrl}
                      alt={user.name}
                    />
                  </div>
                  <div className="card-button-wrapper">
                    <h5 className="card-title">{user.name}</h5>
                    <Link
                      to={`/clicks/${user._id}`}
                      className="btn-all-clicks "
                    >
                      See details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="right-sidebar">
        <div className="right-sidebar-content">
          <input
            className="all-clicks-input"
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
  
}

export default AllClicks;



/* import React from 'react';
import './Basic.css';

function Basic() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <img
                className="card-img-top rounded-circle"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Profile Avatar"
              />
            </div>
            <div className="col-md-8">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.description}</p>


              <div className="d-flex pt-1">
                <button className="btn btn-outline-primary me-1 flex-grow-1">Send message</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic; */
