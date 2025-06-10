// import { useState } from "react";
// import { Dropdown } from "primereact/dropdown";

// export default function SearchBar() {
//   const [selectedCity, setSelectedCity] = useState(null);
//   const cities = [
//     {
//       name: "Delhi",
//       code: "DL",
//     },
//     {
//       name: "Mumbai",
//       code: "MU",
//     },
//     {
//       name: "Chennai",
//       code: "CN",
//     },
//     {
//       name: "Kolkata",
//       code: "KL",
//     },
//     {
//       name: "Bokaro",
//       code: "BK",
//     },
//   ];
//   return (
//     <div className="card flex justify-content-center">
//       <Dropdown
//         value={selectedCity}
//         onChange={(e) => setSelectedCity(e.value)}
//         options={cities}
//         optionLabel="name"
//         placeholder="Select a City"
//         className="w-full md:w-14rem"
//         style={{ backgroundColor: "white" }}
//       />
//     </div>
//   );
// }

// import { useState } from "react";
// import { Dropdown } from "primereact/dropdown";

// export default function SearchBar() {
//   const [selectedCity, setSelectedCity] = useState(null);
//   const cities = [
//     { name: "Delhi", code: "DL" },
//     { name: "Mumbai", code: "MU" },
//     { name: "Chennai", code: "CN" },
//     { name: "Kolkata", code: "KL" },
//     { name: "Bokaro", code: "BK" },
//   ];

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     padding: "1rem",
//     backgroundColor: "#f0f0f0",
//     borderRadius: "8px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   };

//   const dropdownStyle = {
//     backgroundColor: "white",
//     borderRadius: "4px",
//     fontSize: "1rem",
//     width: "100%",
//     maxWidth: "14rem",
//   };

//   // Custom render for dropdown items
//   const cityItemTemplate = (option) => {
//     return (
//       <div
//         style={{
//           padding: "8px 12px",
//           cursor: "pointer",
//           fontWeight: "500",
//           color: "#333",
//           borderBottom: "1px solid #eee",
//           backgroundColor: "#fff",
//         }}
//         // To add hover effect, we need CSS, but we can also do inline by using event handlers (not ideal)
//       >
//         {option.name}
//       </div>
//     );
//   };

//   return (
//     <div style={containerStyle}>
//       <Dropdown
//         value={selectedCity}
//         onChange={(e) => setSelectedCity(e.value)}
//         options={cities}
//         optionLabel="name"
//         placeholder="Select a City"
//         className="w-full md:w-14rem"
//         style={dropdownStyle}
//         itemTemplate={cityItemTemplate}
//       />
//     </div>
//   );
// }

import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function SearchDropDown() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "Delhi", code: "DL" },
    { name: "Mumbai", code: "MU" },
    { name: "Chennai", code: "CN" },
    { name: "Kolkata", code: "KL" },
    { name: "Bokaro", code: "BK" },
  ];

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const dropdownStyle = {
    backgroundColor: "white",
    borderRadius: "4px",
    fontSize: "1rem",
    width: "100%",
    maxWidth: "14rem",
  };

  const cityItemTemplate = (option) => {
    return <div className="custom-dropdown-item">{option.name}</div>;
  };

  return (
    <>
      <style>{`
        .custom-dropdown-item {
          padding: 8px 12px;
          cursor: pointer;
          font-weight: 500;
          color: #333;
          border-bottom: 1px solid #eee;
          background-color: #fff;
          transition: background-color 0.2s ease;
        }
        .custom-dropdown-item:hover {
          background-color: #f5f5f5;
        }
      `}</style>
      <div style={containerStyle}>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          placeholder="Select a City"
          className="w-full md:w-14rem"
          style={dropdownStyle}
          itemTemplate={cityItemTemplate}
        />
      </div>
    </>
  );
}
