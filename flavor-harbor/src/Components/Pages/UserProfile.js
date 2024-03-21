/* UserProfile.js */

import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import "../../assets/Styles/UserProfile.css";

const UserProfile = () => {
  const [showRecipeForm, setShowRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleRecipeSubmit = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    setShowRecipeForm(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/LoginPage");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="user-profile">
      <h2 className="profile-heading">Welcome to Your Profile</h2>
      <div className="profile-actions">
        <div className="create-recipe-action">
          <button
            className="create-recipe-button"
            onClick={() => setShowRecipeForm(true)}
          >
            Create Recipe
          </button>
        </div>
        <div className="logout-action">
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {showRecipeForm && (
        <div className="profile-section">
          <h3>Create Recipe</h3>
          <RecipeForm onSubmit={handleRecipeSubmit} />
        </div>
      )}
      <div className="profile-section">
        <h3>Your Recipes</h3>
        {recipes.length > 0 ? (
          <ul className="recipe-list">
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.title}</li>
            ))}
          </ul>
        ) : (
          <p>No recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
