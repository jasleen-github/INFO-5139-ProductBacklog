import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/Styles/LoginPage.css";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is logged in:", user); // Add console log
        setIsLoggedIn(true);
        navigate("/UserProfile");
      } else {
        console.log("User is not logged in"); // Add console log
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleEmailPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(
        "Successfully logged in with email and password:",
        userCredential.user
      );
      setIsLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully"); // Add console log
      setIsLoggedIn(false);
      navigate("/Homepage");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Welcome Back!</h2>
        {isLoggedIn ? (
          <div>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleEmailPasswordSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="login-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="login-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login with Email/Password
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        )}
        <p className="login-footer">
          Don't have an account?{" "}
          <button className="register-button">
            <Link className="register-button" to="/registration">
              Register here
            </Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
