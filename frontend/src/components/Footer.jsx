import React from "react";
import "./Footer.css";
import pictohouse from "../assets/house-icon.png";
import pictosearch from "../assets/search-icon.png";
import pictoplus from "../assets/plus-icon.png";
import pictouser from "../assets/user-icon.png";

export default function Footer() {
  return (
    <footer>
      <div className="alignpictos">
        <button type="button" className="pictomenu">
          <img src={pictohouse} className="pictofooter" alt="pictofooter" />
        </button>
        <button type="button" className="pictomenu">
          <img src={pictosearch} className="pictofooter" alt="pictofooter" />
        </button>
        <button type="button" className="pictomenu">
          <img src={pictoplus} className="pictofooter" alt="pictofooter" />
        </button>
        <button type="button" className="pictomenu">
          <img src={pictouser} className="pictofooter" alt="pictofooter" />
        </button>
      </div>
    </footer>
  );
}