// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/loginPage.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () =>{
    try {
      // Make an API request to your backend for authentication


    //   const response = await axios.post('/api/login', {
    //     username,
    //     password,
    //   });

      // Handle successful login (e.g., store token in localStorage)
      var x = localStorage.setItem('username', username);
      var y = localStorage.setItem('password',password);
      
     // localStorage.setItem('token', response.data.token);

      // Redirect to the home page or a protected route
      // You can use React Router for navigation
      // Example: history.push('/dashboard');
    } catch (error) {
      //console.error('Login failed:', error.message);



      // Handle login error (display error message to the user)
    }

  };

  return (
    <div className='main-login'>
      <h1>Login</h1>
      <p>Hey welcome back, signin here.</p>
     <div> <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      
      <div><input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>

      <div><button onClick={handleLogin}>Login</button></div>
    </div>
  );
};

export default Login;
