import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'; 

const withAuth = (WrappedComponent) => {

  const WithAuthHOC = (props) => {

    const isLoggedIn = useSelector((state) => state.auth.user !== null); 

    if (!isLoggedIn) { // If user is not logged in
      return <Navigate to="/login" replace />;
    }

    return <WrappedComponent {...props} />; // Render the wrapped component with its props.
  };

  return WithAuthHOC; 
};

export default withAuth; 
