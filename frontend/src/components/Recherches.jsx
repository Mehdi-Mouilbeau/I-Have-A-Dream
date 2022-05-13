import React from "react";
import "./Recherches.css";
import paysage from "../assets/paysage.png";
import pot from "../assets/pot.png";
import gardening from "../assets/gardening.png";
import thread from "../assets/thread.png";
import champignons from "../assets/champignons.png";
import argile from "../assets/argile.png";
import energieverte from "../assets/energieverte.png";
import hygiene from "../assets/hygiene.png";
import reparation from "../assets/reparation.png";

export default function Recherches() {
  return (
    <section>
      <h2>Que recherchez-vous ?</h2>
      <div className="categories">
        <button type="button" className="recherchesbutton">
          <img className="recherchesicon" src={paysage} alt="explorericon" />
          Explorer la nature
        </button>
        <button type="button" className="recherchesbutton">
          <img className="recherchesicon" src={pot} alt="poticon" />
          Faire des bocaux
        </button>
        <button type="button" className="recherchesbutton">
          <img className="recherchesicon" src={gardening} alt="gardeningicon" />
          Gérer son jardin
        </button>
        <button type="button" className="recherchesbutton">
          <img className="recherchesicon" src={thread} alt="threadicon" />
          Textile
        </button>
        <button type="button" className="recherchesbutton">
          <img
            className="recherchesicon"
            src={champignons}
            alt="champignonsicon"
          />
          Cueillette
        </button>
        <button type="button" className="recherchesbutton">
          <img className="recherchesicon" src={argile} alt="argileicon" />
          Artisanat
        </button>
        <button type="button" className="recherchesbutton">
          <img
            className="recherchesicon"
            src={energieverte}
            alt="energieverteicon"
          />
          Energie Verte
        </button>
        <button type="button" className="recherchesbutton">
          <img className="recherchesicon" src={hygiene} alt="hygieneicon" />
          Hygiène
        </button>
        <button type="button" className="recherchesbutton">
          <img
            className="recherchesicon"
            src={reparation}
            alt="reparationicon"
          />
          Réparations
        </button>
      </div>
    </section>
  );
}
