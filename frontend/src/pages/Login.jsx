import React from 'react'
import AuthInput from '../components/AuthInput';
import Button from "../components/Button";
import "../styles/login.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const [error, setError] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
     if (email === ""){
      setError("Email is required")
      return;
     }
     if (password === ""){
      setError("Password is required")
      return;
     }
     if (password.length < 6){
      setError("Password must be at least 6 characters");
      return;
     }
     setError("")
    alert("Login validation successful!")
  };
  return (
    <div className="login-container">  
      <div className="login-card">
        <h2>Login</h2>
        <p className="login-subtitle">
          Sign in to continue your AP ECET Preparation Portal
        </p>
        <form onSubmit={handleSubmit}>
      <AuthInput 
       label="Email"
       type="email"
       placeholder="Enter your email"
       value={email}
      onChange={(e) => {
      setEmail(e.target.value);
      setError("");
      }}
       />
       <AuthInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          setError("");
        }}
        />
        <div className="login-options">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        {error && <p className="error-message">{error}</p>}
        <Button 
        text="Login"
        type="submit"
        />
        <p className="register-link">

          New User? <Link to="/register">Register</Link>
        </p>
        </form>
    </div>
    </div>
  )
}

export default Login;



