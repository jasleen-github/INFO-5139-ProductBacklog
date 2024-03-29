// // RecipeDetail.js
// import React, { useState, useEffect } from "react";
// import { firestore } from "../../firebaseConfig"; // Adjust the path based on your file structure

// import RecipeDetail from "./RecipeDetail";

// function RecipeDetailPage({ match }) {
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const recipeId = match.params.id; // Extract recipe ID from the URL

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const recipeRef = firestore.collection("recipes").doc(recipeId);
//         const doc = await recipeRef.get();
//         if (doc.exists) {
//           setRecipe(doc.data());
//         } else {
//           console.log("No such document!");
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching recipe:", error);
//       }
//     };

//     fetchRecipe();
//   }, [recipeId]);

//   return (
//     <div>
//       {loading && <div>Loading...</div>}
//       {recipe && <RecipeDetail recipe={recipe} />}
//     </div>
//   );
// }

// export default RecipeDetailPage;

//Recipedetail.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebaseConfig"; 

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeRef = firestore.collection("recipes").doc(id);
        const doc = await recipeRef.get();
        if (doc.exists) {
          setRecipe(doc.data());
        } else {
          console.log("No such document!");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {recipe ? (
        <div>
          <h2>{recipe.title}</h2>
          <p>Description: {recipe.description}</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
          <h3>Other Details:</h3>
          <p>Category: {recipe.category}</p>
          <p>Cooking Time: {recipe.cookingTime}</p>
          <img src={recipe.image} alt="Recipe" style={{ maxWidth: "100%" }} />
        </div>
      ) : (
        <div>No recipe found.</div>
      )}
    </div>
  );
}

export default RecipeDetailPage;


