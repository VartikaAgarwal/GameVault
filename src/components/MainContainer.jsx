import React from "react";
import GameGrid from "./GameGrid.jsx";
import "../styles/global.css";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="gamegrid-wrapper">
        <GameGrid />
      </div>
    </div>
  );
};

export default MainContainer;
