import { Route, Routes } from "react-router-dom";


import AllMeetupsPage from "./pages/AllMeetUps";
import NewMeetupsPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
