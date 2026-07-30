import React, { useState } from 'react'
import "../styles/authInput.css"
import { FaEye , FaEyeSlash } from "react-icons/fa";

const AuthInput = ({ label, type , placeholder , value , onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="input-group">
        <label>{label}</label>
        <div className="input-wrapper">
        <input 
        type={
          type === "password"
          ?(showPassword ? "text": "password")
            :type
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
        {type === "password" &&(
          <button
          type="button"
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye /> }
            </button>
        )}
        </div>
    </div>
  )
}

export default AuthInput;