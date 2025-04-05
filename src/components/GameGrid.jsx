import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import GameCard from "./GameCard.jsx";
import Pagination from "./Pagination.jsx"; // ✅ Import pagination component
import "../styles/global.css";

const GameGrid = () => {
  const { selectedCategories, selectedTags, releaseYear } = useOutletContext();
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 9;
  const totalPages = 10; // ✅ Adjust as needed or fetch from API

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_RWAG_KEY;
    const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page=${currentPage}&page_size=${gamesPerPage}`;

    const fetchGames = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setGames(data.results || []);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [currentPage]);

  const filteredGames = games.filter((game) => {
    const matchesCategory = selectedCategories.length === 0 || game.genres?.some((g) => selectedCategories.includes(g.name));
    const matchesTags = selectedTags.length === 0 || game.tags?.some((t) => selectedTags.includes(t.name));
    const matchesYear = game.released && parseInt(game.released.split("-")[0]) >= releaseYear[0] && parseInt(game.released.split("-")[0]) <= releaseYear[1];

    return matchesCategory && matchesTags && matchesYear;
  });

  return (
    <div className="game-grid-container">
      <h2 className="discover-title">Discover Games</h2>

      <div className="game-grid">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p>No games found.</p>
        )}
      </div>

      {filteredGames.length > 0 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default GameGrid;
