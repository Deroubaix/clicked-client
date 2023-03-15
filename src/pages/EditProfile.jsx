import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import service from "../services/service";

function EditProfile() {
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleDescription = (e) => setDescription(e.target.value);
  const navigate = useNavigate();

  const handleFileUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        uploadData
      );
      setImageUrl(response.data.fileUrl);
    } catch (err) {
      console.log("Error while uploading the file: ", err);
    }
  };

  const { id } = useParams();

  const getProfile = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/profile/${id}`
      );
      setImageUrl(response.data.image);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, [id]);

  const deleteProfile = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/profile/${id}`);
        /* localStorage.removeItem("authToken"); */
       /*  navigate("/"); */
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const x = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/profile/${id}`,
        {
          imageUrl,
          description,
        }
      );
      console.log(x);
      navigate(`/profile`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h1>Edit Profile</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <input
            type="file"
            name="imageUrl"
            onChange={(e) => handleFileUpload(e)}
          />
        </label>
        {/* <input type='text' value={image}  name='currentImage' hidden /> */}

        <label htmlFor="description" className="form-label">
          Bio
        </label>
        <textarea
          name="description"
          id="description"
          rows="5"
          placeholder="Say something about yourself"
          value={description}
          onChange={handleDescription}
        />
        <button type="submit">Edit Profile</button>
      </form>

      <Link to="/" onClick={deleteProfile}>Delete</Link>
    </section>
  );
}

export default EditProfile;
