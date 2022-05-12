import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        </Link>
        <Link to="/"><h1 className="title">
          {" "}
          I have a <span className="green">green</span> !{" "}
        </h1>
        </Link>
    </div>
  );
}
