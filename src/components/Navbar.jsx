import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useAuthContext } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuthContext();
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/news" className="nav-link">
            News
          </Link>
        </li>
        <li className="nav-item">
          {user ? (
            <Link className="nav-title" to="/profile">
              {user.displayName}
            </Link>
          ) : (
            <Link className="nav-title" to="/login">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
