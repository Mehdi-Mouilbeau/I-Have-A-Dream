import { React, useState } from "react";
import "../pages/Annonce.css";

export default function AnnonceForm() {
  const [title, setTitle] = useState("");
  const [share, setShare] = useState("");

  return (
    <div className="formContainer">
      <form>
        <label className="labelform" htmlFor="title">
          <h2 className="stringform">Titre de mon annonce</h2>
          <input
            className="inputform"
            id="name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <h2 className="stringform">Ce que je souhaite partager</h2>
        <select name="option" id="share-select">
          <option value="">--Choisir une catégorie de partage--</option>
          <option value="">Artisanat</option>
          <option value="">Cueillette</option>
          <option value="">Energie verte</option>
          <option value="">Explorer la nature</option>
          <option value="">Faire des bocaux</option>
          <option value="">Gérer un jardin</option>
          <option value="">Hygiène</option>
          <option value="">Textile</option>
          <option value="">Réparations</option>
        </select>
        <label className="labelform" htmlFor="share">
          <h2 className="stringform">Détail de mon annonce</h2>
          <input
            className="inputform"
            id="firstName"
            type="text"
            value={share}
            onChange={(e) => setShare(e.target.value)}
          />
        </label>
        <input className="inputformsubmit" type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
