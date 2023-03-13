import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function EditProfile() {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleImage = (e) => setImage(e.target.files[0]);
  const handleDescription = (e) => setDescription(e.target.value);
  const navigate = useNavigate();

  const { id } = useParams();

  const getProfile = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/profile/${id}`);
      setImage(response.data.image);
      setDescription(response.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, [id]);

  const deleteProfile = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
    if (confirmDelete) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/profile/${id}`);
        localStorage.removeItem('authToken');
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/profile/${id}`, formData);
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
          <input type="file" name="poster" onChange={handleImage} encType="multipart/form-data" />
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

      <button onClick={deleteProfile}>Delete</button>
    </section>
  );
}

export default EditProfile