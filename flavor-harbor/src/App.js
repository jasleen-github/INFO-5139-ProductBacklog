// App.js

import React, { useState, useEffect } from 'react';
import Header from './Components/Pages/Header';
import Footer from './Components/Pages/Footer';
import UserProfile from './Components/Pages/UserProfile';
import { auth } from './firebaseConfig'; // Import Firebase authentication
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase auth methods
import { getUserData, getFavoriteRecipes, getRecentlyViewedRecipes } from './api'; // Import functions to fetch user data and recipes

const App = () => {
  const [user, setUser] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [recentlyViewedRecipes, setRecentlyViewedRecipes] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        fetchUserData(user);
        fetchFavoriteRecipes(user);
        fetchRecentlyViewedRecipes(user);
      } else {
        setUser(null);
        setFavoriteRecipes([]);
        setRecentlyViewedRecipes([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserData = async user => {
    try {
      const userData = await getUserData(user.uid);
      // Assuming getUserData function returns user data
      // Update state with user data
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const fetchFavoriteRecipes = async user => {
    try {
      const recipes = await getFavoriteRecipes(user.uid);
      // Assuming getFavoriteRecipes function returns favorite recipes
      // Update state with favorite recipes
    } catch (error) {
      console.error('Error fetching favorite recipes:', error);
    }
  };

  const fetchRecentlyViewedRecipes = async user => {
    try {
      const recipes = await getRecentlyViewedRecipes(user.uid);
      // Assuming getRecentlyViewedRecipes function returns recently viewed recipes
      // Update state with recently viewed recipes
    } catch (error) {
      console.error('Error fetching recently viewed recipes:', error);
    }
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      setError(null);
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError(error.message);
    }
  };

  const handleLogout = () => {
    // Implement logout functionality
  };

  return (
    <div className="app-container">
      <Header />
      {user ? (
        <UserProfile user={user} favoriteRecipes={favoriteRecipes} recentlyViewedRecipes={recentlyViewedRecipes} />
      ) : (
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
