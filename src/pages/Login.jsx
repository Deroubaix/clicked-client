import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import '/styles/login.css'


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const { authenticateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { email, password }
      );

       localStorage.setItem("authToken", response.data.authToken);
      await authenticateUser();

      console.log(response.data.authToken);

      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message)
    }
  };

  return (
    <div className="login-page" >
    <section className="login-signup-section">
      <div className="login-signup-box">
      <header className="login-signup-header">
      <h1>Login</h1>
      <p>log in to connect </p>
      </header>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input className="form-input"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
        ></input>

        <label htmlFor="password">Password</label>
        <input className="form-input"
     type="password" name="password" id="password" value={password} onChange={handlePassword}
        ></input>
         
        <button className="login-signup-button" type="submit">Login</button>
      </form>
      {error && <p className="error-message" >{error}</p>}

      <p>Dont have an account?</p>
      <Link className="sign-up" to="/signup">Signup</Link>
      </div>
    </section>
    </div>
  );
}

export default Login;
