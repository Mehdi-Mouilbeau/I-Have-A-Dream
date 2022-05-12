import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Partages from "@pages/Partages";
import Home from "@pages/Home";
import Annonce from "@pages/Annonce";
import Profil from "@pages/Profil";


export default function Body() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="/partages" element={<Partages />} />
        <Route path="/annonce" element={<Annonce />} />
        <Route path="/monprofil" element={<Profil />} />
      </BrowserRouter>
    </div>
  );
}
