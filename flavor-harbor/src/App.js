// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
import Header from "./Components/Pages/Header";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Pages/Footer";
import UserProfile from "./Components/Pages/UserProfile";
import RecipeForm from "./Components/Pages/RecipeForm";
<<<<<<< HEAD
import RecipeDetail from "./Components/Pages/RecipeDetail";
=======
import RecipeFeedbackForm from "./Components/Pages/RecipeFeedbackForm";
>>>>>>> bc6d242d2f2f79db97ece4f5d33ab1a52a12aed6

const App = () => {
  return (
    <div className="app-container">
      <Header /> {/* Header is always visible */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Loginpage" element={<LoginPage />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/RecipeForm" element={<RecipeForm />} />
<<<<<<< HEAD
        <Route path="/RecipeDetail" element={<RecipeDetail />} />
=======
        <Route path="/RecipeFeedbackForm" element={<RecipeFeedbackForm />} />

>>>>>>> bc6d242d2f2f79db97ece4f5d33ab1a52a12aed6
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
