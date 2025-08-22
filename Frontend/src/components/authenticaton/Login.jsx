import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import suiteImage from '../../assets/images/suites/suite-7.jpg';
import googleIcon from '../../assets/icons/google-1.png';

const Login = () => {
  const [username, setUsername] = useState(""); // email or phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://mozuma-oceanfront-suites-beyin-production.up.railway.app/api/user/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid login credentials");
      }

      const data = await response.json();
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login-page'>
      <div className='login-image'>
        <img src={suiteImage} alt="login" />
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
            <button type='submit' className='login-button' disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
        </form>

        <Link to='/auth/google' className='google-login'>
          <img src={googleIcon} alt="google" />
          <p>Sign in with Google</p>
        </Link>

        <p className='login-option'>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
