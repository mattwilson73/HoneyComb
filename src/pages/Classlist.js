import React from "react";
import "../styles/Classlist.css";
import BannerImage from "../assets/classListBG.svg";

function Classlist() {
  return (
    <div className="classlist">
      <div
        className="classlistTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
        ></div>
        <div className="classlistBottom">
          <h1> The Hive </h1>
          <p>
            Jimmy
          </p>
          <p>
            Corey
          </p>
          <p>
            Matt
          </p>
          <p>
            Chance
          </p>
          <p>
            Saif
          </p>
          <p>
            Unnati
          </p>
        </div>
      </div>
    );
  }

export default Classlist;
