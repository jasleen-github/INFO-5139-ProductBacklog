import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
>>>>>>> af370202ff1ff2433044bc4ffbaadb4de5305e42
import Header from "./Components/Pages/Header";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Pages/Footer";
import UserProfile from "./Components/Pages/UserProfile"; // Import UserProfile
import RecipeForm from "./Components/Pages/RecipeForm";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Loginpage" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/RecipeForm" element={<RecipeForm />} />

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
