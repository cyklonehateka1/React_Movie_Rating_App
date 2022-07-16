import React from "react";
import "./Footer.scss";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-first">
        <h3 className="log">C.MOVIES</h3>
        <span>&copy;Copyright. All rights reserved</span>
      </div>
      <hr />
      <div className="socials">
        <div className="youtube">
          <FaYoutubeSquare className="youtube-icon" />
        </div>
        <div className="github">
          <FaGithub />
        </div>
        <div className="twitter">
          <FaTwitter />
        </div>
        <div className="linkedin">
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
