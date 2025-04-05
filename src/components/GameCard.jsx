import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { BsBookmark, BsBookmarkFill, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../redux/bookmarkSlice";
import "../styles/global.css";

const GameCard = ({ game }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks.favorites);
  const isBookmarked = bookmarks.some((fav) => fav.id === game.id);

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(game.id));
    } else {
      dispatch(addBookmark(game));
    }
  };
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} color="gold" size={14} />);
    }
    if (hasHalfStar) {
      stars.push(<BsStarHalf key="half" color="gold" size={14} />);
    }
    while (stars.length < 5) {
      stars.push(<BsStar key={`empty-${stars.length}`} color="gray" size={14} />);
    }
    return stars;
  };

  return (
    <Card className="game-card">
      <div className="game-image-container">
        <Card.Img variant="top" src={game.background_image} alt={game.name} className="game-image" />
        
        <div className="bookmark-icon" onClick={handleBookmark}>
          {isBookmarked ? <BsBookmarkFill size={24} color="white" /> : <BsBookmark size={24} />}
        </div>

        <div className="rating-box">
           <span className="rating-text">{game.rating?.toFixed(1)} / 10</span>
        </div>
      </div>
      
      <Card.Body>
        <Card.Title className="game-title">{game.name}
        </Card.Title>

        {renderStars(game.rating)}
        <div className="game-genres">
          {game.genres?.map((genre) => (
            <span key={genre.id} className="genre-pill">{genre.name}</span>
          ))}
        </div>
        <Card.Text className="release-date">Released: {game.released?.split("-")[0]}</Card.Text>

        <Link to={`/game/${game.id}`} className="view-details">View Details</Link>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
