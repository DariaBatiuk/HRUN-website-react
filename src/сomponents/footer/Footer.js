import React from "react";
import "./index.css";
import logo from "../../icons/Logo.png";
import fb from "../../icons/social/facebook.svg";
import inst from "../../icons/social/Group (1).svg";
import linkedin from "../../icons/social/Group (2).svg";
import { Link } from "react-router-dom"; // Импорт Link из react-router-dom

function Footer() {
  return (
    <footer>
      <div className="footer__item footer__item_social">
        <div className="footer__logo">
          <Link to="/">
            <img src={logo} alt="footer logo" className="footer__img" />
          </Link>
        </div>
        <div className="footer__social">
          <div className="footer__social_icon">
            <img src={fb} alt="facebook" className="footer__social_icon"/>
          </div>

          <div >
            <img src={inst} alt="instagram" className="footer__social_icon"/>
          </div>

          <div >
            <img src={linkedin} alt="linkedin" className="footer__social_icon"/>
          </div>
        </div>
        <div className="footer__copyrite">Copyright 2023. All rights reserved</div>
      </div>
      <div className="footer__item footer__item_newsletter">
        <h4 className="footer__item_news">Get our newsletter</h4>
        <div className="footer__input">
          <input
            required
            name="email"
            type="text"
            id="footer__input_email"
            placeholder="Your email address"
						className="p2"
          />
          {/* <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon/arrow-top-right">
              <path
                id="Vector"
                d="M31.6666 29.2502V8.8335M31.6666 8.8335H11.25M31.6666 8.8335L8.33331 32.1668"
                stroke="#182963"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg> */}

          <label htmlFor="footer__input_email"></label>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__heading">Company</div>
        <div className="footer__subheader">
          <div className="footer__subheader_item">Services</div>
          <div className="footer__subheader_item">About us</div>
          <div className="footer__subheader_item">Our work</div>
          <div className="footer__subheader_item">Blog</div>
        </div>
      </div>
      <div className="footer__item">
        <div className="footer__heading">Location</div>
        <div className="footer__subheader">
          <div className="footer__subheader_item">Moncton, NB, Canada</div>
          <div className="footer__subheader_item">
            Email: <br /> marketing@hrun.pro
          </div>
          <div className="footer__subheader_item">+1506 567 6777</div>
        </div>
      </div>{" "}
    </footer>
  );
}

export default Footer;
