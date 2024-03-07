import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Registration from "./Components/Pages/registration";
import Header from "./Components/Pages/Header";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Pages/Footer";
import GoogleAuthProvider from "./googleAuthProvider"; // Import GoogleAuthProvider
import UserProfile from "./Components/Pages/UserProfile"; // Import UserProfile

const App = () => {
  return (
    <div className="app-container">
      <Header />
      {/* Wrap Routes with GoogleAuthProvider */}
      <GoogleAuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Loginpage" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
          {/* Add Route for UserProfile */}
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </GoogleAuthProvider>
      <Footer />
    </div>
  );
};

export default App;
