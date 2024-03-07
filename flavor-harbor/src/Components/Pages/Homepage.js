//  <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>FlavorHarbor - A Culinary Community</title>
//     <link rel="stylesheet" href="../../assets/Styles/Homepage.css" />
//   </head>
//   <body>
//     <header>
//       <img src="flavorharbor-logo.png" alt="FlavorHarbor Logo" />
//     </header>

//     <nav>
//       <a href="#">Home</a>
//       <a href="#">Explore</a>
//       <a href="#">Learn</a>
//       <a href="#">Community</a>
//       <a href="#">Marketplace</a>
//       <a href="#">Sign In/Sign Up</a>
//     </nav>

//     <div class="hero-section">
//       <h1>Explore, Share, and Celebrate Culinary Delights!</h1>
//       <a href="#" class="cta-button">Get Started</a>
//     </div>

//     <div class="featured-section">
//       <div class="featured-box">
//         <img
//           src="../../assets/Images/global culinary diversity.jpeg"
//           alt="Global Cuisine 1"
//         />
//         <h2>Global Culinary Diversity</h2>
//         <p>Explore recipes from various cuisines.</p>
//       </div>
//       <div class="featured-box">
//         <img
//           src="../../assets/Images/recipe sharing.jpeg"
//           alt="Recipe Sharing"
//         />
//         <h2>User-Friendly Recipe Sharing</h2>
//         <p>Share your culinary creations with ease.</p>
//       </div>
//       <div class="featured-box">
//         <img
//           src="../../assets/Images/review and rating.jpeg"
//           alt="Recipe Rating and Reviews"
//         />
//         <h2>Recipe Rating and Reviews</h2>
//         <p>Give ratings and reviews.</p>
//       </div>
//     </div>

//     <div class="featured-recipes">
//       <h2>Featured Recipes</h2>
//       <div class="recipe-card">
//         <div class="recipe-box">
//           <img
//             src="../../assets/Images/spicy thai basil chicken.jpeg"
//             alt="Recipe 1"
//           />
//           <h3>Spicy Thai Basil Chicken</h3>
//           <p>Delicious Thai dish with a kick!</p>
//           <a href="#">View Recipe</a>
//         </div>
//         <div class="recipe-box">
//           <img
//             src="../../assets/Images/mango avacado salsa.jpeg"
//             alt="Recipe 2"
//           />
//           <h3>Mango Avocado Salsa</h3>
//           <p>Refreshing salsa perfect for summer.</p>
//           <a href="#">View Recipe</a>
//         </div>
//         <div class="recipe-box">
//           <img src="../../assets/Images/classic tiramisu.jpeg" alt="Recipe 3" />
//           <h3>Classic Tiramisu</h3>
//           <p>An Italian dessert to satisfy your sweet tooth.</p>
//           <a href="#">View Recipe</a>
//         </div>
//       </div>
//     </div>

//     <div class="footer">
//       <p>
//         &copy; 2024 FlavorHarbor. All Rights Reserved. |
//         <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
//       </p>
//     </div>
//   </body>
// </html>
import React from "react";
import "../../assets/Styles/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="hero-section">
        <h1>Explore, Share, and Celebrate Culinary Delights!</h1>
        Get Started
      </div>

      <div className="featured-section">
        <div className="featured-box">
          <img
            src="../../assets/Images/global_culinary_diversity.jpeg"
            alt="Global Cuisine 1"
          />
          <h2>Global Culinary Diversity</h2>
          <p>Explore recipes from various cuisines.</p>
        </div>
        <div className="featured-box">
          <img
            src="../../assets/Images/recipe_sharing.jpeg"
            alt="Recipe Sharing"
          />
          <h2>User-Friendly Recipe Sharing</h2>
          <p>Share your culinary creations with ease.</p>
        </div>
        <div className="featured-box">
          <img
            src="../../assets/Images/review_and_rating.jpeg"
            alt="Recipe Rating and Reviews"
          />
          <h2>Recipe Rating and Reviews</h2>
          <p>Give ratings and reviews.</p>
        </div>
      </div>

      <div className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipe-card">
          <div className="recipe-box">
            <img
              src="../../assets/Images/spicy_thai_basil_chicken.jpeg"
              alt="Recipe 1"
            />
            <h3>Spicy Thai Basil Chicken</h3>
            <p>Delicious Thai dish with a kick!</p>
            <a href="#">View Recipe</a>
          </div>
          <div className="recipe-box">
            <img
              src="../../assets/Images/mango_avacado_salsa.jpeg"
              alt="Recipe 2"
            />
            <h3>Mango Avocado Salsa</h3>
            <p>Refreshing salsa perfect for summer.</p>
            <a href="#">View Recipe</a>
          </div>
          <div className="recipe-box">
            <img src="./harmony.jpg" alt="Recipe 3" />
            <h3>Classic Tiramisu</h3>
            <p>An Italian dessert to satisfy your sweet tooth.</p>
            <a href="#">View Recipe</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
