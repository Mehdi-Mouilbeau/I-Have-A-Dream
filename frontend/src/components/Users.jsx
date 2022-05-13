import { React, useState } from "react";
import data from "../assets/data";
import UserDetail from "./UserDetail";

export default function Users() {
  const [filterPartage, setFilterPartage] = useState("");

  // console.warn(filterJardin);
  return (
    <div>
      <button type="button" onClick={() => setFilterPartage("Gérer un jardin")}>
        Gérer un jardin
      </button>

      <button
        type="button"
        onClick={() => setFilterPartage("Explorer la nature")}
      >
        Explorer la nature
      </button>
      <button type="button" onClick={() => setFilterPartage("Energie verte")}>
        Energie verte
      </button>
      <button type="button" onClick={() => setFilterPartage("Cueillette")}>
        Cueillette
      </button>
      <button type="button" onClick={() => setFilterPartage("Hygiène")}>
        Hygiène
      </button>
      <button
        type="button"
        onClick={() => setFilterPartage("Faire des bocaux")}
      >
        Faire des bocaux
      </button>
      <button type="button" onClick={() => setFilterPartage("Textile")}>
        Textile
      </button>

      <div className="uers-list">
        {data
          .filter((user) => user.partage.includes(filterPartage))
          .map((user) => (
            <UserDetail
              nom={user.nom}
              partage={user.partage}
              service={user.service}
              disponibilité={user.disponibilité}
              lieu={user.lieu}
            />
          ))}
        )
      </div>
    </div>
  );
}
