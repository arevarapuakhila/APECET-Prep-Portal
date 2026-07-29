import React from 'react'
import AuthInput from '../components/AuthInput';
import "../styles/login.css";

import { useState } from "react";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const [error, setError] = useState("")
  
  console.log(email)
  console.log(password)
   
  const handleSubmit = () => {
     if (email === ""){
      setError("Email is required")
      return;
     }
     if (password === ""){
      setError("Password is required")
      return;
     }
     setError("")
     console.log("Validation passed")
  };
  return (
    <div className="login-container">  
      <div className="login-card">
      <AuthInput 
       label="Email"
       type="email"
       placeholder="Enter your email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       />
       <AuthInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleSubmit}>Login</button>
    </div>
    </div>
  )
}

export default Login;



