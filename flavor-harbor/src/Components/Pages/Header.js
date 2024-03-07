import React from "react";
import { Link } from "react-router-dom";
import "../../assets/Styles/Header.css";
import { MdOutlineFoodBank } from "react-icons/md";

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
              <Link to="/Homepage">Home</Link>
            </li>
            <li>
              <Link to="/Loginpage">Login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li><Link to="/UserProfile">User Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
