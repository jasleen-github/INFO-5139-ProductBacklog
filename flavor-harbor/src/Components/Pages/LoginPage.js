import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/Styles/LoginPage.css"; // Import CSS file for styling
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Import your firebaseConfig

const LoginPage = () => {
  // State for input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Function to handle form submission for email/password sign-in
  const handleEmailPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Handle successful login
      console.log("Successfully logged in with email and password:", userCredential.user);
    } catch (error) {
      // Handle login error
      setError(error.message);
    }
  };

  // Function to handle form submission for Google OAuth sign-in
  const handleGoogleLogin = () => {
    // Implement Google OAuth sign-in logic
    console.log("Google login clicked");
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Welcome Back!</h2>
        <form onSubmit={handleEmailPasswordSubmit}>
          {/* Input fields for email and password */}
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
        <button onClick={handleGoogleLogin} className="google-login-button">Sign In With Google</button>
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
