import { responsiveFontSizes } from "@mui/material";
import React from "react";
import "../App.css";

const containerStyle = {
  position: "relative",
  display: "inline-block",
};

const imageStyle = {
  display: "block",
  // width: "15rem",
  height: "auto",
  objectFit: "cover",
};

const textStyle = {
  position: "absolute",
  top: "15rem",
  left: "6rem",
  color: "white",
  // backgroundColor: "lightyellow",
  padding: "1rem",
  borderRadius: "1rem",
  fontWeight: "bold",
};

const buttonStyle = {
  fontSize: "1.6rem",
  position: "absolute",
  top: "34rem",
  left: "8rem",
  padding: "1rem",
  borderRadius: "0.8rem",
  fontWeight: "bold",
  backgroundColor: "#ff5295",
  color: "white",
  height: "5rem",
  width: "12rem",
};

const imgSel = {
  position: "absolute",
  bottom: "2rem",
  right: "30rem",
  padding: "1rem",
  display: "block",
  height: "18rem",
  width: "24rem",
  objectFit: "cover",
};

const img2Sel = {
  position: "absolute",
  bottom: "2rem",
  right: "16rem",
  padding: "1rem",
  display: "block",
  height: "12rem",
  width: "12rem",
  objectFit: "cover",
};

const img3Sel = {
  position: "absolute",
  bottom: "2rem",
  right: "2rem",
  padding: "1rem",
  display: "block",
  height: "12rem",
  width: "12rem",
  objectFit: "cover",
};

export default function SalaarSlider() {
  return (
    <div>
      <img
        src="../src/assets/images/salaar.png"
        alt="alt"
        style={{ width: "100%" }}
      />
      <div style={textStyle}>
        <div className="search-bar-main-container">
          <input type="search" id="site-search" name="q" />
        </div>
        <h1 style={{ fontSize: "5rem" }}>Redefined Movie Experience !</h1>
        <h2 style={{ fontSize: "2rem" }}>At PVR Superplex Mall of India</h2>
      </div>
      <button style={buttonStyle}>Book Now</button>
      <img src="../src/assets/images/salaar.png" alt="alt" style={imgSel} />
      <img src="../src/assets/images/sikandar.png" alt="alt" style={img2Sel} />
      <img src="../src/assets/images/moana.png" alt="alt" style={img3Sel} />
    </div>
  );
}
