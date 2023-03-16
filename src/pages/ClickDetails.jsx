import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import ChatBox from "../components/ChatBox";
import "/styles/clickDetails.css";


function Loading() {
  return (
    <div className="loading-container">
      <img src="../../images/Loading.gif" alt="Loading..." />
    </div>
  );
}

function ClickDetails() {
  const [userDetails, setUserDetails] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks/${id}`
      );
      console.log(response.data);
      setUserDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const enterChatRoom = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/chat/${user._id}/${
          userDetails._id
        }`
      );
      console.log(response.data);

      setShowChat((prevShowChat) => !prevShowChat);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  /* return (
    <div className="user-profile">
      {isLoading ? (
        <Loading />
      ) : (
        userDetails && (
          <div className="profile-wrapper">
            <div className="user-details">
              {userDetails.imageUrl && (
                <div className="profile-image-wrapper">
                  <img
                    src={userDetails.imageUrl}
                    alt={`${userDetails.name}'s profile image`}
                    className="profile-image"
                  />
                  <h3 className="profile-name">{userDetails.name}</h3>
                </div>
              )}
              {userDetails.description && (
                <p className="profile-description">{userDetails.description}</p>
              )}
              {userDetails.questionnaire && (
                <div className="profile-questions">
                  <p>
                    <span className="profile-question">Color:</span>{" "}
                    {userDetails.questionnaire[0]}
                  </p>
                  <p>
                    <span className="profile-question">You like to:</span>{" "}
                    {userDetails.questionnaire[1]}
                  </p>
                  <p>
                    <span className="profile-question">Favourite thing:</span>{" "}
                    {userDetails.questionnaire[2]}
                  </p>
                  <p>
                    <span className="profile-question">What is what:</span>{" "}
                    {userDetails.questionnaire[3]}
                  </p>
                </div>
              )}
            </div>
            <div className="message-button-container">
              {showChat && <ChatBox userDetails={userDetails} />}
              <button className="message-button" onClick={() => enterChatRoom()}>
                {showChat
                  ? "Close Message"
                  : `Send ${userDetails.name} a Message`}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  ); */

  return (

<div className="user-profile">
  {isLoading ? (
    <Loading />
  ) : (
    userDetails && (
      <div className="profile-wrapper">
        <div className="sidebar-left">
        <div className="bottom-left-button">
            <Link to="/clicks" className="btn-primary-chat">Back to Clicks</Link>
          </div>        
          </div>
        <div className="user-details">
          {userDetails.imageUrl && (
            <div className="profile-image-wrapper">
              <img
                src={userDetails.imageUrl}
                alt={`${userDetails.name}'s profile image`}
                className="profile-image"
              />
              <h3 className="profile-name">{userDetails.name}</h3>
            </div>
          )}
          {userDetails.description && (
            <p className="profile-description">Bio: {userDetails.description}</p>
          )}
          {userDetails.questionnaire && (
            <div className="profile-questions">
              <p>
                <span className="profile-question">Color:</span>{" "}
                {userDetails.questionnaire[0]}
              </p>
              <p>
                <span className="profile-question">You like to:</span>{" "}
                {userDetails.questionnaire[1]}
              </p>
              <p>
                <span className="profile-question">Favourite thing:</span>{" "}
                {userDetails.questionnaire[2]}
              </p>
              <p>
                <span className="profile-question">What is what:</span>{" "}
                {userDetails.questionnaire[3]}
              </p>
            </div>
          )}
        </div>
        <div className="sidebar-right">
        <div className="right-sidebar-content">
            
          </div>
                  </div>
                  <div className="message-button-container">
              {showChat && <ChatBox userDetails={userDetails} />}
              <button className="message-button" onClick={() => enterChatRoom()}>
                {showChat
                  ? "Close Message"
                  : `Send ${userDetails.name} a Message`}
              </button>
            </div>
      </div>
    )
  )}
</div>
  )

/* 


return (
    <div className="facebook-container">
      <div className="left-sidebar">
      {isLoading ? (
        <Loading />
      ) : (
        userDetails && (
          <div className="profile-wrapper">
            <div className="user-details">
              {userDetails.imageUrl && (
                <div className="profile-image-wrapper">
                  <img
                    src={userDetails.imageUrl}
                    alt={`${userDetails.name}'s profile image`}
                    className="profile-image"
                  />
                  <h3 className="profile-name">{userDetails.name}</h3>
                </div>
              )}
              {userDetails.description && (
                <p className="profile-description">{userDetails.description}</p>
              )}
              {userDetails.questionnaire && (
                <div className="profile-questions">
                  <p>
                    <span className="profile-question">Color:</span>{" "}
                    {userDetails.questionnaire[0]}
                  </p>
                  <p>
                    <span className="profile-question">You like to:</span>{" "}
                    {userDetails.questionnaire[1]}
                  </p>
                  <p>
                    <span className="profile-question">Favourite thing:</span>{" "}
                    {userDetails.questionnaire[2]}
                  </p>
                  <p>
                    <span className="profile-question">What is what:</span>{" "}
                    {userDetails.questionnaire[3]}
                  </p>
                </div>
              )}
            </div>
            <div className="message-button-container">
              {showChat && <ChatBox userDetails={userDetails} />}
              <button className="message-button" onClick={() => enterChatRoom()}>
                {showChat
                  ? "Close Message"
                  : `Send ${userDetails.name} a Message`}
              </button>
            </div>
          </div>
        )
      )}
    </div>
    </div>
  );
 */



}


export default ClickDetails;
