import React from "react";
import "../styles/Footer.css";
import githubIcon from '../assets/images/github-icon.png';
import linkedin from '../assets/images/linkedin-logo.png'
import twitter from '../assets/images/twiter-logo.png'
import mail from '../assets/images/mail-logo.png'
import whatsapp from '../assets/images/whatsapp-logo.png'


export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contact Me On</h2>
      <div className="social-icons">
        <a href="https://github.com/yogeshavadhut" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/yogesh-avadhut-7b7007211/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={mail} alt="twitter" />
        </a>
      </div>
      <p>Copyright © 2025</p>
    </footer>
  );
}
