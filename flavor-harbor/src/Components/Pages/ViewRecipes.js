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

  const handleSubmitFeedback = async () => {
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
        setFeedbackSubmitted(true);
      } else {
        console.log("No user logged in");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const HardCoderecipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: spaghettiCarbonara,
      description:
        "Classic Italian pasta dish with eggs, cheese, and pancetta.",
    },
    {
      id: 2,
      title: "Chicken Stir Fry",
      image: chickenStirFry,
      description:
        "Quick and easy stir-fry with chicken, vegetables, and soy sauce.",
    },
    {
      id: 3,
      title: "Vegetable Soup",
      image: vegetableSoup,
      description: "Hearty soup made with assorted vegetables and broth.",
    },
    {
      id: 4,
      title: "Spicy Thai Basil Chicken",
      image: spicyThaiBasilChicken,
      description: "Delicious Thai dish with a kick!",
    },
    {
      id: 5,
      title: "Mango Avocado Salsa",
      image: mangoAvocadoSalsa,
      description: "Refreshing salsa perfect for summer.",
    },
    {
      id: 6,
      title: "Classic Tiramisu",
      image: classicTiramisu,
      description: "An Italian dessert to satisfy your sweet tooth.",
    },
  ];

  return (
    <div className="view-recipes">
      <h2>View Recipes</h2>
      <div className="recipe-list">
        {HardCoderecipes.map((HardCoderecipes) => (
          <div key={HardCoderecipes.id} className="recipe-item">
            <img src={HardCoderecipes.image} alt={HardCoderecipes.title} />
            <div className="recipe-details">
              <h3>{HardCoderecipes.title}</h3>
              <p>{HardCoderecipes.description}</p>
              {!feedbackSubmitted && (
                <FeedbackForm
                  onSubmit={handleSubmitFeedback}
                  setRating={setRating}
                  setComment={setComment}
                />
              )}
              {feedbackSubmitted && <p>Feedback submitted successfully!</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipes;
