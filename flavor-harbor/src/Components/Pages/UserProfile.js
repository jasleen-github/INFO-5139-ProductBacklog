// UserProfile.js
import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, firestore } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import "../../assets/Styles/UserProfile.css";

const UserProfile = () => {
  const [showRecipeForm, setShowRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userId = user.uid;
          const recipesRef = firestore.collection("users").doc(userId).collection("recipes");
          const snapshot = await recipesRef.get();
          const recipesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setRecipes(recipesData);
        } else {
          console.log("No user logged in");
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

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
      <h2>Welcome to Your Profile</h2>
      <div className="profile-section">
        <button onClick={handleLogout}>Logout</button>
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
