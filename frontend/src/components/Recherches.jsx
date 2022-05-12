import React from "react";
import "./Recherches.css";

export default function Recherches() {
  return (
    <div>
      <h2>Que recherchez-vous ?</h2>
      <div className="categories">
        <div className="explorer">Explorer la nature</div>
        <div className="bocaux">Faire des bocaux</div>
        <div className="jardin">Gérer son jardin</div>
        <div className="textile">Textile</div>
        <div className="cueillette">Cueillette</div>
        <div className="artisanat">Artisanat</div>
        <div className="energie">Energie Verte</div>
        <div className="hygiene">Hygiène</div>
        <div className="reparations">Réparations</div>
      </div>
    </div>
  );
}
