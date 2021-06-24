import React from "react";
import TokenService from "../services/token-service";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
    window.location = "/";
  };
  const loginName = () => {
    return `${TokenService.getUserName("userName")}`;
  };
  function renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link to="/dashboard" className="nav-link-home" id="home">
          Dashboard
        </Link>
        <div className="Header__right">
          <Link className="nav-link-name">Hello {loginName()}!</Link>
          <Link to="/new-record" className="nav-link">
            Create a new Record
          </Link>

          <Link to="/tracker" className="nav-link">
            Display Records
          </Link>
          <Link exact to="/" className="nav-link" onClick={handleLogoutClick}>
            Logout
          </Link>
        </div>
      </div>
    );
  }
  function renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link exact to="/" className="nav-link-home" id="home">
          Migraine Tracker
        </Link>

        <div className="Header__right">
          <Link className="nav-link signup" to="/signup">
            Sign up
          </Link>

          <Link className="nav-link login" to="/login">
            Log in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <nav className="nav" id="nav">
      {TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()}
    </nav>
  );
};

export default Navbar;
