// RecipeDetailPage.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "../../assets/Styles/RecipeDetail.css";

const RecipeDetailPage = () => {
  const { userId, recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeRef = doc(firestore, "users", userId, "recipes", recipeId);
        const docSnap = await getDoc(recipeRef);
        if (docSnap.exists()) {
          setRecipe(docSnap.data());
        } else {
          setError("Recipe not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setError("Error fetching recipe");
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [userId, recipeId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <div>No recipe found.</div>;
  }

  return (
    <div className="container">
      <h2 className="title">{recipe.title}</h2>
      {recipe.image && <img src={recipe.image} alt="Recipe" className="image" />}
      <p className="description">Description: {recipe.description}</p>
      <div className="instructions">
        <h3 className="sectionTitle">Instructions:</h3>
        <p>{recipe.instructions}</p>
      </div>
      <div className="otherDetails">
        <h3 className="sectionTitle">Other Details:</h3>
        <p>Category: {recipe.category}</p>
        <p>Cooking Time: {recipe.cookingTime}</p>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
