import React from "react";
import "./Footer.css";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <div className="footer">
      <small> &copy; {copyrightYear} Sandesh HR </small>
      <div className="social-links">
        <Link to="https://www.instagram.com/sandesh_3_3_4/" target="_blank">
          <BsInstagram />
        </Link>
        <Link to="https://github.com/sandy334" target="_blank">
          <ImGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/sandesh-hr-146886191/"
          target="_blank"
        >
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};
