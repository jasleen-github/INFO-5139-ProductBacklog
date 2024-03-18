import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/Styles/UserProfile.css"; // Correct import path
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig"; // Import your firebaseConfig

const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({ username: '', bio: '', avatar: '', website: '' }); // Expanded profile state

  const handleEmailPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully logged in with email and password:", userCredential.user);
      setIsLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Save profile to database or perform any desired action
    console.log("Profile saved:", profile);
  };

  return (
    <div className="user-profile">
      {!isLoggedIn && (
        <form onSubmit={handleEmailPasswordSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login with Email/Password</button>
          {error && <p>{error}</p>}
        </form>
      )}
      {isLoggedIn && (
        <div>
          <p>You are now signed in!</p>
          {/* Profile form */}
          <form onSubmit={handleProfileSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio:</label>
              <textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="avatar">Avatar URL:</label>
              <input
                type="text"
                id="avatar"
                value={profile.avatar}
                onChange={(e) => setProfile({ ...profile, avatar: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website:</label>
              <input
                type="text"
                id="website"
                value={profile.website}
                onChange={(e) => setProfile({ ...profile, website: e.target.value })}
              />
            </div>
            <button type="submit">Save Profile</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
