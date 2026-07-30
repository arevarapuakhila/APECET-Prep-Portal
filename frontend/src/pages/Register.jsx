import React, { useState } from 'react'
import { Link } from "react-router-dom"
import AuthInput from "../components/AuthInput";
import Button from "../components/Button";
import "../styles/register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] =useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(name=== ""){
      setError("Full name is required");
      return;
    }
    if (email === ""){
      setError("Email is required");
      return;
    }
    if (password === ""){
      setError("Password is required");
      return;
    }
    if(confirmPassword === ""){
      setError("Confirm password is required");
      return;
    }
    if(password !== confirmPassword){
      setError("Passwords do not match");
      return;
    }
    setError("");
      console.log("Validation passed");
    
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>
        <p className="register-subtitle">
          Create your account to access the AP ECET Preparation Portal
        </p>
        <form onSubmit={handleSubmit}>
          <AuthInput 
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
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
             <AuthInput 
             label="Confirm Password"
             type="password"
             placeholder="Enter Confirm Password"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
             />
            {error && <p className="error-message">{error}</p>}
            <Button 
            text="Register"
            type="submit"
            />
            <p className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
      </div>

    </div>
  )
}

export default Register;