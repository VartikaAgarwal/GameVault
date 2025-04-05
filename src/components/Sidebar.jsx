import React, { useState } from "react";
import "../styles/global.css";

const Sidebar = ({
  selectedCategories,
  setSelectedCategories,
  selectedTags,
  setSelectedTags,
  releaseYear,
  setReleaseYear,
  rating,
  setRating,
}) => {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreTags, setShowMoreTags] = useState(false);

  const categories = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
  ];
  const tags = [
    "Singleplayer",
    "Steam Achievements",
    "Multiplayer",
    "Full Controller Support",
    "Steam Cloud",
    "Atmospheric",
  ];

  const handleCheckboxChange = (list, setList, item) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const resetFilters = () => {
    setReleaseYear([1990, 2025]);
    setRating(0);
    setSelectedCategories([]);
    setSelectedTags([]);
  };

  const [startYear, endYear] = releaseYear || [1990, 2025];

  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Filters</h3>

      <div className="filter-section">
        <h4 className="filter-heading">Categories</h4>
        <ul className="filter-list">
          {categories
            .slice(0, showMoreCategories ? categories.length : 4)
            .map((category) => (
              <li key={category}>
                <label>
                  <input
                    type="checkbox"
                    checked={(selectedCategories || []).includes(category)}
                    onChange={() =>
                      handleCheckboxChange(
                        selectedCategories,
                        setSelectedCategories,
                        category
                      )
                    }
                  />{" "}
                  {category}
                </label>
              </li>
            ))}
        </ul>
        <a
          onClick={() => setShowMoreCategories(!showMoreCategories)}
          className="show-more-link"
        >
          {showMoreCategories ? "Show less" : "Show more"}
        </a>
      </div>

      <div className="filter-section">
        <h4 className="filter-heading">Tags</h4>
        <ul className="filter-list">
          {tags.slice(0, showMoreTags ? tags.length : 3).map((tag) => (
            <li key={tag}>
              <label>
                <input
                  type="checkbox"
                  checked={(selectedTags || []).includes(tag)}
                  onChange={() =>
                    handleCheckboxChange(selectedTags, setSelectedTags, tag)
                  }
                />{" "}
                {tag}
              </label>
            </li>
          ))}
        </ul>
        <a
          onClick={() => setShowMoreTags(!showMoreTags)}
          className="show-more-link"
        >
          {showMoreTags ? "Show less" : "Show more"}
        </a>
      </div>

      <div className="filter-section">
        <h4 className="filter-heading">Release Year</h4>
        <p className="release-year-range">{startYear} - {endYear}</p>
        <input
          type="range"
          min="1990"
          max="2025"
          value={startYear}
          onChange={(e) =>
            setReleaseYear([parseInt(e.target.value), endYear])
          }
          className="slider"
        />
        <input
          type="range"
          min="1990"
          max="2025"
          value={endYear}
          onChange={(e) =>
            setReleaseYear([startYear, parseInt(e.target.value)])
          }
          className="slider"
        />
      </div>

      <div className="filter-section">
        <h4 className="filter-heading">Minimum Rating</h4>
        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star-icon ${rating >= value ? "active" : ""}`}
              onClick={() => handleRatingClick(value)}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="filter-actions">
        <button className="reset-filters" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
