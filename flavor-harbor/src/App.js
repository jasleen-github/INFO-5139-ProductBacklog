import React from "react";
import { Routes, Route } from "react-router-dom";

import React, { useState, useEffect } from "react";
import Header from "./Components/Pages/Header";
import Footer from "./Components/Pages/Footer";
import UserProfile from "./Components/Pages/UserProfile";
import { auth } from "./firebaseConfig"; // Import Firebase authentication
import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase auth methods
import {
  getUserData,
  getFavoriteRecipes,
  getRecentlyViewedRecipes,
} from "./api"; // Import functions to fetch user data and recipes

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Loginpage" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
