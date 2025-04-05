import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { useSelector } from "react-redux";
import "../styles/global.css";

const Navigation = () => {
  const bookmarkCount = useSelector(
    (state) => state.bookmarks.favorites.length
  );

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="d-flex justify-content-between align-items-center w-100 px-3"/>
        <div>
          <Navbar.Brand as={Link} to="/" className="navbar-brand me-0 ms-2">
            <IoLogoGameControllerB className="game-icon" />
            <span className="game-text">Game</span>
            <span className="vault-text">Vault</span>
          </Navbar.Brand>
        </div>
        <div className="flex-grow-1 d-flex justify-content-center">
          <Form className="search-bar">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search games..."
                className="search-input"
              />
              <Button className="search-button">
                <FaSearch size={16} />
              </Button>
            </div>
          </Form>
        </div>
        <div className="d-flex align-items-center">
          <Nav className="right-buttons d-flex align-items-center">
            <Nav.Link as={Link} to="/library" className="library-btn">
              <BsBookmark className="library-icon" size={16} />
              <span className="library-text">Library</span>
              {bookmarkCount > 0 && (
                <span className="bookmark-count">{bookmarkCount}</span>
              )}
            </Nav.Link>

            <div className="user-button-container ms-3">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="signin-btn">Sign In</button>
                </SignInButton>
              </SignedOut>
            </div>
          </Nav>
        </div>
    </Navbar>
  );
};

export default Navigation;
