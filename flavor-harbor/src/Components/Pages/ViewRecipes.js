import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/Styles/ViewRecipes.css";
import FeedbackForm from "./RecipeFeedbackForm";

const ViewRecipes = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false); // State to track if feedback is submitted

  const handleSubmitFeedback = (feedbackData) => {
    console.log("Feedback submitted:", feedbackData);
    // You can handle submission logic here (e.g., send feedback to backend)
    setFeedbackSubmitted(true); // Update state to show feedback submitted message
  };
  // Hard-coded recipe data
  const HardCoderecipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: "https://via.placeholder.com/150",
      description:
        "Classic Italian pasta dish with eggs, cheese, and pancetta.",
    },
    {
      id: 2,
      title: "Chicken Stir Fry",
      image: "https://via.placeholder.com/150",
      description:
        "Quick and easy stir-fry with chicken, vegetables, and soy sauce.",
    },
    {
      id: 3,
      title: "Vegetable Soup",
      image: "https://via.placeholder.com/150",
      description: "Hearty soup made with assorted vegetables and broth.",
    },
    // Adding the three featured recipes
    {
      id: 4,
      title: "Spicy Thai Basil Chicken",
      image: "https://via.placeholder.com/150",
      description: "Delicious Thai dish with a kick!",
    },
    {
      id: 5,
      title: "Mango Avocado Salsa",
      image: "https://via.placeholder.com/150",
      description: "Refreshing salsa perfect for summer.",
    },
    {
      id: 6,
      title: "Classic Tiramisu",
      image: "https://via.placeholder.com/150",
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
              {/* Display FeedbackForm only if feedback is not submitted */}
              {!feedbackSubmitted && (
                <FeedbackForm onSubmit={handleSubmitFeedback} />
              )}
              {/* Display feedback submitted message if feedback is submitted */}
              {feedbackSubmitted && <p>Feedback submitted successfully!</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipes;
