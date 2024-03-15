import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
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
