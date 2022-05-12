/* eslint-disable react/prop-types */
import React from "react";
import "./User.css";
import userimg from "../assets/user.png";

export default function User() {
  return (
    <div>
      <h1>Mon compte</h1>
      <div className="encart-compte">
        <div className="encart-img">
          <img className="user-img" src={userimg} alt="user-img" />
        </div>
        <div className="user-infos">
          <p>Josiane</p>
          <p>Type de partage: Blabla</p>
          <p>Services proposées: Blabla</p>
          <p>Disponibilités: Blabla</p>
          <p>Lieu de rendez-vous: Blabla</p>
          <button
            type="button"
            onClick={() =>
              window.open(
                "mailto:your@email.address?subject=Demande de partage"
              )
            }
            value="Contact us"
          >
            ✉ Me contacter
          </button>
        </div>
      </div>
    </div>
  );
}
