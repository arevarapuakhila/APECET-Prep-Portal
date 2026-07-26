import "../styles/footer.css"
function Footer() {
    return(
        <footer className="footer">
     <div className="footer-container">       
            <div className="footer-info">
                <h3>AP ECET Preparation Portal</h3>
                <p>
                    Helping diploma students prepare for AP ECET through
                    study materials, mock tests, and AI-powered learning
                </p>
            </div>
            <div className="quick-links">
                <h3>
                    Quick Links
                </h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Mock Tests</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="policies">
                <h3>Policies</h3>
                
                <ul>
                    <li>
                        Privacy Policy
                    </li>
                    <li>
                        Terms & Conditions
                    </li>
                </ul>
            </div>
    </div>

            <div className="copyright">
            <p>
                © 2026 AP ECET Preparation Portal.
                All Rights Reserved.
            </p>
            </div>
        </footer>
    );
}

export default Footer;