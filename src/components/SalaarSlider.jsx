// import { responsiveFontSizes } from "@mui/material";
// import React from "react";
// import "../App.css";

// const containerStyle = {
//   position: "relative",
//   display: "inline-block",
// };

// const imageStyle = {
//   display: "block",
//   // width: "15rem",
//   height: "auto",
//   objectFit: "cover",
// };

// const textStyle = {
//   position: "absolute",
//   top: "15rem",
//   left: "6rem",
//   color: "white",
//   // backgroundColor: "lightyellow",
//   padding: "1rem",
//   borderRadius: "1rem",
//   fontWeight: "bold",
// };

// const buttonStyle = {
//   fontSize: "1.6rem",
//   position: "absolute",
//   top: "34rem",
//   left: "8rem",
//   padding: "1rem",
//   borderRadius: "0.8rem",
//   fontWeight: "bold",
//   backgroundColor: "#ff5295",
//   color: "white",
//   height: "5rem",
//   width: "12rem",
// };

// const imgSel = {
//   position: "absolute",
//   bottom: "2rem",
//   right: "30rem",
//   padding: "1rem",
//   display: "block",
//   height: "18rem",
//   width: "24rem",
//   objectFit: "cover",
// };

// const img2Sel = {
//   position: "absolute",
//   bottom: "2rem",
//   right: "16rem",
//   padding: "1rem",
//   display: "block",
//   height: "12rem",
//   width: "12rem",
//   objectFit: "cover",
// };

// const img3Sel = {
//   position: "absolute",
//   bottom: "2rem",
//   right: "2rem",
//   padding: "1rem",
//   display: "block",
//   height: "12rem",
//   width: "12rem",
//   objectFit: "cover",
// };

// const searchStyle = {
//   display: "flex",
//   position: "absolute",
//   backgroundColor: "#ffffff",
//   height: "3rem",
//   width: "60rem",
//   top: "6rem",
//   right: "2rem",
//   borderBottomLeftRadius: "2rem",
// };

// export default function SalaarSlider() {
//   return (
//     <div>
//       <img
//         src="../src/assets/images/salaar.png"
//         alt="alt"
//         style={{ width: "100%" }}
//       />
//       <div className="search-bar-main-container" style={searchStyle}>
//         <input
//           type="search"
//           placeholder="Search"
//           // id="site-search"
//           // name="q"
//           style={{
//             width: "60rem",
//             padding: "1rem",
//             borderRadius: "1.6rem",
//           }}
//         />
//       </div>
//       <div style={textStyle}>
//         <h1 style={{ fontSize: "5rem" }}>Redefined Movie Experience !</h1>
//         <h2 style={{ fontSize: "2rem" }}>At PVR Superplex Mall of India</h2>
//       </div>
//       <button style={buttonStyle}>Book Now</button>
//       <img src="../src/assets/images/salaar.png" alt="alt" style={imgSel} />
//       <img src="../src/assets/images/sikandar.png" alt="alt" style={img2Sel} />
//       <img src="../src/assets/images/moana.png" alt="alt" style={img3Sel} />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "../App.css";

// import salaarImage from "../assets/images/salaar.png";
// import sikandarImage from "../assets/images/sikandar.png";
// import moanaImage from "../assets/images/moana.png";

// const textStyle = {
//   position: "absolute",
//   top: "15rem",
//   left: "6rem",
//   color: "white",
//   padding: "1rem",
//   borderRadius: "1rem",
//   fontWeight: "bold",
// };

// const buttonStyle = {
//   fontSize: "1.6rem",
//   position: "absolute",
//   top: "34rem",
//   left: "8rem",
//   padding: "1rem",
//   borderRadius: "0.8rem",
//   fontWeight: "bold",
//   backgroundColor: "#ff5295",
//   color: "white",
//   height: "5rem",
//   width: "12rem",
// };

// const imgThumb = {
//   position: "absolute",
//   bottom: "2rem",
//   padding: "1rem",
//   display: "block",
//   objectFit: "cover",
//   cursor: "pointer",
// };

// const searchStyle = {
//   display: "flex",
//   position: "absolute",
//   backgroundColor: "#ffffff",
//   height: "3rem",
//   width: "60rem",
//   top: "6rem",
//   right: "2rem",
//   borderBottomLeftRadius: "2rem",
// };

// export default function SalaarSlider() {
//   const [mainImage, setMainImage] = useState(salaarImage);
//   return (
//     <div>
//       <img
//         src={mainImage}
//         alt="Main Display"
//         style={{
//           overflow: "hidden",
//           maxHeight: "51.8rem",
//           width: "100%",
//           objectFit: "cover",
//         }}
//       />
//       <div className="search-bar-main-container" style={searchStyle}>
//         <input
//           type="search"
//           placeholder="Search"
//           style={{
//             width: "60rem",
//             padding: "1rem",
//             borderRadius: "1.6rem",
//           }}
//         />
//       </div>
//       <div style={textStyle}>
//         <h1 style={{ fontSize: "5rem" }}>Redefined Movie Experience !</h1>
//         <h2 style={{ fontSize: "2rem" }}>At PVR Superplex Mall of India</h2>
//       </div>
//       <button style={buttonStyle}>Book Now</button>
//       <img
//         src={salaarImage}
//         alt="Salaar"
//         style={{ ...imgThumb, right: "30rem", height: "18rem", width: "24rem" }}
//         onClick={() => setMainImage(salaarImage)}
//       />
//       <img
//         src={sikandarImage}
//         alt="Sikandar"
//         style={{ ...imgThumb, right: "16rem", height: "12rem", width: "12rem" }}
//         onClick={() => setMainImage(sikandarImage)}
//       />
//       <img
//         src={moanaImage}
//         alt="Moana"
//         style={{ ...imgThumb, right: "2rem", height: "12rem", width: "12rem" }}
//         onClick={() => setMainImage(moanaImage)}
//       />
//     </div>
//   );
// }

import React, { useState } from "react";
import "../App.css";

import salaarImage from "../assets/images/salaar.png";
import sikandarImage from "../assets/images/sikandar.png";
import moanaImage from "../assets/images/moana.png";

const textStyle = {
  position: "absolute",
  top: "15rem",
  left: "6rem",
  color: "white",
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

const searchStyle = {
  display: "flex",
  position: "absolute",
  backgroundColor: "#ffffff",
  height: "3rem",
  width: "60rem",
  top: "6rem",
  right: "2rem",
  borderBottomLeftRadius: "2rem",
};

const baseThumbStyle = {
  position: "absolute",
  bottom: "2rem",
  padding: "1rem",
  display: "block",
  objectFit: "cover",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  border: "2px solid transparent",
};

export default function SalaarSlider() {
  const [mainImage, setMainImage] = useState(salaarImage);

  const getImageStyle = (image, position) => {
    const isSelected = mainImage === image;
    return {
      ...baseThumbStyle,
      right: position,
      height: isSelected ? "20rem" : "12rem",
      width: isSelected ? "26rem" : "12rem",
      zIndex: isSelected ? 2 : 1,
    };
  };

  return (
    <div>
      <img
        src={mainImage}
        alt="Main"
        style={{
          overflow: "hidden",
          maxHeight: "51.8rem",
          width: "100%",
          objectFit: "cover",
        }}
      />

      <div className="search-bar-main-container" style={searchStyle}>
        <input
          type="search"
          placeholder="Search"
          style={{
            width: "60rem",
            padding: "1rem",
            borderRadius: "1.6rem",
          }}
        />
      </div>

      <div style={textStyle}>
        <h1 style={{ fontSize: "5rem" }}>Redefined Movie Experience !</h1>
        <h2 style={{ fontSize: "2rem" }}>At PVR Superplex Mall of India</h2>
      </div>
      <a href="http://localhost:5173/description">
        <button style={buttonStyle}>Book Now</button>
      </a>
      <img
        src={salaarImage}
        alt="Salaar"
        style={getImageStyle(salaarImage, "30rem")}
        onClick={() => setMainImage(salaarImage)}
      />
      <img
        src={sikandarImage}
        alt="Sikandar"
        style={getImageStyle(sikandarImage, "16rem")}
        onClick={() => setMainImage(sikandarImage)}
      />
      <img
        src={moanaImage}
        alt="Moana"
        style={getImageStyle(moanaImage, "2rem")}
        onClick={() => setMainImage(moanaImage)}
      />
    </div>
  );
}
