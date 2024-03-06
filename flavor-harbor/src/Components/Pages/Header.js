import React from "react";
import "../../assets/Styles/Header.css";
// import { Link } from "react-router-dom";
import { MdOutlineFoodBank } from "react-icons/md";
//import Homepage from "./Homepage";
const Header = () => {
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
              <a href="/recipes">Home</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
