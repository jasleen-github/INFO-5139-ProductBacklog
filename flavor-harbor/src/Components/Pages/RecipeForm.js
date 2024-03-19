import { useState } from "react";
import { auth, firestore } from "../../firebaseConfig"; // Import auth and firestore objects from your Firebase configuration
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [{ name: "", quantity: "", unit: "" }],
    instructions: "",
    category: "",
    cookingTime: "",
    // image: null,
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
        const userId = user.uid; // Obtain the userId of the currently logged-in user

        // Upload image to Firebase Storage
        const storage = getStorage();
        const imageRef = ref(storage, `images/${recipe.image.name}`);
        await uploadBytes(imageRef, recipe.image);

        // Get the download URL of the uploaded image
        const imageURL = await getDownloadURL(imageRef);

        // Add recipe to Firestore
        const userDocRef = doc(firestore, "users", userId);
        const recipesCollectionRef = collection(userDocRef, "recipes");
        await addDoc(recipesCollectionRef, {
          ...recipe,
          image: imageURL, // Store the image URL in the Firestore document
        });

        console.log("Recipe submitted successfully!");
        // Reset form after successful submission
        setRecipe({
          title: "",
          ingredients: [{ name: "", quantity: "", unit: "" }],
          instructions: "",
          category: "",
          cookingTime: "",
          image: null, // Reset image state
        });
      } else {
        console.log("No user logged in");
      }
    } catch (error) {
      console.error("Error submitting recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Title:
        <input
          type="text"
          name="title"
          value={recipe.title}
          onChange={handleInputChange}
        />
      </label>

      {/* Ingredients */}
      {recipe.ingredients.map((ingredient, index) => (
        <div key={index}>
          <label>
            Ingredient Name:
            <input
              type="text"
              name="ingredients"
              data-name="name"
              value={ingredient.name}
              onChange={(e) => handleInputChange(e, index)}
            />
          </label>
          <label>
            Quantity:
            <input
              type="text"
              name="ingredients"
              data-name="quantity"
              value={ingredient.quantity}
              onChange={(e) => handleInputChange(e, index)}
            />
          </label>
          <label>
            Unit:
            <input
              type="text"
              name="ingredients"
              data-name="unit"
              value={ingredient.unit}
              onChange={(e) => handleInputChange(e, index)}
            />
          </label>
          {index > 0 && (
            <button type="button" onClick={() => handleRemoveIngredient(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>

      {/* Other Fields */}
      <label>
        Instructions:
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={recipe.category}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Cooking Time:
        <input
          type="text"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Image:
        <input type="file" name="image" onChange={handleInputChange} />
      </label>

      <button type="submit">Submit Recipe</button>
    </form>
  );
}

export default RecipeForm;
