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

export default function App() {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      {/* <Home_Page /> */}
      {/* <Movie_List_Page /> */}
      {/* <Movie_Description_Page /> */}
      {/* <Theatre_Selection_Page /> */}
      {/* <PostRating /> */}
      {/* <History_Page /> */}
      {/* <NoHistory /> */}
      <LoginPopUp />
      {/* <Payment_Summary_Page /> */}
      {/* <SearchBar /> */}
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
