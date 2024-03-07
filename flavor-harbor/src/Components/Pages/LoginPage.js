import React, { useState } from "react";
import "../../assets/Styles/LoginPage.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const LoginPage = () => {
  // State for input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement login logic, like making an API call
    console.log("Login with:", email, password);
    // Reset form fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
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
