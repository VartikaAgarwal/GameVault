import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GameCard from "../components/GameCard.jsx";
import { Button } from "react-bootstrap";
import { removeBookmark } from "../redux/bookmarkSlice"; 
import "../styles/global.css";

const Library = () => {
  const favorites = useSelector((state) => state.bookmarks.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clearLibrary = () => {
    favorites.forEach((game) => dispatch(removeBookmark(game.id))); 
  };

  return (
    <div className="library-container">
      <h2 className="library-title">Your Favorite Games</h2>
      <div className="library-buttons">
        <Button onClick={() => navigate("/games")} className="add-more-btn">
          + Add More Games
        </Button>
        <Button onClick={clearLibrary} disabled={favorites.length === 0} className="clear-library-btn">
          - Clear Library
        </Button>
      </div>
      {favorites.length > 0 ? (
        <div className="game-grids">
          {favorites.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <p className="no-favorites">No favorite games added yet.</p>
      )}
    </div>
  );
};

export default Library;
