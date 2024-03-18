import React, { useState } from 'react';

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: [{ name: '', quantity: '', unit: '' }],
    instructions: '',
    category: '',
    cookingTime: '',
    difficultyLevel: '',
    servings: '',
    preparationTime: '',
    cookingMethod: '',
    nutritionalInfo: {
      calories: '',
      fat: '',
      protein: '',
      carbohydrates: '',
    },
    tags: [],
    image: null, // For file upload
    notes: '',
    author: '',
    email: '',
    website: '',
    source: '',
    video: '',
    publishedDate: '',
    modifiedDate: '',
    reviews: [],
    comments: [],
    likes: 0,
    shares: 0,
    favorites: 0,
    views: 0,
    featured: false,
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'ingredients') {
      const list = [...recipe.ingredients];
      list[index][e.target.dataset.name] = value;
      setRecipe({ ...recipe, ingredients: list });
    } else if (name === 'tags') {
      const tagsArray = value.split(',');
      setRecipe({ ...recipe, tags: tagsArray });
    } else if (name === 'image') {
      setRecipe({ ...recipe, [name]: e.target.files[0] }); // Handle file upload
    } else if (name === 'nutritionalInfo') {
      setRecipe({
        ...recipe,
        nutritionalInfo: { ...recipe.nutritionalInfo, [value.name]: value.value },
      });
    } else {
      setRecipe({ ...recipe, [name]: value });
    }
  };

  const handleAddIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, { name: '', quantity: '', unit: '' }] });
  };

  const handleRemoveIngredient = (index) => {
    const list = [...recipe.ingredients];
    list.splice(index, 1);
    setRecipe({ ...recipe, ingredients: list });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(recipe);
    // Add logic to submit the recipe data to the backend or perform further processing
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Title:
        <input type="text" name="title" value={recipe.title} onChange={handleInputChange} />
      </label>

      {/* Ingredients */}
      {recipe.ingredients.map((ingredient, index) => (
        <div key={index}>
          <label>
            Ingredient Name:
            <input type="text" name="ingredients" data-name="name" value={ingredient.name} onChange={(e) => handleInputChange(e, index)} />
          </label>
          <label>
            Quantity:
            <input type="text" name="ingredients" data-name="quantity" value={ingredient.quantity} onChange={(e) => handleInputChange(e, index)} />
          </label>
          <label>
            Unit:
            <input type="text" name="ingredients" data-name="unit" value={ingredient.unit} onChange={(e) => handleInputChange(e, index)} />
          </label>
          {index > 0 && (
            <button type="button" onClick={() => handleRemoveIngredient(index)}>Remove</button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>

      {/* Other Fields */}
      <label>
        Instructions:
        <textarea name="instructions" value={recipe.instructions} onChange={handleInputChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={recipe.category} onChange={handleInputChange} />
      </label>
      <label>
        Cooking Time:
        <input type="text" name="cookingTime" value={recipe.cookingTime} onChange={handleInputChange} />
      </label>
      <label>
        Image:
        <input type="file" name="image" onChange={handleInputChange} />
      </label>
      {/* Add more fields here */}

      <button type="submit">Submit Recipe</button>
    </form>
  );
}

export default RecipeForm;
