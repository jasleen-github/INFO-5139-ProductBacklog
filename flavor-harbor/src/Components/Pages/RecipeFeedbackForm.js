// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';
// import "../../assets/Styles/RecipeFeedbackForm.css";

// const FeedbackForm = ({ onSubmit }) => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit feedback data to parent component
//     onSubmit({ rating, comment });
//     // Reset form fields
//     setRating(0);
//     setComment('');
//   };

//   return (
//     <div className="feedback-form-container">
//       <h2>Provide Feedback</h2>
//       <div className="star-rating">
//         {[...Array(5)].map((_, index) => {
//           const ratingValue = index + 1;
//           return (
//             <label key={index} className="star-label">
//               <input
//                 type="radio"
//                 name="rating"
//                 value={ratingValue}
//                 onClick={() => handleRatingChange(ratingValue)}
//                 style={{ display: 'none' }} // Optional: Hide the input element
//               />
//               <FaStar
//                 className="star"
//                 color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
//                 size={30}
//               />
//             </label>
//           );
//         })}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="review-input-container">
//           <label className="review-label">Review:</label>
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             className="review-input" // Apply class name
//           />
//         </div>
//         <button type="submit" className="submit-button">Submit Feedback</button> {/* Apply class name */}
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../assets/Styles/RecipeFeedbackForm.css";

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim whitespace from the comment and check if it's empty
    const trimmedComment = comment.trim();
    if (!trimmedComment) {
      // Handle empty comment (e.g., show an error message)
      console.error("Comment cannot be empty");
      return; // Exit early if comment is empty
    }

    // Ensure rating is converted to a number
    const ratingNumber = parseInt(rating);

    // Check if ratingNumber is a valid number
    if (!isNaN(ratingNumber)) {
      // Submit feedback data to parent component with correct values
      onSubmit({ rating: ratingNumber, comment: trimmedComment });
      // Reset form fields
      setRating(0);
      setComment("");
    } else {
      // Handle invalid rating input (e.g., show an error message)
      console.error("Invalid rating input");
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Provide Feedback</h2>
      <div className="star-rating">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index} className="star-label">
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRatingChange(ratingValue)}
                style={{ display: "none" }} // Optional: Hide the input element
              />
              <FaStar
                className="star"
                color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                size={30}
              />
            </label>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="review-input-container">
          <label className="review-label">Review:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="review-input" // Apply class name
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Feedback
        </button>{" "}
        {/* Apply class name */}
      </form>
    </div>
  );
};

export default FeedbackForm;
