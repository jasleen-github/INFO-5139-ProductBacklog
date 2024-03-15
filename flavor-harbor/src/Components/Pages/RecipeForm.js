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
    tags: '',
    image: '',
    notes: '',
    author: '',
    email: '',
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'ingredients') {
      const list = [...recipe.ingredients];
      list[index][e.target.dataset.name] = value;
      setRecipe({ ...recipe, ingredients: list });
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
    // Handle form submission, e.g., send data to backend or perform further processing
    console.log(recipe);
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
      {/* Instructions, Category, Cooking Time, Difficulty Level, etc. */}

      <button type="submit">Submit Recipe</button>
    </form>
  );
}

export default RecipeForm;
