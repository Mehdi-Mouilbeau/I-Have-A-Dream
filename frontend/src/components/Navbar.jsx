import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <h1 className="title">
        {" "}
        I have a <span class="green">green</span> !{" "}
      </h1>
    </div>
  );
}
