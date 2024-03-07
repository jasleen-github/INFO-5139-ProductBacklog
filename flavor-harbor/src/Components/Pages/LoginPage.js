import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/Styles/LoginPage.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleEmailPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully logged in with email and password:", userCredential.user);
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Welcome Back!</h2>
        {isLoggedIn ? (
          <div>
            <p>You are now signed in!</p>
            <Link to="/Homepage">Go to Homepage</Link>
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
