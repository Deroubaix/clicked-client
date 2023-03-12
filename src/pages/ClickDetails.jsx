import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function ClickDetails() {
  // const { user } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState([]);

  const { id } = useParams();

  // const {  name } = userDetails;

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks/${id}`
      );
      setUserDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
    console.log(id, userDetails?.name); // optional chain: to avoid breaking if it doesnt have the data
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      <h3>{userDetails?.name}</h3>{" "}
      {/* because we can never trust the backend and be sure that the data is there  */}
      {userDetails.length && (
        <>
          <p>Color: {userDetails?.questionnaire[0]}</p>
          <p>You like to: {questionnaire[1]}</p>
          <p>Favoutite thing: {questionnaire[2]}</p>
          <p>What is what: {questionnaire[3]}</p>
        </>
      )}
      <Link to={`/chat/${encodeURIComponent(JSON.stringify(userDetails))}`}>
        Send Message
      </Link>
    </div>
  );
}

export default ClickDetails;
