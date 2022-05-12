import React from "react";
import AnnonceForm from "../components/AnnonceForm";
import Navbar from "../components/Navbar";

export default function Annonce() {
  return (
    <div>
      <Navbar />
      Déposer une annonce
      <div className="AdForm">
        <p>Petit texte expliquant le dépôt annonce</p>
        <AnnonceForm />
      </div>
    </div>
  );
}
