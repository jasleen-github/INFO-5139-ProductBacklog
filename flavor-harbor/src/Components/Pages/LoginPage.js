import React, { useState } from "react";
import Registration from "./registration";

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
      <h2>Login</h2>
      <h2>
        <Registration />
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
