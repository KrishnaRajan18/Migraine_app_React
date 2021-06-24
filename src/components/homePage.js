import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import brain from "../images/Migraine_headaches.png";

const homePage = () => {
  return (
    <div>
      <div className="container">
        <img id="brain-img" src={brain} alt="brain" style={{ opacity: 0.2 }} />
        <div className="centered">
          <h1>Migraine Tracker</h1>
          <h2>
            Tracking migraine made easy with Migraine Tracker. Track your
            migraine attacks to see your patterns and find your most common
            occurrences.
          </h2>

          <section className="about-app">
            <button id="link">
              <Link to="/login" className="link">
                Log in
              </Link>
            </button>
            <button id="link">
              <Link to="/signup" className="link">
                Sign up
              </Link>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
export default homePage;
