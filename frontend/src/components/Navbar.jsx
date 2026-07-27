import  "../styles/navbar.css"
function Navbar() {
    return (
        <nav className="navbar">
                <div className="nav-container">
                 <div className="logo">
                      <h2>AP ECET Portal</h2>
                </div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Mock Tests</a></li>
                <li><a href="#">About</a></li>
            </ul>
                <button className="login-btn">
                 Login
                </button>
            </div>
        </nav>
    );
    
}

export default Navbar;