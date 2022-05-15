import React from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'
// import AboutPage from './pages/AboutPage'
import './index.css'

 const root = ReactDOM.createRoot(
    document.getElementById('root')
 );

 root.render(
     <App />
    //  <Router>
    //      <Routes>
    //          <Route path='/' element={<App />} />
    //          <Route path='about' element={<AboutPage />} />
    //      </Routes>
    //  </Router>
 );