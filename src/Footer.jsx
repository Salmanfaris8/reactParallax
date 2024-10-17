import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container">
        
                <div className="footer-section about1">
                    <h2>About Us</h2>
                    <p>Welcome to the Call of Duty website, your ultimate source for everything related to the franchise! Explore news, game guides, and the latest community events.</p>
                </div>
        
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Game Modes</a></li>
                        <li><a href="#">Maps & Weapons</a></li>
                        <li><a href="#">Updates</a></li>
                        <li><a href="#">Esports</a></li>
                    </ul>
                </div>
        
                <div className="footer-section resources">
                    <h2>Resources</h2>
                    <ul>
                        <li><a href="#">Strategy Guides</a></li>
                        <li><a href="#">Patch Notes</a></li>
                        <li><a href="#">Gameplay Tips</a></li>
                        <li><a href="#">Merchandise</a></li>
                        <li><a href="#">Official Forums</a></li>
                    </ul>
                </div>
        
                <div className="footer-section newsletter">
                    <h2>Stay Updated</h2>
                    <p>Subscribe to our newsletter for the latest Call of Duty news, updates, and special offers.</p>
                    <form action="#">
                        <input type="email" placeholder="Enter your email" required/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
        
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                </div>
        
            </div>
        
            <div className="footer-bottom">
                <p>&copy; 2024 Call of Duty Fan Website. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
            </div>
        </div>
    </>
  )
}

export default Footer