// App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
import Header from "./Components/Pages/Header";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Pages/Footer";
import UserProfile from "./Components/Pages/UserProfile"; // Import UserProfile component
import RecipeForm from "./Components/Pages/RecipeForm";
import RecipeFeedbackForm from "./Components/Pages/RecipeFeedbackForm";
import search from "./Components/Pages/search";
import Search from "./Components/Pages/search";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user authentication status

  return (
    <div className="app-container">
      <Header isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn prop to Header component */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route
          path="/Loginpage"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} // Pass setIsLoggedIn to LoginPage
        />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/UserProfile" element={<UserProfile />} />{" "}
        <Route path="/RecipeForm" element={<RecipeForm />} />
        <Route path="/RecipeFeedbackForm" element={<RecipeFeedbackForm />} />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
