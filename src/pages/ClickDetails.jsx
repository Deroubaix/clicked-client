import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import ChatBox from "../components/ChatBox/ChatBox";

function ClickDetails() {
  const [userDetails, setUserDetails] = useState([]);
  const [showChat, setShowChat] = useState(false);

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

  const toggleChat = () => {
    setShowChat((prevShowChat) => !prevShowChat);
  };

  const enterChatRoom = () => {
    setShowChat((prevShowChat) => !prevShowChat);
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
          <button onClick={enterChatRoom}>{showChat ? "Close Message" : "Send Message"}</button>
          {showChat && <ChatBox userDetails={userDetails} />}
        </>
      )}
    </div>
  );
}

export default ClickDetails;