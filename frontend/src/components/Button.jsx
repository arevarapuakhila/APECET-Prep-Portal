import React from 'react'
import "../styles/authButton.css";

const Button = ({ text , type="button", onClick }) => {
  return (
    <button 
        type={type} 
        className="btn"
        onClick={onClick}
        >
        {text}
    </button>
  )
}

export default Button;