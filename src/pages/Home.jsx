import React from "react";
import Sidebar from "../components/Sidebar";
import GameGrid from "../components/GameGrid";
import "../styles/global.css";

const Home = () => {
  return (
    <div className="main-container">
      <div className="gamegrid-wrapper">
        <GameGrid />
      </div>
    </div>
  );
};

export default Home;
