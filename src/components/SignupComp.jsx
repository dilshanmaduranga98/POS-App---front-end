// src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios'; // You'll need to install axios if you haven't already
import '../styles/loginPage.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null); // State for handling errors

  const handleSignup = async () => {
    try {
      // Make an API request to your backend for user registration
      // Example: await axios.post('/api/signup', { username, password });

      // Handle successful signup (e.g., store token in localStorage)
      
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('confirmPassword', confirmPassword);

      if(password != confirmPassword)
        {
            throw (error = "Password and confrimpassword are not equal!!");
            // console.error(error);
        }

      // Redirect to the home page or a protected route
      // You can use React Router for navigation
      // Example: history.push('/dashboard');
    } catch (error) {
      //console.error('Signup failed:', error.message);
      setError("An error occurred during signup. Please try again."); // Set error message
    }
  };

  return (
    <div className='main-signup'>
      <h1>Sign Up</h1>
      <p>Create your account</p>
      <div className='inputs-div'>
        <input
          type="email"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='inputs-div'>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='inputs-div'>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSignup}>Sign Up</button>
        <p className='goto-signin'>If you already have an account, you can <Link to="/login">sigin</Link> here</p>
      </div>
      {error && <p className="error-message">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default Signup;
