import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-5fe5ngbn02v7qkty.au.auth0.com"
    clientId="0gjLGpVmAbUZZ2YX0FPUVLeDvrLPrf0Q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ChakraProvider>
    <App />
    </ChakraProvider> 
  </Auth0Provider>
  
 
  
);