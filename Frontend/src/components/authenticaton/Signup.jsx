






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'; // make sure to import the CSS

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState(""); // email or phone
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Signup failed");
      }

      const data = await response.json();
      setSuccess("Account created successfully! You can now log in.");
      setError(null);

      // Redirect to login after signup
      setTimeout(() => navigate("/login"), 2000);

    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  return (
 


    <div className='signup-page'>
  <div className='signup-image'>
    <img src='../../assets/images/suites/suite-7.jpg' alt="signup" />
  </div>

  <div className='signup-form'>
    <h2>Create an account</h2>
    <p>Enter your details below</p>

    {error && <p className="error">{error}</p>}
    {success && <p className="success">{success}</p>}

    <form onSubmit={handleSignup}>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type='submit' className='signup-button'>Create an account</button>
    </form>

    <p className='login-option'>
      Already have an account? <Link to="/login">Log In</Link>
    </p>
  </div>
</div>

  );
};

export default Signup;
