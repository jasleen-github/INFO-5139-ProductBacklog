// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
import Header from "./Components/Pages/Header";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Pages/Footer";
import UserProfile from "./Components/Pages/UserProfile";
import RecipeForm from "./Components/Pages/RecipeForm";
import RecipeFeedbackForm from "./Components/Pages/RecipeFeedbackForm";
import RecipeDetail from "./Components/Pages/RecipeDetail";
import Search from "./Components/Pages/search";
import { auth } from "./firebaseConfig"; // Import auth

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Update isLoggedIn state based on user authentication state
    });

    return () => unsubscribe();
  }, []); // Run only once on component mount

  return (
    <div className="app-container">
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route
          path="/LoginPage"
          element={
            isLoggedIn ? (
              <Navigate to="/UserProfile" />
            ) : (
              <LoginPage setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/Registration" element={<Registration />} />
        <Route
          path="/UserProfile"
          element={
            isLoggedIn ? (
              <UserProfile />
            ) : (
              <Navigate to="/LoginPage" replace />
            )
          }
        />
        <Route path="/RecipeForm" element={<RecipeForm />} />
        <Route path="/RecipeFeedbackForm" element={<RecipeFeedbackForm />} />
        <Route path="/RecipeDetail/:id" element={<RecipeDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
