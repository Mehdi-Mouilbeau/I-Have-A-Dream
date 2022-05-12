import React from "react";

export default function AnnonceForm() {
  return (
    <div>
      <label className="labelform" htmlFor="name">
        <h2 className="stringform">Nom :</h2>
        {/* <input
            className="inputform"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> */}
      </label>
    </div>
  );
}
