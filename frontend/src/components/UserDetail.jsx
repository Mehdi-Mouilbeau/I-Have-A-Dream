/* eslint-disable react/prop-types */
import React from "react";
import "./User.css";

export default function UserDetail({
  nom,
  partage,
  service,
  disponibilité,
  lieu,
  url,
}) {
  return (
    <div>
      <div className="encart-compte">
        <div className="encart-img">
          <img className="user-img" src={url} alt="user-img" />
        </div>
        <div className="user-infos">
          <p className="user-nom">{nom}</p>
          <p className="user-partage">{partage}</p>
          <p className="user-service">{service}</p>
          <p className="user-disponibilité">{disponibilité}</p>
          <p className="lieu">Lieu de rendez-vous : {lieu}</p>
        </div>
        <div className="alignbutton">
          <button
            className="buttonsubmit"
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
