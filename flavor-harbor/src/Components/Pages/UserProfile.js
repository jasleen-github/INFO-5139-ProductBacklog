import React, { useState } from "react";
import RecipeForm from "./RecipeForm"; // Import the RecipeForm component
import "../../assets/Styles/UserProfile.css"; // Correct import path

const UserProfile = () => {
  const [showRecipeForm, setShowRecipeForm] = useState(false); // State to toggle recipe form visibility
  const [recipes, setRecipes] = useState([]); // State to store existing recipes (hardcoded for now)

  // Function to handle recipe submission
  const handleRecipeSubmit = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); // Add the new recipe to the existing list of recipes
    setShowRecipeForm(false); // Hide the recipe form after submission
  };

  return (
    <div className="user-profile">
      <h2>Welcome to Your Profile</h2>
      <div className="profile-section">
        <h3>Create Recipe</h3>
        {showRecipeForm ? (
          <RecipeForm onSubmit={handleRecipeSubmit} />
        ) : (
          <button onClick={() => setShowRecipeForm(true)}>Create Recipe</button>
        )}
      </div>
      <div className="profile-section">
        <h3>Your Recipes</h3>
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe.title}</li> // Display recipe titles (replace with actual content)
            ))}
          </ul>
        ) : (
          <p>No recipes yet.</p>
        )}
      </div>
      {/* Add more profile sections as needed */}
    </div>
  );
};

export default UserProfile;
