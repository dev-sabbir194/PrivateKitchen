import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../../utils/firebase/firebase.init";

const NavBar = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [user] = useAuthState(getAuth(app));
  const photoURL = localStorage.getItem("photoUrl");



  const handleToggleClick = () => {
    setShowDetails(!showDetails);
  };

  const handleUserHover = (event) => {
    event.target.title = user.email;
  };


   const handleLogout = () => {
     auth.signOut();
     localStorage.removeItem("photoUrl"); // remove photo URL from local storage
   };

  return (
    <div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <h3 className="navbar-brand" id="navbar-brand">
              Private Kitchen
            </h3>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleToggleClick}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                showDetails ? "show" : ""
              }`}
              id="navbarNav"
            >
              <ul
                className="navbar-nav ms-auto me-auto mb-2 mb-lg-0"
                id="navLink"
              >
                <li className="nav-item">
                  <Link
                    to="/home"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/chef"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Chef
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/allrecipes"
                    activeClassName="active"
                    className="nav-link"
                  >
                    All Recipes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    activeClassName="active"
                    className="nav-link"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                {user ? (
                  <div
                    className="d-flex align-items-center"
                    onMouseOver={handleUserHover}
                  >
                    <div className="me-2">
                      <img
                        src={photoURL}
                        alt="user avatar"
                        style={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>

                    <div className="ms-3 ">
                      <LogoutButton />
                    </div>
                  </div>
                ) : (
                  <Link to="/login" activeClassName="active">
                    <button
                      className="btn btn-primary"
                      id="button"
                      type="button"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

const LogoutButton = () => {
  const auth = getAuth(app);

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <button
      className="btn btn-sm "  id="logout"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default NavBar;
