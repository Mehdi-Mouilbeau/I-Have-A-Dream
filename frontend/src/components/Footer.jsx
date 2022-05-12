import React from "react";
import "./Footer.css";
import pictohouse from "../assets/house-icon.png";
import pictosearch from "../assets/search-icon.png";
import pictoplus from "../assets/plus-icon.png";
import pictouser from "../assets/user-icon.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="alignpictos"><NavLink to="/">
        <button type="button" className="pictomenu">
          <img src={pictohouse} className="pictofooter" alt="pictofooter" />
        </button></NavLink>
        <NavLink to="/partages"><button type="button" className="pictomenu">
          <img src={pictosearch} className="pictofooter" alt="pictofooter" />
        </button></NavLink>
        <NavLink to="/annonce"><button type="button" className="pictomenu">
          <img src={pictoplus} className="pictofooter" alt="pictofooter" />
        </button></NavLink>
        <NavLink to="/monprofil"><button type="button" className="pictomenu">
          <img src={pictouser} className="pictofooter" alt="pictofooter" />
        </button></NavLink>
      </div>
    </footer>
  );
}
