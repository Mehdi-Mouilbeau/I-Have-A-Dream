import React from "react";
import AnnonceForm from "../components/AnnonceForm";
import "./Annonce.css";

export default function Annonce() {
  return (
    <div>
      Déposer une annonce
      <div className="AdForm">
        <h1>Petit texte expliquant le dépôt annonce</h1>
        <AnnonceForm />
      </div>
    </div>
  );
}
