import React, { useState } from "react";
import { auth, firestore } from "../../firebaseConfig";
import { collection, addDoc, doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../../assets/Styles/RecipeForm.css";

function RecipeForm({ onSubmit }) {
  const [recipe, setRecipe] = useState({
    title: "",
    description: "", // Added description field
    ingredients: [{ name: "", quantity: "", unit: "" }],
    instructions: "",
    category: "",
    cookingTime: "",
    image: null,
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      const list = [...recipe.ingredients];
      list[index][e.target.dataset.name] = value;
      setRecipe({ ...recipe, ingredients: list });
    } else if (name === "image") {
      setRecipe({ ...recipe, [name]: e.target.files[0] });
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  const handleAddIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [
        ...recipe.ingredients,
        { name: "", quantity: "", unit: "" },
      ],
    });
  };

  const handleRemoveIngredient = (index) => {
    const list = [...recipe.ingredients];
    list.splice(index, 1);
    setRecipe({ ...recipe, ingredients: list });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;

        const storage = getStorage();
        const imageRef = ref(storage, `images/${recipe.image.name}`);
        await uploadBytes(imageRef, recipe.image);

        const imageURL = await getDownloadURL(imageRef);

        const userDocRef = doc(firestore, "users", userId);
        const recipesCollectionRef = collection(userDocRef, "recipes");
        await addDoc(recipesCollectionRef, {
          ...recipe,
          image: imageURL,
        });

        console.log("Recipe submitted successfully!");
        onSubmit(); // Notify parent component about the new recipe
        setRecipe({
          title: "",
          description: "", // Clear description field
          ingredients: [{ name: "", quantity: "", unit: "" }],
          instructions: "",
          category: "",
          cookingTime: "",
          image: null,
        });
      } else {
        console.log("No user logged in");
      }
    } catch (error) {
      console.error("Error submitting recipe:", error);
    }
  };

  return (
    <div className="recipe-form-container">
      <form className="recipe-form-content" onSubmit={handleSubmit}>
        <h2 className="recipe-form-title">Submit a Recipe</h2>
        <label className="recipe-form-label">
          Recipe Title:
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleInputChange}
            className="recipe-form-input"
          />
        </label>
        <label className="recipe-form-label">
          Description:
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleInputChange}
            className="recipe-form-input"
          />
        </label>
        {/* Ingredients */}
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <label className="recipe-form-label">
              Ingredient Name:
              <input
                type="text"
                name="ingredients"
                data-name="name"
                value={ingredient.name}
                onChange={(e) => handleInputChange(e, index)}
                className="recipe-form-input"
              />
            </label>
            <label className="recipe-form-label">
              Quantity:
              <input
                type="text"
        name="ingredients"
        data-name="quantity"
        value={ingredient.quantity}
        onChange={(e) => handleInputChange(e, index)}
        className="recipe-form-input"
      />
            </label>
            <label className="recipe-form-label">
              Unit:
              <input
                type="text"
                name="ingredients"
                data-name="unit"
                value={ingredient.unit}
                onChange={(e) => handleInputChange(e, index)}
                className="recipe-form-input"
              />
            </label>
            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveIngredient(index)}
                className="recipe-form-button"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddIngredient}
          className="recipe-form-button"
        >
          Add Ingredient
        </button>

        {/* Other Fields */}
        <label className="recipe-form-label">
          Instructions:
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
            className="recipe-form-input"
          />
        </label>
        <label className="recipe-form-label">
          Category:
          <input
            type="text"
            name="category"
            value={recipe.category}
            onChange={handleInputChange}
            className="recipe-form-input"
          />
        </label>
        <label className="recipe-form-label">
          Cooking Time:
          <input
            type="text"
            name="cookingTime"
            value={recipe.cookingTime}
            onChange={handleInputChange}
            className="recipe-form-input"
          />
        </label>
        <label className="recipe-form-label">
          Image:
          <input
            type="file"
            name="image"
            onChange={handleInputChange}
            className="recipe-form-input"
          />
        </label>

        <button type="submit" className="recipe-form-button">
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default RecipeForm;