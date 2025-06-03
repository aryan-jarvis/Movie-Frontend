import React from "react";
import HeadProfile from "./HeadProfile";
import Azaad from "./Azaad";
import MovieCollection from "./MovieCollection";
import Footer from "./Footer";
import AzaadReviews from "./AzaadReviews";

export default function Movie_Description_Page() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <HeadProfile />
      <p>Home / Movie</p>
      <Azaad />
      <h2>Ratings and Reviews</h2>
      <AzaadReviews />
      <h2>You might also like</h2>
      <MovieCollection />
      <Footer />
    </div>
  );
}
