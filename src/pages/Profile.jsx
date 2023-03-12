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
          {updatedUser && <Link to={`/profile/edit/${updatedUser._id}`}>Edit project</Link>} 

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

/* import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function Profile() {
  const { user } = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(null);
  const [updatedImage, setUpdatedImage] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState("");

  const getUpdatedUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/profile/${user._id}`
      );
      setUpdatedUser(response.data);
      setUpdatedImage(response.data.imageUrl);
      setUpdatedDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (event) => {
    setUpdatedImage(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setUpdatedDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/profile/${user._id}`,
        {
          imageUrl: updatedImage,
          description: updatedDescription,
        }
      );
      getUpdatedUser();
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
        <form onSubmit={handleSubmit}>
          <img
            src={updatedImage}
            alt={`${updatedUser.name}'s profile image`}
            style={{ maxWidth: "200px" }}
          />
          <label>
            Image URL:
            <input type="text" value={updatedImage} onChange={handleImageChange} />
          </label>
          <br />
          <label>
            Description:
            <textarea value={updatedDescription} onChange={handleDescriptionChange} />
          </label>
          <br />
          <button type="submit">Save</button>
          <Link to={`/profile/edit/${updatedUser._id}`}>Edit project</Link>
          <p>Color: {updatedUser.questionnaire[0]}</p>
          <p>You like to: {updatedUser.questionnaire[1]}</p>
          <p>Favoutite thing: {updatedUser.questionnaire[2]}</p>
          <p>What is what: {updatedUser.questionnaire[3]}</p>
        </form>
      )}

      <Link to="/clicks"> Clicks and chicks </Link>

      {updatedUser && updatedUser.questionnaire.length ? (
        <Link to="/profile/questionnaire">Redo Questionnaire</Link>
      ) : (
        <Link to="/profile/questionnaire">Start Questionnaire</Link>
      )}
    </div>
  );
}

export default Profile; */
