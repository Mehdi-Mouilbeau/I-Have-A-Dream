import React from "react";
import UserDetail from "../components/UserDetail";

export default function Profil() {
  return (
    <div>
      <h1>Mon compte</h1>
      <UserDetail
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
