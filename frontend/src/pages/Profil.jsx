import React from "react";
import UserDetail from "../components/UserDetail";

export default function Profil() {
  const myStyle = {
    color: "var(--green-color",
    padding: "10px",
    fontFamily: "var(--title-font)",
    textAlign: "center",
  };
  return (
    <div>
      <h1 style={myStyle}>Mon compte</h1>
      <UserDetail
        url="https://zupimages.net/up/22/19/meii.png"
        nom="André"
        partage={["Textile ", "- Artisanat"]}
        service={[
          "fabriquer ses propres vêtements ",
          "- fabriquer des paniers",
        ]}
        disponibilité={["semaine ", "- soirée"]}
        lieu="Rue de la grenouille"
      />
    </div>
  );
}
