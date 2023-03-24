import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import logo from "../logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <img className="f-logo" src={logo} alt="logo" />
          <p className="f-text">
            The Sling Burn Project. <br />1 token sells trigger the burn
            mechanism.{" "}
          </p>
        </div>

        <div className="f-text">
          <h4>Utilities</h4>
          <ul>
            <li>Staking</li>
            <li>Burn Dashboard</li>
          </ul>
        </div>

        <div className="f-text">
          <h4>Information</h4>
          <div className="social">
            <a href="http://t.me/slingclassic">
              <FaTelegram size={35} />
            </a>
            <a href="https://twitter.com/SlingClassic">
              <FaTwitter size={35} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
