import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuthProvider = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId="<your_client_id>">
      {children}
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthProvider;

