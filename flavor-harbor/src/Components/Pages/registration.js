import React, { useState } from "react";
import "../../assets/Styles/Registration.css"; // Correct import path
import { Link } from "react-router-dom";

//import UserProfile from "./Components/Pages/UserProfile";

import { auth, firestore } from "../../firebaseConfig"; // Import the Firebase authentication object
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


const Registration = () => {
  // State variables to hold form data
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        console.log("User Registered");

        //setting the user Id
        var userID = auth.currentUser.uid;
        const userDocRef = doc(firestore, "users/" + userID);

        //(first name, last name, email)
        const userData = {
          firstName: firstname,
          lastName: lastname,
          username: username,
          email: email,
        };

        try {
          await setDoc(userDocRef, userData);
          console.log("User data stored successfully in Firestore");
        } catch (error) {
          console.error("Error storing user data in Firestore:", error);
          // Handle the error appropriately
        }
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode === "auth/weak-password") {
          console.log("Password is too weak.");
        } else {
          console.log(errorMessage);
          console.log(errorMessage);
        }
      });
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{" "}
        <button className="login-button">
          <Link className="login-button" to="/Loginpage">
            Login here
          </Link>
        </button>
      </p>
    </div>
  );
};

export default Registration;
