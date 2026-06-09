import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h4>UrbanTech</h4>
          <p>Premium electronics store since 2020.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>📘</span> <span>🐦</span> <span>📷</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 UrbanTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;