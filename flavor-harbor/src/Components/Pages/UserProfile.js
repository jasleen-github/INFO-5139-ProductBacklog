// UserProfile.js

import React from 'react';

const UserProfile = ({ user, handleLogout }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>
        <strong>Username:</strong> {user.username}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
