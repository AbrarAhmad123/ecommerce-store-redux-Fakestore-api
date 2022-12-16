import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-by65clgayejrhxmy.us.auth0.com"
    clientId="H9183nFRtccKi7iRqduSYBI2AFrYDaaB"
    redirectUri={window.location.origin}>
  <BrowserRouter>
  <Provider  store={Store}>
    <App />
    </Provider>
  </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
