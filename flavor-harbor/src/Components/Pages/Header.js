// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Styles/Header.css";
import { MdOutlineFoodBank } from "react-icons/md";

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <MdOutlineFoodBank />
          FlavorHarbor
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/UserProfile">Profile</Link> {/* Show UserProfile link when isLoggedIn is true */}
                </li>
              </>
            ) : (
              <li>
                <Link to="/Loginpage">Login</Link>
              </li>
            )}
            <li>
              <Link to="/Registration">Registration</Link>
            </li>
            <li>
              <Link to="/RecipeDetail">Recipe Detail</Link>
            </li>
            <li>
              <Link to="/RecipeFeedbackForm">RecipeFeedbackForm</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
