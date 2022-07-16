import React from "react";
import "./Footer.scss";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutubeSquare,
} from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section-first">
        <h3 className="log">C.MOVIES</h3>
        <span>&copy;Copyright. All rights reserved</span>
      </div>
      <hr />
      <div className="socials">
        <a
          href="https://www.youtube.com/channel/UCnbmkQFCaMTWNIooK9ezNJw"
          className="youtube"
        >
          <BsYoutube className="youtube-icon" />
        </a>
        <a href="https://www.github.com/cyklonehateka1" className="github">
          <FaGithub />
        </a>
        <a href="https://twitter.com/cyklonehateka" className="twitter">
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/emmanuel-hateka-01517b22b/"
          className="linkedin"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Footer;
