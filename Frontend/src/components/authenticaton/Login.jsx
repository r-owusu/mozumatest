

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState(""); // email or phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      const data = await response.json();
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      // Redirect after login
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='login-page'>
      <div>
        <img src='../../assets/images/suites/suite-7.jpg' alt="login" />
      </div>

      <div className='login-inner'>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='Email or Phone Number'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='login-div'>
            <button type='submit' className='login-button'>Log In</button>
            <Link to=''>Forgot Password?</Link>
          </div>
        </form>

        <Link to="" className='google-login'>
          <img src='../../assets/icons/google-1.png' alt="google" />
          <p>Sign up with Google</p>
        </Link>

        <p className='login-option'>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
