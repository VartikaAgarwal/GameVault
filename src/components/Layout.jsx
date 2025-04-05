import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import Navigation from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import "../styles/global.css";

const Layout = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [releaseYear, setReleaseYear] = useState([1990, 2025]);
  const [rating, setRating] = useState(0);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="app-container">
      <div className="mobile-icons">
        <span className="icon" onClick={() => setShowNavbar(prev => !prev)}>
          <IoMdMenu />
        </span>
        <span className="icon" onClick={() => setShowSidebar(prev => !prev)}>
          <FaFilter />
        </span>
      </div>

      {showNavbar && (
        <div className="mobile-navbar">
          <Navigation
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
      )}

      <div className="desktop-navbar">
        <Navigation
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>
      <div className="main-content">
        <div className={`sidebar-wrapper ${showSidebar ? "open" : ""}`}>
          <Sidebar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            releaseYear={releaseYear}
            setReleaseYear={setReleaseYear}
            rating={rating}
            setRating={setRating}
          />
        </div>
        <div className="page-content">
          <Outlet
            context={{
              selectedCategories,
              selectedTags,
              releaseYear,
              rating,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
