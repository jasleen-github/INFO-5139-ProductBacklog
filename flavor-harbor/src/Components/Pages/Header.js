import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Styles/Header.css";
import { MdOutlineFoodBank } from "react-icons/md";

const Header = ({ isLoggedIn, userId, recipeId }) => { // Pass userId and recipeId as props
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
                  <Link to="/UserProfile">Profile</Link>
                </li>
                <li>
                  <Link to={`/RecipeDetail/${userId}/${recipeId}`}>Recipe Detail</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/LoginPage">Login</Link>
              </li>
            )}
            <li>
              <Link to="/Registration">Registration</Link>
            </li>
            <li>
              <Link to="/RecipeFeedbackForm">Feedback</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
