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

function AllClicks() {
  const [allClicks, setAllClicks] = useState([]);

  const storedToken = localStorage.getItem("authToken");

  const getAllClicks = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      

      setAllClicks(response.data);

      console.log(allClicks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllClicks();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {allClicks.length &&
        allClicks.map((user) => (
          <div className="card m-2" key={user._id} style={{ width: "18rem" }}>
            <img className="card-img-top rounded-circle" src={user.imageUrl} alt={user.name} />
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.description}</p>
              <Link to={`/clicks/${user._id}`} className="btn btn-outline-primary">
                See details
              </Link>
            </div>
          </div>
        ))}
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
