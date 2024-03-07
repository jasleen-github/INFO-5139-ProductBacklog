// App.js

import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer';
import LoginPage from './Components/Pages/LoginPage';
import Registration from './Components/Pages/Registration';
import UserProfile from './Components/Pages/UserProfile';
import Homepage from './Components/Pages/Homepage';
import firebaseConfig from './firebaseConfig';


const App = () => {
  const [user, setUser] = useState(null); // State variable to hold user information
  const [isLoginPage, setIsLoginPage] = useState(true); // State variable to track whether the user is in the login page
  const auth = getAuth();

  useEffect(() => {
    // Check if user is already logged in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Function to handle user login
  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  // Function to switch between registration and login pages
  const togglePage = () => {
    setIsLoginPage((prevState) => !prevState);
  };

  return (
    <div className="app-container">
      <Header />
      <Homepage />
      {user ? (
        <UserProfile user={user} handleLogout={handleLogout} />
      ) : isLoginPage ? (
        <LoginPage handleLogin={handleLogin} togglePage={togglePage} />
      ) : (
        <Registration togglePage={togglePage} />
      )}
      <Footer />
    </div>
  );
};

export default App;
