import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '/styles/signup.css'




function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const handleName = (e) => setName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, { name, email, password })
      console.log(response.data)
      navigate('/login')
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }

  return (
    <section className="login-signup-section">
    <div className="login-signup-box">
    <header className="login-signup-header">  
      <h1>Signup</h1>
      <p>Find your clicks</p>
      </header>
      <form className='signup' onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className="form-input" type="text" name="name" id="name" value={name} onChange={handleName} />

        <label htmlFor="email">Email</label>
        <input className="form-input" type="email" name="email" id="email" value={email} onChange={handleEmail} />

        <label htmlFor="password">Password</label>
        <input className="form-input" type="password" name="password" id="password" value={password} onChange={handlePassword} />

        <button className="login-signup-button" type="submit">Create account</button>
        
      </form>
      {error && <p className="error-message" >{error}</p>}
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
      </div>
    </section>
  )
}

export default Signup