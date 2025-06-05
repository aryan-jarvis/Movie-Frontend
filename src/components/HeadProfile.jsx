import SearchBar from "./SearchBar";

export default function HeadProfile() {
  return (
    <div
      className="Header Profile Section"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        className="Left-Profile-Section"
        style={{ display: "flex", gap: "3rem" }}
      >
        <img
          className="logo"
          src="../src/assets/images/logo.png"
          alt="Company Logo"
        />
        {/* <div>
          <SearchBar />
        </div> */}
      </div>
      <SearchBar />
      <div
        className="Right-Profile-Section"
        style={{ display: "flex", gap: "1rem" }}
      >
        <p>New Delhi</p>
        <img
          className="logo"
          src="../src/assets/images/user_logo.png"
          alt="User Profile Logo"
        />
        <p>Hi, Guest</p>
      </div>
    </div>
  );
}
