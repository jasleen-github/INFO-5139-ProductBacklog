import React from "react";
import Login from "./Components/Pages/LoginPage";
import Header from "./Components/Pages/Header";
import Footer from "./Components/Pages/Footer";
import Registration from "./Components/Pages/registration";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Login />
      <Footer />
      <Registration />
    </div>
  );
};

export default App;
