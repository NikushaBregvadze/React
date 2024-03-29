import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/auth';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);


