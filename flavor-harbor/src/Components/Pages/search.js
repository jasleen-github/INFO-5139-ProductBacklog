// import React, { useState } from 'react';
// import axios from 'axios';
// import "../../assets/Styles/search.css";

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`/api/search?q=${query}`);
//       setResults(response.data.results);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Enter your search query"
//       />
//       <button onClick={handleSearch}>Search</button>
//       <div>
//         {results.map((result, index) => (
//           <div key={index}>{result.title}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;
