import React from "react";
import "../components/ProfileMainComponent.css";

export default function ProfileAbout(props) {
  return (
    <div className="profile-main-container">
      <h3 className="profile-main-heading">{props.title}</h3>
      <p className="profile-main-description">
        {props.description}
      </p>
    </div>
  );
}
