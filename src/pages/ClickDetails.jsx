import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function ClickDetails() {
  // const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(null);

  const {id} = useParams()

  const { questionnaire, name } = userDetails;

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks/${user._id}`
      );
      setUserDetails(response.data);
      console.log(setUserDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>

      <h3>Hi, {user.name}</h3>

      {userDetails && (
        <>
          <p>Color: {questionnaire[0]}</p>
          <p>You like to: {questionnaire[1]}</p>
          <p>Favoutite thing: {questionnaire[2]}</p>
          <p>What is what: {questionnaire[3]}</p>
        </>
      )}


        <Link to="/send/message">Send Message</Link>

    </div>
  );
}

export default ClickDetails;
