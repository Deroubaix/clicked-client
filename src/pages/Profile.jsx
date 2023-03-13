import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function Profile() {
  const { user } = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(null);

  const getUpdatedUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/profile/${user._id}`
      );
      setUpdatedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUpdatedUser();
  }, []);

  return (
    <div>
      <h1>Profile</h1>

      <h3>Hi {updatedUser && updatedUser.name}</h3>

      {updatedUser && (
        <>
          <img
            src={updatedUser.imageUrl}
            alt={`${updatedUser.name}'s profile image`}
            style={{ maxWidth: "200px" }}
          />

          <p>{updatedUser.description}</p>
          {updatedUser && <Link to={`/profile/edit/${updatedUser._id}`}>Edit Profile</Link>} 

          {updatedUser.questionnaire && updatedUser.questionnaire.length > 0 ? (
            <>
              <p>Color: {updatedUser.questionnaire[0]}</p>
              <p>You like to: {updatedUser.questionnaire[1]}</p>
              <p>Favoutite thing: {updatedUser.questionnaire[2]}</p>
              <p>What is what: {updatedUser.questionnaire[3]}</p>
              <Link to="/profile/questionnaire">Redo Questionnaire</Link>
              <Link to="/clicks"> Clicks and chicks </Link>
            </>
          ) : (
            <Link to="/profile/questionnaire">Start Questionnaire</Link>
          )}
        </>
      )}

      {/* {updatedUser && <Link to="/clicks"> Clicks and chicks </Link>} */}
    </div>
  );
}

export default Profile;

