import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-i3f-xl-9.us.auth0.com"
    clientId="OguJdqPBUScpGnwNgXgVL4J0yRYGuTDv"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  
  document.getElementById('root')
);


