import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import PostsList from './components/PostsList';
import NavBar from './components/NavBar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
  <Router>
    <div className='app'>
      <h1>ROR React Project 1</h1>
      <p>Find this application in client/src/App.jsx</p>
      <NavBar />
      <AppRoutes />
    </div>
  </Router>
  );
}

export default App
