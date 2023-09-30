// import React from 'react'

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>

              <li>
                <a href="#">booking status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Lorem opsium</h4>
            <ul>
              <li>
                <a href="#">Demo 1</a>
              </li>
              <li>
                <a href="#">Demo 2</a>
              </li>
              <li>
                <a href="#">Demo 3</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="facebook-f"></i>
              </a>
              <a href="#">
                <i className="twitter"></i>
              </a>
              <a href="#">
                <i className="instagram"></i>
              </a>
              <a href="#">
                <i className="linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
