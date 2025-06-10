export default function AzaadReviews() {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <div
        className="rating and button"
        style={{ display: "flex", gap: "92rem" }}
      >
        <div>
          <h2>4.2 ★★★★☆</h2>
        </div>
        <div>
          <button
            style={{
              // backgroundColor: "#FF5295",
              // color: "white",
              // border: "#FF5295",
              padding: "10px 20px",
              backgroundColor: "#ff5295",
              color: "white",
              fontSize: 16,
              border: "none",
              borderRadius: "0.35rem",
              cursor: "pointer",
              // alignSelf: "flex-start",
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
