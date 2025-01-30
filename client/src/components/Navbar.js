import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/setup-organization">Organization Setup</Link>
            </li>
            <li>
              <Link to="/integration-testing">Integration Testing</Link>
            </li>
            <li className="logout-container">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li className="login-link">
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
