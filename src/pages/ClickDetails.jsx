import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function ClickDetails() {
  const { user } = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(null);

  const getUpdatedUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/clicks/${user._id}`
      );
      setUpdatedUser(response.data);
      console.log(setUpdatedUser);
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

      <Link to="/clicks"> Clicks and chicks </Link>

      {updatedUser && (
        <>
          <p>Color: {updatedUser.questionnaire[0]}</p>
          <p>You like to: {updatedUser.questionnaire[1]}</p>
          <p>Favoutite thing: {updatedUser.questionnaire[2]}</p>
          <p>What is what: {updatedUser.questionnaire[3]}</p>
        </>
      )}

      {updatedUser && updatedUser.questionnaire.length ? (
        <Link to="/profile/questionnaire">Redo Questionnaire</Link>
      ) : (
        <Link to="/profile/questionnaire">Start Questionnaire</Link>
      )}
    </div>
  );
}

export default ClickDetails;
