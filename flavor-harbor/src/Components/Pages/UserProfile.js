import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, firestore } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "../../assets/Styles/UserProfile.css";

const UserProfile = () => {
  const [showRecipeForm, setShowRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchRecipes = useCallback(async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const recipesRef = collection(firestore, "users", userId, "recipes");
        const snapshot = await getDocs(recipesRef);
        const fetchedRecipes = snapshot.docs.map(async (doc) => {
          const recipeData = doc.data();
          const imageURL = await getRecipeImageURL(recipeData.image);
          return { id: doc.id, ...recipeData, image: imageURL };
        });
        const resolvedRecipes = await Promise.all(fetchedRecipes);
        setRecipes(resolvedRecipes);
      } else {
        console.log("No user logged in");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchAndSetRecipes = async () => {
      await fetchRecipes();
    };

    fetchAndSetRecipes();
  }, [fetchRecipes]);

  const getRecipeImageURL = async (imagePath) => {
    try {
      if (!imagePath) {
        return null; // Return null if imagePath is not provided
      }
  
      const storage = getStorage();
      const imageRef = ref(storage, imagePath);
      return await getDownloadURL(imageRef);
    } catch (error) {
      console.error("Error getting image URL:", error);
      return null;
    }
  };
  

  const handleRecipeSubmit = async () => {
    await fetchRecipes();
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>Welcome to Your Profile</h2>
      <div className="profile-section">
        <button onClick={() => setShowRecipeForm(true)}>Create Recipe</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      {showRecipeForm && <RecipeForm onSubmit={handleRecipeSubmit} />}
      <div className="profile-section">
        <h3>Your Recipes</h3>
        {recipes.length > 0 ? (
          <ul className="recipe-list">
            {recipes.map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/RecipeDetail/${auth.currentUser.uid}/${recipe.id}`}>
                  <img src={recipe.image} alt="Recipe" />
                </Link>
                <div className="recipe-info">
                  <Link to={`/RecipeDetail/${auth.currentUser.uid}/${recipe.id}`}>
                    <p>{recipe.title}</p>
                  </Link>
                </div>
              </li>
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
