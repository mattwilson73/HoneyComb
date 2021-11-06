import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/homeBG.svg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Honeycomb </h1>
        <p> Interactive Online Classroom</p>
        <Link to="/honeycomb">
          <button> demo </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
