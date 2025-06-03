import BookingSteps from "./BookingSteps";
import ComingSoon from "./ComingSoon";
import Footer from "./Footer";
import HeadProfile from "./HeadProfile";
import MovieCollection from "./MovieCollection";

export default function Home_Page() {
  return (
    <div style={{ padding: "1.5rem" }}>
      <HeadProfile />
      <br />
      <h2>Watch Latest Movie</h2>
      <MovieCollection />
      <br />
      <h2>Now Showing in Theatres</h2>
      <MovieCollection />
      <br />
      <BookingSteps />
      <br />
      <h2>Bollywood Trending</h2>
      <MovieCollection />
      <br />
      <br />
      <ComingSoon />
      <Footer />
    </div>
  );
}
