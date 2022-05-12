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
    <section1>
      <h2>Que recherchez-vous ?</h2>
      <section2 className="categories">
        <button type="button" className="recherchesbutton">
          <img className="explorericon" src={paysage} alt="explorericon" />
          Explorer la nature
        </button>
        <button type="button" className="recherchesbutton">
          <img className="poticon" src={pot} alt="poticon" />
          Faire des bocaux
        </button>
        <button type="button" className="recherchesbutton">
          <img className="gardeningicon" src={gardening} alt="gardeningicon" />
          Gérer son jardin
        </button>
        <button type="button" className="recherchesbutton">
          <img className="threadeicon" src={thread} alt="threadicon" />
          Textile
        </button>
        <button type="button" className="recherchesbutton">
          <img
            className="champignonsicon"
            src={champignons}
            alt="champignonsicon"
          />
          Cueillette
        </button>
        <button type="button" className="recherchesbutton">
          <img className="argileicon" src={argile} alt="argileicon" />
          Artisanat
        </button>
        <button type="button" className="recherchesbutton">
          <img
            className="energieverteicon"
            src={energieverte}
            alt="energieverteicon"
          />
          Energie Verte
        </button>
        <button type="button" className="recherchesbutton">
          <img className="hygieneicon" src={hygiene} alt="hygieneicon" />
          Hygiène
        </button>
        <button type="button" className="recherchesbutton">
          <img
            className="reparationicon"
            src={reparation}
            alt="reparationicon"
          />
          Réparations
        </button>
      </section2>
    </section1>
  );
}
