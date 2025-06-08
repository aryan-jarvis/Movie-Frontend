import { Route, Routes } from "react-router-dom";
import History_Page from "./components/History_Page";
import Home_Page from "./components/Home_Page";
import LoginPopUp from "./components/LoginPopUp";
import Movie_Description_Page from "./components/Movie_Description_Page";
import Movie_List_Page from "./components/Movie_List_Page";
import NoHistory from "./components/NoHistory";
import Payment_Summary_Page from "./components/Payment_Summary_Page";
import PostRating from "./components/PostRating";
import SearchBar from "./components/SearchBar";
import Theatre_Selection_Page from "./components/Theatre_Selection_Page";
import Seatbooking from "./components/seat_booking/Seatbooking";

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {/* <Home_Page /> */}
      {/* <Movie_List_Page /> */}
      {/* <Movie_Description_Page /> */}
      {/* <Theatre_Selection_Page /> */}
      {/* <PostRating /> */}
      {/* <History_Page /> */}
      {/* <NoHistory /> */}
      {/* <LoginPopUp /> */}
      {/* <Payment_Summary_Page /> */}
      {/* <SearchBar /> */}
      {/* <Seatbooking /> */}
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home_Page />} />
//         <Route path="/movies" element={<Movie_List_Page />} />
//       </Routes>
//       {/* <Home_Page /> */}
//     </div>
//   );
// }

// import { useState } from "react";
// import axios from "axios";

// const API = "http://localhost:8080";

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [token, setToken] = useState("");
//   const [profile, setProfile] = useState("");

//   const handleRegister = async () => {
//     const res = await axios.post(`${API}/register`, { username, password });
//     setToken(res.data.token);
//   };

//   const handleLogin = async () => {
//     const res = await axios.post(`${API}/login`, { username, password });
//     setToken(res.data.token);
//   };

//   const fetchProfile = async () => {
//     const res = await axios.get(`${API}/api/profile`, {
//       headers: { Authorization: token },
//     });
//     setProfile(res.data.user);
//   };

//   return (
//     <div>
//       <h1>JWT Auth</h1>
//       <input
//         placeholder="username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         placeholder="password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={fetchProfile}>Fetch Profile</button>
//       <p>Token: {token}</p>
//       <p>Profile: {profile}</p>
//     </div>
//   );
// }

// export default App;
