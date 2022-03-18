import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Userfront from "@userfront/react";

export const RequireAuth = ({ children }) => {
    let location = useLocation();
    let token = Userfront.tokens.accessToken;
    if (!token) {
      // Redirect to the /login page
      
      return <Navigate to="/useLogin" state={{ from: location }} replace />;
    }
  
    return children;
  }

