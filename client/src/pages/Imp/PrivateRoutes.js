import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
// import { Loader } from "./loader";

export const ProtectedRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () =><div><center className="justify-content-center justify-content-center mt-5 pt-5 mx-auto fs-1">Loading...</center></div> ,
  });

  return <Component />;
};