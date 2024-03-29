// Homepage.js
import React from "react";
import "../../assets/Styles/Homepage.css";
import { Link } from "react-router-dom";
// Import images
import globalCulinaryDiversity from "../../assets/Images/global_culinary_diversity.jpeg";
import recipeSharing from "../../assets/Images/recipe_sharing.jpeg";
import reviewAndRating from "../../assets/Images/review_and_rating.jpeg";
import spicyThaiBasilChicken from "../../assets/Images/spicy_thai_basil_chicken.jpeg";
import mangoAvocadoSalsa from "../../assets/Images/mango_avacado_salsa.jpeg";
import classicTiramisu from "../../assets/Images/classic_tiramisu.jpeg";

const Homepage = () => {
  return (
    <div>
      <div className="hero-section">
        <h1>Explore, Share, and Celebrate Culinary Delights!</h1>
        <Link className="login-button" to="/Loginpage">
          Get Started
        </Link>
      </div>

      <div className="featured-section">
        <div className="featured-box">
          <img src={globalCulinaryDiversity} alt="Global Cuisine 1" />
          <h2>Global Culinary Diversity</h2>
          <p>Explore recipes from various cuisines.</p>
        </div>
        <div className="featured-box">
          <img src={recipeSharing} alt="Recipe Sharing" />
          <h2>User-Friendly Recipe Sharing</h2>
          <p>Share your culinary creations with ease.</p>
        </div>
        <div className="featured-box">
          <img src={reviewAndRating} alt="Recipe Rating and Reviews" />
          <h2>Recipe Rating and Reviews</h2>
          <p>Give ratings and reviews.</p>
        </div>
      </div>

      <div className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipe-card">
          <div className="recipe-box">
            <img src={spicyThaiBasilChicken} alt="Recipe 1" />
            <h3>Spicy Thai Basil Chicken</h3>
            <p>Delicious Thai dish with a kick!</p>
            <Link to="/RecipeDetail/1">View Recipe</Link>
          </div>
          <div className="recipe-box">
            <img src={mangoAvocadoSalsa} alt="Recipe 2" />
            <h3>Mango Avocado Salsa</h3>
            <p>Refreshing salsa perfect for summer.</p>
            <Link to="/RecipeDetail/2">View Recipe</Link>
          </div>
          <div className="recipe-box">
            <img src={classicTiramisu} alt="Recipe 3" />
            <h3>Classic Tiramisu</h3>
            <p>An Italian dessert to satisfy your sweet tooth.</p>
            <Link to="/RecipeDetail/3">View Recipe</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
