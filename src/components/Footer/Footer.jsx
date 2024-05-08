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
      <small> &copy; {copyrightYear} Kartik Shettar </small>
      <div className="social-links">
        <Link to="https://www.instagram.com/kartik_shettar_" target="_blank">
          <BsInstagram />
        </Link>
        <Link to="https://github.com/kartik-fsd" target="_blank">
          <ImGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/kartik-shettar-dev"
          target="_blank"
        >
          <SiLinkedin />
        </Link>
      </div>
    </div>
  );
};
