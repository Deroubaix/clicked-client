import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthWrapper } from './context/auth.context'
import 'bootstrap/dist/css/bootstrap.min.css';
/* import '/styles/home.css'*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
  <AuthWrapper>
  <App />
  </AuthWrapper>
  </Router>
  </React.StrictMode>,
)




