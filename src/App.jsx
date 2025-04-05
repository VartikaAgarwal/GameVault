import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import GameGrid from "./components/GameGrid.jsx";
import Library from "./pages/Library.jsx"; 
import GameDetails from "./pages/GameDetails.jsx";
import "./styles/global.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="games" element={<GameGrid />} />
        <Route path="library" element={<Library />} /> 
        <Route path="/game/:id" element={<GameDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
