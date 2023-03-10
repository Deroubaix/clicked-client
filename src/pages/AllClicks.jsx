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

function AllUsers() {
  const { users } = useContext(AuthContext);
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks`
      );
      setAllUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h1>Clicks</h1>
      {allUsers.map((user) => (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <p>{user.description}</p>
          <img src={user.image} alt={user.name} />
          <p>{user.questionnaire}</p>
        </div>
      ))}
    </div>
  );
}

export default AllUsers;