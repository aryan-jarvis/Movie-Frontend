import React from "react";
import TextField from "@mui/material/TextField";
import List from "./List";

export default function SearchBar() {
  return (
    <div className="search">
      <TextField
        id="outlined-basic"
        // onChange={inputHandler}
        variant="outlined"
        fullWidth
        label="Find showtimes by Movie, Theatre, Date, etc."
      />
    </div>
  );
}
