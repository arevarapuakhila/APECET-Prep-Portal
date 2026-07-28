import  "../styles/navbar.css"
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
                <div className="nav-container">
                 <div className="logo">
                      <h2>AP ECET Portal</h2>
                </div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/resources">Resources </NavLink></li>
                <li><NavLink to="/mocktests">Mock Tests </NavLink></li>
                <li><NavLink to="/about">About </NavLink></li>
            </ul>
            <NavLink to="/login">
                <button className="login-btn">
                 Login
                </button>
            </NavLink>
            </div>
        </nav>
    );
    
}

export default Navbar;