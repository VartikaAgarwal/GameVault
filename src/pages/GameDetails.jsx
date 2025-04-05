import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Global.css";

const GameDetails = () => {
  const { id } = useParams(); 
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_RWAG_KEY}`
        );
        setGame(response.data);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (!game) return <p>Loading...</p>;

  return (
    <div className="game-details">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} className="game-images" />
      <p>{game.description_raw}</p>
      <p><strong>Released:</strong> {game.released}</p>
      <p><strong>Rating:</strong> {game.rating}/10</p>

      <button onClick={() => window.history.back()} className="back-btn">Go Back</button>

    </div>
    
  );
};

export default GameDetails;
