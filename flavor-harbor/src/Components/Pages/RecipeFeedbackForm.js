// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

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
//     <div>
//       <h2>Provide Feedback</h2>
//       <div>
//         {[...Array(5)].map((_, index) => {
//           const ratingValue = index + 1;
//           return (
//             <label key={index}>
//               <input
//                 type="radio"
//                 name="rating"
//                 value={ratingValue}
//                 onClick={() => handleRatingChange(ratingValue)}
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
//         <div>
//           <label>Review:</label>
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit Feedback</button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;


import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "../../assets/Styles/RecipeFeedbackForm.css"; // Import your CSS file

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit feedback data to parent component
    onSubmit({ rating, comment });
    // Reset form fields
    setRating(0);
    setComment('');
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
                style={{ display: 'none' }} // Optional: Hide the input element
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
        <button type="submit" className="submit-button">Submit Feedback</button> {/* Apply class name */}
      </form>
    </div>
  );
};

export default FeedbackForm;
