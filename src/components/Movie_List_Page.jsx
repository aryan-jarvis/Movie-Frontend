import ComingSoon from "./ComingSoon";
import Footer from "./Footer";
import HeadProfile from "./HeadProfile";
import MovieCollection from "./MovieCollection";
import PrevNext from "./PrevNext";

export default function Movie_List_Page() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <HeadProfile />
      <br />
      <h2>Movies in Chandigarh</h2>
      <MovieCollection />
      <br />
      <MovieCollection />
      <br />
      <MovieCollection />
      <br />
      <MovieCollection />
      <br />
      <br />
      <PrevNext />
      <br />
      <br />
      <ComingSoon />
      <Footer />
    </div>
  );
}
