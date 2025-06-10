import { useState } from "react";
import axios from "axios";

const API = "http://localhost:8080";

export default function LoginPopUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  // const [profile, setProfile] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleRegister = async () => {
    const res = await axios.post(`${API}/register`, { username, password });
    setToken(res.data.token);
  };

  const handleLogin = async () => {
    const res = await axios.post(`${API}/login`, { username, password });
    setToken(res.data.token);
  };

  // const fetchProfile = async () => {
  //   const res = await axios.get(`${API}/api/profile`, {
  //     headers: { Authorization: token },
  //   });
  //   setProfile(res.data.user);
  // };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9, // behind the popup
  };

  const containerStyle = {
    position: "fixed",
    top: "9rem",
    left: "calc(50% - 20rem)",
    width: "40rem",
    height: "40rem",
    backgroundColor: "#fffffa",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#333",
  };

  const inputStyle = {
    margin: "10px",
    padding: "10px",
    fontSize: "16px",
    width: "200px",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#FF5295",
    color: "white",
    border: "none",
    borderRadius: "4px",
  };

  if (!isOpen) return null;

  return (
    <>
      <div style={overlayStyle} />
      <div style={containerStyle}>
        <button onClick={() => setIsOpen(false)} style={closeButtonStyle}>
          &times;
        </button>
        <h1>Welcome 👋</h1>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <div style={{ display: "flex" }}>
          <button onClick={handleRegister} style={buttonStyle}>
            Register
          </button>
          <button onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
