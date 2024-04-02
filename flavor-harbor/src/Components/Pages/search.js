

// import React, { useState } from "react";
// import "../../assets/Styles/search.css";

// import spaghettiCarbonara from "../../assets/Images/Carbonara recept svenska.jpeg";
// import chickenStirFry from "../../assets/Images/Thai Cashew Chicken Stir Fry.jpeg";
// import vegetableSoup from "../../assets/Images/Vegetable Soup.jpeg";
// import spicyThaiBasilChicken from "../../assets/Images/spicy_thai_basil_chicken.jpeg";
// import mangoAvocadoSalsa from "../../assets/Images/mango_avacado_salsa.jpeg";
// import classicTiramisu from "../../assets/Images/classic_tiramisu.jpeg";

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
  
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

//   const handleSearch = () => {
//     // Check if the search query matches any of the hardcoded recipe titles
//     const matchingRecipe = HardCoderecipes.find(
//       (recipe) => recipe.title.toLowerCase() === query.toLowerCase()
//     );

//     if (matchingRecipe) {
//       // If a matching recipe is found, set it as the only search result
//       setResults([matchingRecipe]);
//     } else {
//       // If no matching recipe is found, clear the results
//       setResults([]);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search Recipe"
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div className="search-results">
//         {results.length > 0 ? (
//           results.map((result) => (
//             <div key={result.id} className="search-result">
//               <img src={result.image} alt={result.title} />
//               <div className="result-details">
//                 <h3>{result.title}</h3>
//                 <p>{result.description}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No results found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Search;


//working file above


import React, { useState } from "react";
import "../../assets/Styles/search.css";

import spaghettiCarbonara from "../../assets/Images/Carbonara recept svenska.jpeg";
import chickenStirFry from "../../assets/Images/Thai Cashew Chicken Stir Fry.jpeg";
import vegetableSoup from "../../assets/Images/Vegetable Soup.jpeg";
import spicyThaiBasilChicken from "../../assets/Images/spicy_thai_basil_chicken.jpeg";
import mangoAvocadoSalsa from "../../assets/Images/mango_avacado_salsa.jpeg";
import classicTiramisu from "../../assets/Images/classic_tiramisu.jpeg";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  
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

  const handleSearch = () => {
    // Check if the search query matches any of the hardcoded recipe titles
    const matchingRecipe = HardCoderecipes.find(
      (recipe) => recipe.title.toLowerCase() === query.toLowerCase()
    );

    if (matchingRecipe) {
      // If a matching recipe is found, set it as the only search result
      setResults([matchingRecipe]);
    } else {
      // If no matching recipe is found, clear the results
      setResults([]);
    }
  };

  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          placeholder="Enter your search query"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <div className="search-results">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="search-result">
              <img src={result.image} alt={result.title} />
              <div className="result-details">
                <h3>{result.title}</h3>
                <p>{result.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
