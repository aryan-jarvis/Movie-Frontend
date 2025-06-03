import MovieCard from "./MovieCard";

export default function MovieCollection() {
  return (
    <div style={{ display: "flex", gap: "4rem" }}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
