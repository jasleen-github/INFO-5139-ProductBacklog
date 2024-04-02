// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../../assets/Styles/ViewRecipes.css";
// import FeedbackForm from "./RecipeFeedbackForm";

// import spaghettiCarbonara from "../../assets/Images/Carbonara recept svenska.jpeg";
// import chickenStirFry from "../../assets/Images/Thai Cashew Chicken Stir Fry.jpeg";
// import vegetableSoup from "../../assets/Images/Vegetable Soup.jpeg";
// import spicyThaiBasilChicken from "../../assets/Images/spicy_thai_basil_chicken.jpeg";
// import mangoAvocadoSalsa from "../../assets/Images/mango_avacado_salsa.jpeg";
// import classicTiramisu from "../../assets/Images/classic_tiramisu.jpeg";

// const ViewRecipes = () => {
//   const [feedbackSubmitted, setFeedbackSubmitted] = useState(false); // State to track if feedback is submitted

//   const handleSubmitFeedback = (feedbackData) => {
//     console.log("Feedback submitted:", feedbackData);
//     // You can handle submission logic here (e.g., send feedback to backend)
//     setFeedbackSubmitted(true); // Update state to show feedback submitted message
//   };
//   // Hard-coded recipe data
//   const HardCoderecipes = [
//     {
//       id: 1,
//       title: "Spaghetti Carbonara",
//       image: spaghettiCarbonara,
//       description:
//         "Classic Italian pasta dish with eggs, cheese, and pancetta.",
//     },
//     {
//       id: 2,
//       title: "Chicken Stir Fry",
//       image: chickenStirFry,
//       description:
//         "Quick and easy stir-fry with chicken, vegetables, and soy sauce.",
//     },
//     {
//       id: 3,
//       title: "Vegetable Soup",
//       image: vegetableSoup,
//       description: "Hearty soup made with assorted vegetables and broth.",
//     },
//     // Adding the three featured recipes
//     {
//       id: 4,
//       title: "Spicy Thai Basil Chicken",
//       image: spicyThaiBasilChicken,
//       description: "Delicious Thai dish with a kick!",
//     },
//     {
//       id: 5,
//       title: "Mango Avocado Salsa",
//       image: mangoAvocadoSalsa,
//       description: "Refreshing salsa perfect for summer.",
//     },
//     {
//       id: 6,
//       title: "Classic Tiramisu",
//       image: classicTiramisu,
//       description: "An Italian dessert to satisfy your sweet tooth.",
//     },
//   ];

//   return (
//     <div className="view-recipes">
//       <h2>View Recipes</h2>
//       <div className="recipe-list">
//         {HardCoderecipes.map((HardCoderecipes) => (
//           <div key={HardCoderecipes.id} className="recipe-item">
//             <img src={HardCoderecipes.image} alt={HardCoderecipes.title} />
//             <div className="recipe-details">
//               <h3>{HardCoderecipes.title}</h3>
//               <p>{HardCoderecipes.description}</p>
//               {/* Display FeedbackForm only if feedback is not submitted */}
//               {!feedbackSubmitted && (
//                 <FeedbackForm onSubmit={handleSubmitFeedback} />
//               )}
//               {/* Display feedback submitted message if feedback is submitted */}
//               {feedbackSubmitted && <p>Feedback submitted successfully!</p>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewRecipes;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, firestore } from "../../firebaseConfig"; // Import auth and firestore
import "../../assets/Styles/ViewRecipes.css";
import FeedbackForm from "./RecipeFeedbackForm";
import { collection, addDoc } from "firebase/firestore";

import spaghettiCarbonara from "../../assets/Images/Carbonara recept svenska.jpeg";
import chickenStirFry from "../../assets/Images/Thai Cashew Chicken Stir Fry.jpeg";
import vegetableSoup from "../../assets/Images/Vegetable Soup.jpeg";
import spicyThaiBasilChicken from "../../assets/Images/spicy_thai_basil_chicken.jpeg";
import mangoAvocadoSalsa from "../../assets/Images/mango_avacado_salsa.jpeg";
import classicTiramisu from "../../assets/Images/classic_tiramisu.jpeg";

const ViewRecipes = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmitFeedback = async (recipeId) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const feedbackRef = collection(firestore, "users", userId, "feedback");
        await addDoc(feedbackRef, {
          rating: rating,
          comment: comment,
          timestamp: new Date().toISOString(),
        });
        console.log("Feedback submitted successfully!");
        // Update feedbackSubmitted state for the corresponding recipe
        setHardCoderecipes((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe.id === recipeId
              ? { ...recipe, feedbackSubmitted: true }
              : recipe
          )
        );
      } else {
        console.log("No user logged in");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const [HardCoderecipes, setHardCoderecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: spaghettiCarbonara,
      description:
        "Classic Italian pasta dish with eggs, cheese, and pancetta.",
      instructions: `
        1. Cook spaghetti according to package instructions until al dente. Drain, reserving some pasta water.
        2. In a separate pan, fry diced pancetta or bacon until crispy.
        3. In a bowl, whisk together eggs, grated pecorino cheese, salt, and black pepper.
        4. Add cooked spaghetti to the pan with pancetta, then pour over the egg mixture. Toss quickly to coat the spaghetti evenly.
        5. If the pasta seems too dry, add a splash of reserved pasta water to loosen the sauce.
        6. Serve immediately with an extra sprinkle of grated cheese on top.
      `,
      feedbackSubmitted: false, // Add feedbackSubmitted state
    },
    {
      id: 2,
      title: "Chicken Stir Fry",
      image: chickenStirFry,
      description:
        "Quick and easy stir-fry with chicken, vegetables, and soy sauce.",
      instructions: `
        1.In a bowl, mix together soy sauce, oyster sauce, sesame oil, cornstarch, salt, and pepper. Marinate chicken slices in this mixture for 15-20 minutes.
        2. Heat a large skillet or wok over high heat. Add a tablespoon of oil and swirl to coat the pan.
        3 .Add minced garlic and stir-fry for a few seconds until fragrant.
        4. Add marinated chicken slices and stir-fry until cooked through.
        5. Add mixed vegetables and continue to stir-fry until vegetables are tender yet still crisp.
        6. Serve hot with steamed rice or noodles.`,
      feedbackSubmitted: false, // Add feedbackSubmitted state
    },
    {
      id: 3,
      title: "Vegetable Soup",
      image: vegetableSoup,
      description: "Hearty soup made with assorted vegetables and broth.",
      instructions: `
      1. Heat olive oil in a large pot over medium heat. Add onions, carrots, and celery. Cook until onions are translucent, about 5 minutes.
      2. Add minced garlic and cook for an additional 1-2 minutes until fragrant.
      3. Add zucchini, green beans, diced tomatoes, and vegetable broth to the pot. Bring to a boil, then reduce heat and let simmer for 20-25 minutes until vegetables are tender.
      4. Season with salt and pepper to taste. Serve hot.`,
      feedbackSubmitted: false, // Add feedbackSubmitted state
    },
    {
      id: 4,
      title: "Spicy Thai Basil Chicken",
      image: spicyThaiBasilChicken,
      description: "Delicious Thai dish with a kick!",
      instructions: `
      1. In a bowl, mix together soy sauce, oyster sauce, fish sauce, and sugar. Marinate chicken slices in the mixture for 15-20 minutes.
      2. Heat vegetable oil in a large skillet or wok over medium-high heat. Add minced garlic and stir-fry until fragrant.
      3. Add marinated chicken slices to the skillet and stir-fry until cooked through, about 5-7 minutes.
      4. Add sliced onions and bell peppers to the skillet. Stir-fry for another 2-3 minutes until vegetables are slightly softened.
      5. Add Thai basil leaves and sliced Thai red chilies to the skillet. Stir-fry for another minute until basil leaves are wilted and chilies are fragrant.
      6. Serve hot with steamed rice.`,
      feedbackSubmitted: false, // Add feedbackSubmitted state
    },
    {
      id: 5,
      title: "Mango Avocado Salsa",
      image: mangoAvocadoSalsa,
      description: "Refreshing salsa perfect for summer.",
      instructions: `
      1. In a large bowl, combine diced mangoes, diced avocados, sliced red onions, and chopped cilantro.
      2. Drizzle lime juice and olive oil over the salad. Season with salt and pepper to taste.
      3. Gently toss everything together until well combined.
      4. Serve immediately as a refreshing side dish or starter.`,
      feedbackSubmitted: false, // Add feedbackSubmitted state
    },
    {
      id: 6,
      title: "Classic Tiramisu",
      image: classicTiramisu,
      description: "An Italian dessert to satisfy your sweet tooth.",
      instructions: `
      1. In a heatproof bowl, whisk together egg yolks and sugar until pale and creamy.
      2. Place the bowl over a pot of simmering water (double boiler) and continue whisking until the mixture thickens, about 5-7 minutes.
      3. Remove from heat and whisk in mascarpone cheese until smooth.
      4. In a separate bowl, whip heavy cream until stiff peaks form. Gently fold whipped cream into the mascarpone mixture until well combined.
      5. In a shallow dish, mix brewed coffee and coffee liqueur (if using). Dip ladyfinger cookies into the coffee mixture briefly, making sure not to soak them too long.
      6. Arrange a layer of soaked ladyfingers at the bottom of a serving dish. Spread half of the mascarpone mixture over the ladyfingers.
      7. Repeat with another layer of soaked ladyfingers and remaining mascarpone mixture.
      8. Cover and refrigerate for at least 4 hours, preferably overnight, to allow the flavors to meld.
      9. Before serving, dust the top with cocoa powder. Cut into slices and enjoy chilled.`,
      feedbackSubmitted: false, // Add feedbackSubmitted state
    },
  ]);

  return (
    <div className="view-recipes">
      <h2>Recommended Recipes</h2>
      <div className="recipe-list">
        {HardCoderecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-details">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <h4>Instructions:</h4>
              <p>{recipe.instructions}</p>
              {!recipe.feedbackSubmitted && (
                <FeedbackForm
                  onSubmit={() => handleSubmitFeedback(recipe.id)}
                />
              )}
              {recipe.feedbackSubmitted && (
                <p>Feedback submitted successfully!</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipes;
