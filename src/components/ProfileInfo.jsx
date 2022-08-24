import React from 'react';
import displayPicture from '../assets/dp.png';
import emailIcon from '../assets/Email-Icon.png';
import linkedInIcon from '../assets/LinkedIn-Icon.png';
import '../components/ProfileInfo.css'   

export default function ProfileInfo() {
    return (
      <div className="profile-info-container">
        <img className="profile-image" src={displayPicture}></img>
        <h2 className="profile-name">Laura Smith</h2>
        <h5 className="profile-designation">Frontend Developer</h5>
        <a className="profile-website" href='#'>laurasmith.website</a>
        <div className="profile-buttons">
          <button className="Email-btn">
            <img src={emailIcon} alt="" srcset="" />
            <span className="Email-btn-text">Email</span>
          </button>
          <button className="LinkedIn-btn">
            <img src={linkedInIcon} alt="" srcset="" />
            <span className="Email-btn-text">LinkedIn</span>
          </button>
        </div>
      </div>
    );
}