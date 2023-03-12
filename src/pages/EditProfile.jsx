import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditProfile() {
    const [image, setImage] = useState("")
    const [description, setDescription,] = useState("")

    const handleImage = (e) => setImage(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const navigate = useNavigate()

    const {id} = useParams()

    const getProfile = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/profile/${id}`)
            setImage(response.data.image)
            setDescription(response.data.description)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        getProfile()
    }, [id])

    const deleteProject = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/projects/${id}`)
            navigate('/projects')
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {image, description}
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, body)
            navigate(`/projects/${id}`)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <section>
            <h1>
                Edit Profile
            </h1>

            <form onSubmit={handleSubmit}>
                
                <label>Image:
                <input type='file' name='poster' class='form-control-file' />
               </label>

                <label for="description" class="form-label">Bio</label>
              <textarea
                class="form-control"
                name="description"
                id="description"
                rows="5"
                placeholder="Say something about yourself"
                onChange={handleDescription}
              ></textarea>
                <button type='submit'>Edit Profile</button>
            </form>

            <button onClick={deleteProject}>Delete</button>
        </section>
    )
}

export default EditProfile