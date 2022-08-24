import React from "react";
import "../components/ProfileFooter.css";
import TwitterIcon from "../assets/Twitter-Icon.png";
import FacebookIcon from "../assets/Facebook-Icon.png";
import InstaIcon from "../assets/Instagram-Icon.png";
import GithubIcon from "../assets/GitHub-Icon.png";

export default function ProfileAbout() {
  return (
    <div className="footer-container">
      <img className='social-icons' src={TwitterIcon} alt="" srcset="" />
      <img className='social-icons' src={FacebookIcon} alt="" srcset="" />
      <img className='social-icons' src={InstaIcon} alt="" srcset="" />
      <img className='social-icons' src={GithubIcon} alt="" srcset="" />
    </div>
  );
} 
