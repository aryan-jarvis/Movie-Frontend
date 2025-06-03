export default function AzaadReviews() {
  return (
    <div>
      <div className="rating and button" style={{ display: "flex" }}>
        <div>
          <h2>4.2 ★★★★☆</h2>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#FF5295",
              color: "white",
              border: "#FF5295",
            }}
          >
            Rate Now
          </button>
        </div>
      </div>
      <div className="reviews collection"></div>
    </div>
  );
}
