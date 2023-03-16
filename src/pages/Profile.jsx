import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import "/styles/profile.css";

function Loading() {
  return (
    <div className="loading-container">
      <img src="../../images/Loading.gif" alt="Loading..." />
    </div>
  );
}

function Profile() {
  const { user } = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const getUpdatedUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/profile/${user._id}`
      );
      setUpdatedUser(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpdatedUser();
  }, []);

  return (
    <div className="user-profile-log mb-4">
      {isLoading ? (
        <Loading />
      ) : (
        updatedUser && (
          <div className="profile-wrapper-log">
            <h1 className="profile-name-header">Hi, {updatedUser.name}</h1>
            <div className="profile-details-section">
              <div className="profile-image-section">
                {updatedUser.imageUrl && (
                  <div className="profile-image-wrapper-log">
                    <img
                      src={updatedUser.imageUrl}
                      alt={`${updatedUser.name}'s profile image`}
                      className="profile-image-log"
                      style={{ maxWidth: "170px" }}
                    />
                    <div className="profile-image-edit-link">
                      <Link to={`/profile/edit/${updatedUser._id}`} style={{ textDecoration: 'none' }}>Edit Profile</Link>
                    </div>
                  </div>
                )}
                {updatedUser.description && (
                  <p className="profile-description-log">{updatedUser.description}</p>
                )}
              </div>
            </div>

            <div className="profile-answers-section">
              {updatedUser.questionnaire && updatedUser.questionnaire.length > 0 ? (
                <div className="profile-questions-log">
                  <p>
                    <span className="profile-question-log">Ideal sunday is:</span>{" "}
                    {updatedUser.questionnaire[0]}
                  </p>
                  <p>
                    <span className="profile-question-log">Drinking preference:</span>{" "}
                    {updatedUser.questionnaire[1]}
                  </p>
                  <p>
                    <span className="profile-question-log">Music Taste:</span>{" "}
                    {updatedUser.questionnaire[2]}
                  </p>
                  <p>
                    <span className="profile-question-log">Politics:</span>{" "}
                    {updatedUser.questionnaire[3]}
                  </p>
                  <p>
                    <span className="profile-question-log">Preference:</span>{" "}
                    {updatedUser.questionnaire[4]}
                  </p>
                  <p>
                    <span className="profile-question-log">Ideal Holiday:</span>{" "}
                    {updatedUser.questionnaire[5]}
                  </p>
                  <div className="profile-links-log"  >
                    
                    {updatedUser && updatedUser.questionnaire && (
                    
                      <Link className="btn-link center-text" to="/profile/questionnaire" style={{ textDecoration: 'none' }}><p className="move-down">
                        Redo Questionnaire</p>
                      </Link>
                    )}
                    <Link className="btn-link center-text" to="/clicks" style={{ textDecoration: 'none' }}><p className="move-down">
                     Discover your Clicks</p>
                    </Link>
                   
                  </div>
                 
                </div>
              ) : (
               
                <div className="profile-links-log">
                  <Link className="btn-link center-text" to="/profile/questionnaire" style={{ textDecoration: 'none' }} > <p className="move-down">
                    Start Questionnaire</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}


export default Profile;

