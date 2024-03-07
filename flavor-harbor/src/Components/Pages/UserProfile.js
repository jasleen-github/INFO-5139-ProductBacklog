// UserProfile.js

import React from 'react';
import "../../assets/Styles/UserProfile.css"; // Correct import path

const UserProfile = ({ user, favoriteRecipes, recentlyViewedRecipes }) => {
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
    </div>
  );
};

export default UserProfile;
