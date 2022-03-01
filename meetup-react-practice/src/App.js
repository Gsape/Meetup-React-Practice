import { Route, Routes } from "react-router-dom";


import AllMeetupsPage from "./pages/AllMeetUps";
import NewMeetupsPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
