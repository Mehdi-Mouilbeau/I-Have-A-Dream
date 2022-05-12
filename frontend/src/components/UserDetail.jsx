/* eslint-disable react/prop-types */
import React from "react";
import "./User.css";
import userimg from "../assets/user.png";

export default function UserDetail({
  nom,
  partage,
  service,
  disponibilité,
  lieu,
}) {
  return (
    <div>
      <div className="encart-compte">
        <div className="encart-img">
          <img className="user-img" src={userimg} alt="user-img" />
        </div>
        <div className="user-infos">
          <p className="user-nom">{nom}</p>
          <p className="user-partage">{partage}</p>
          <p className="user-service">{service}</p>
          <p className="user-disponibilité">{disponibilité}</p>
          <p className="lieu">Lieu de rendez-vous: Blabla{lieu}</p>
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
