import React from "react";
import "./../css/Footer.scss";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="title-container">
        <label className="footer-title">Questions? Contact us.</label>
      </div>
      <div className="content">
        <div className="middle box">
          <div>
            <a href="#">FAQ</a>
          </div>
          <div>
            <a href="#">Investor Relations</a>
          </div>
          <div>
            <a href="#">Ways to Watch</a>
          </div>
          <div>
            <a href="#">Only on Netflix</a>
          </div>
        </div>
        <div className="middle box">
          <div>
            <a href="#">Help Center</a>
          </div>
          <div>
            <a href="#">Jobs</a>
          </div>
          <div>
            <a href="#">Terms of Use</a>
          </div>
          <div>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="middle box">
          <div>
            <a href="#">Account</a>
          </div>
          <div>
            <a href="#">Redeem Gift Cards</a>
          </div>
          <div>
            <a href="#">Privacy</a>
          </div>
          <div>
            <a href="#">Speed Test</a>
          </div>
        </div>
        <div className="middle box">
          <div>
            <a href="#">Media Center</a>
          </div>
          <div>
            <a href="#">Buy Gift Cards</a>
          </div>
          <div>
            <a href="#">Cookie Preference</a>
          </div>
          <div>
            <a href="#">Legal Notices</a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <label className="footer-bottom">
          Netflix Phillipines - Cloned by Francis C. Ong
        </label>
      </div>
    </footer>
  );
};

export default Footer;
