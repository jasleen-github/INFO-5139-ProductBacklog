import React, { useState } from 'react';
import "../../assets/Styles/UserProfile.css"; // Correct import path
import { auth } from "../../firebaseConfig"; // Import your firebaseConfig

const UserProfile = ({ user, favoriteRecipes, recentlyViewedRecipes }) => {
  // State for input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Function to handle form submission for email/password sign-in
  const handleEmailPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement email/password sign-in logic
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
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <h3>Favorite Recipes</h3>
        <ul>
          {favoriteRecipes.map((recipe, index) => (
            <li key={index}>{recipe.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Recently Viewed Recipes</h3>
        <ul>
          {recentlyViewedRecipes.map((recipe, index) => (
            <li key={index}>{recipe.name}</li>
          ))}
        </ul>
      </div>
      {/* Form for email/password sign-in */}
      <form onSubmit={handleEmailPasswordSubmit}>
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
        <button type="submit">Login with Email/Password</button>
        {error && <p>{error}</p>}
      </form>
      {/* Button for Google OAuth sign-in */}
      <button onClick={handleGoogleLogin}>Sign In With Google</button>
    </div>
  );
};

export default UserProfile;
