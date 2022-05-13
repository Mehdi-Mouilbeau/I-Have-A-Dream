import React, { useState } from "react";
import "./Recherches.css";
import UserDetail from "./UserDetail";
import data from "../assets/data";
import paysage from "../assets/paysage.png";
import pot from "../assets/pot.png";
import gardening from "../assets/gardening.png";
import thread from "../assets/thread.png";
import champignons from "../assets/champignons.png";
import argile from "../assets/argile.png";
import energieverte from "../assets/energieverte.png";
import hygiene from "../assets/hygiene.png";
import reparation from "../assets/reparation.png";
import ScrollButton from "./ScrollButton";

export default function Recherches() {
  const [filterPartage, setFilterPartage] = useState("");
  return (
    <section>
      <h2>Que recherchez-vous ?</h2>
      <p>
        Parcourez les différents catégories pour découvrir le greener avec qui
        vous allez partager
      </p>
      <div className="categories">
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Explorer la nature")}
        >
          <img className="recherchesicon" src={paysage} alt="explorericon" />
          Explorer la nature
        </button>
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Faire des bocaux")}
        >
          <img className="recherchesicon" src={pot} alt="poticon" />
          Faire des bocaux
        </button>
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Gérer un jardin")}
        >
          <img className="recherchesicon" src={gardening} alt="gardeningicon" />
          Gérer son jardin
        </button>
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Textile")}
        >
          <img className="recherchesicon" src={thread} alt="threadicon" />
          Textile
        </button>
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Cueillette")}
        >
          <img
            className="recherchesicon"
            src={champignons}
            alt="champignonsicon"
          />
          Cueillette
        </button>
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Artisanat")}
        >
          <img className="recherchesicon" src={argile} alt="argileicon" />
          Artisanat
        </button>
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Energie verte")}
        >
          <img
            className="recherchesicon"
            src={energieverte}
            alt="energieverteicon"
          />
          Energie Verte
        </button>
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Hygiène")}
        >
          <img className="recherchesicon" src={hygiene} alt="hygieneicon" />
          Hygiène
        </button>
        <button
          type="button"
          className="recherchesbutton"
          onClick={() => setFilterPartage("Réparation")}
        >
          <img
            className="recherchesicon"
            src={reparation}
            alt="reparationicon"
          />
          Réparations
        </button>
      </div>
      <div className="uers-list">
        {data
          .filter((user) => user.partage.includes(filterPartage))
          .map((user) => (
            <UserDetail
              url={user.url}
              nom={user.nom}
              partage={user.partage}
              service={user.service}
              disponibilité={user.disponibilité}
              lieu={user.lieu}
            />
          ))}
        <ScrollButton />
      </div>
    </section>
  );
}
