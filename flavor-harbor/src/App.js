import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
import Header from "./Components/Pages/Header";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Pages/Footer";
//import UserProfile from "./Components/Pages/UserProfile";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Loginpage" element={<LoginPage />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
