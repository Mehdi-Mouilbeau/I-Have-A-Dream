import React from "react";
import Partages from "@pages/Partages";
import Home from "@pages/Home";
import Annonce from "@pages/Annonce";
import Profil from "@pages/Profil";
import { Route, Routes } from "react-router-dom";

export default function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partages" element={<Partages />} />
        <Route path="/annonce" element={<Annonce />} />
        <Route path="/monprofil" element={<Profil />} />
      </Routes>
    </div>
  );
}
