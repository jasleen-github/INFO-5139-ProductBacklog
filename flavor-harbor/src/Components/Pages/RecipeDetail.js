





import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebaseConfig";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import "../../assets/Styles/RecipeDetail.css";

function RecipeDetailPage() {
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

  const handleDeleteRecipe = async () => {
    try {
      await deleteDoc(doc(firestore, "users", userId, "recipes", recipeId));
      console.log("Recipe deleted successfully!");
      // Redirect or update UI accordingly after deletion
    } catch (error) {
      console.error("Error deleting recipe:", error);
      setError("Error deleting recipe");
    }
  };

  // Render loading state if loading is true
  if (loading) {
    return (
      <div className="user-profile">
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <div>No recipe found.</div>;
  }

  return (
    <div className="recipe-detail-container">
      <h2 className="title">{recipe.title}</h2>
      {recipe.image && (
        <img src={recipe.image} alt="Recipe" className="image" />
      )}
      <p className="description">Description: {recipe.description}</p>
      <div className="ingredients">
        <h3 className="sectionTitle">Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              {"Quantity: "}
              {ingredient.quantity} {"Unit: "}
              {ingredient.unit} {"Ingredient name: "}
              {ingredient.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="instructions">
        <h3 className="sectionTitle">Instructions:</h3>
        <p>{recipe.instructions}</p>
      </div>
      <div className="otherDetails">
        <h3 className="sectionTitle">Other Details:</h3>
        <p>Category: {recipe.category}</p>
        <p>Cooking Time: {recipe.cookingTime}</p>
      </div>
      <button onClick={handleDeleteRecipe}>Delete Recipe</button>
    </div>
  );
}

export default RecipeDetailPage;
