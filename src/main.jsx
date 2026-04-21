import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  
import App from './App';
import './styles/global.css';
import './styles/auth.css';
import './styles/dashboard.css';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> 
      <CssBaseline />
      <App />
    </HashRouter>
  </React.StrictMode>
);