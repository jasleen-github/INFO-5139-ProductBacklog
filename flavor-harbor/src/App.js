// import React from "react";
// import Login from "./Components/Pages/LoginPage";
// import Header from "./Components/Pages/Header";
// import Footer from "./Components/Pages/Footer";
// import registration from "./Components/Pages/registration";

// const App = () => {
//   return (
//     <div className="app-container">
//       <Header />
//       <Login />
//       <Footer />
//       <registration />
//     </div>
//   );
// };

// export default App;


// Include the registration component in your JSX
import React from "react";
import Login from "./Components/Pages/LoginPage";
import Header from "./Components/Pages/Header";
import Footer from "./Components/Pages/Footer";
import Registration from "./Components/Pages/registration"; // Note: Component name should start with a capital letter

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Login />
      <Footer />
      <Registration /> 
    </div>
  );
};

export default App;

