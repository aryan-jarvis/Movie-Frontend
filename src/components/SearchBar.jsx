import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function SearchBar() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    {
      name: "Delhi",
      code: "DL",
    },
    {
      name: "Mumbai",
      code: "MU",
    },
    {
      name: "Chennai",
      code: "CN",
    },
    {
      name: "Kolkata",
      code: "KL",
    },
    {
      name: "Bokaro",
      code: "BK",
    },
  ];
  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select a City"
        className="w-full md:w-14rem"
        style={{ backgroundColor: "white" }}
      />
    </div>
  );
}
