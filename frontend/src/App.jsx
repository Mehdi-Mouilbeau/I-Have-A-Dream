import React from "react";
import Body from "@pages/Body";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Video from "@components/video";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Video />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
