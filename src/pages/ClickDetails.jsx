import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function ClickDetails() {
  const [userDetails, setUserDetails] = useState([]);

  const { id } = useParams();

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks/${id}`
      );
      console.log(response.data);
      setUserDetails(response.data);
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
      {userDetails && (
        <>
          <h3>{userDetails.name}</h3>
          {userDetails.imageUrl && (
            <img
              src={userDetails.imageUrl}
              alt={`${userDetails.name}'s profile image`}
              style={{ maxWidth: "200px" }}
            />
          )}
          {userDetails.description && <p>{userDetails.description}</p>}
          {userDetails.questionnaire && (
            <>
              <p>Color: {userDetails.questionnaire[0]}</p>
              <p>You like to: {userDetails.questionnaire[1]}</p>
              <p>Favourite thing: {userDetails.questionnaire[2]}</p>
              <p>What is what: {userDetails.questionnaire[3]}</p>
            </>
          )}
          <Link to={`/chat/${encodeURIComponent(JSON.stringify(userDetails))}`}>
            Send Message
          </Link>
          <Link to={"/chat/chatroom"}>Enter chatroom</Link>
        </>
      )}
    </div>
  );
}

export default ClickDetails;
