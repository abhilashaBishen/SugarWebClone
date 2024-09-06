import React from 'react';
import './Footer.css'; 

import '@fortawesome/fontawesome-free/css/all.min.css';



const Footer = () => {
  return (
    <footer id="footer">
      <img
        className="Logo"
        src="https://in.sugarcosmetics.com/Footer_sugar_icon.png"
        alt="footer-logo"
      />
      <div>
      <a href="https://www.facebook.com" className="fa fa-facebook-f" aria-label="Facebook"></a>
      <a href="https://twitter.com" className="fa fa-twitter" aria-label="Twitter"></a>
        <a href="#" className="fa fa-twitter" aria-label="Twitter"></a>
        <a href="#" className="fa fa-pinterest" aria-label="Pinterest"></a>
        <a href="#" className="fa fa-tumblr" aria-label="Tumblr"></a>
        <a href="#" className="fa fa-youtube" aria-label="YouTube"></a>
      </div>
      <div className="heading">
        <a href="#">Stores</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Returns</a>
        <a href="#">FAQs</a>
        <a href="#">About Us</a>
      </div>
      <div className="contact">
        <div>
          <h3>Call us at</h3>
          <p>1800-209-9933</p>
          <p>Monday to Friday 9 AM to 7 PM</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>hello@sugarcosmetics.com</p>
        </div>
        <div>
          <h3>Careers</h3>
          <p>We're hiring!</p>
        </div>
        <div>
          <h3>PRESS & MEDIA</h3>
          <p>pr@sugarcosmetics.com</p>
        </div>
        <div>
          <h3>INFLUENCER COLLAB</h3>
          <p>JOIN US</p>
        </div>
      </div>
      <hr />
      <h3 style={{ color: '#ffff', margin: '15px' }}>
        Copyright © 2024 SUGAR Cosmetics. All rights reserved.
      </h3>
    </footer>
  );
};

export default Footer;
