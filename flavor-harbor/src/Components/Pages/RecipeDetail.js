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

// RecipeDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebaseConfig";

function RecipeDetail() {
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
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {recipe && (
        <div>
          <h2>{recipe.title}</h2>
          <p>Description: {recipe.description}</p>
          {/* Display other recipe details */}
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
