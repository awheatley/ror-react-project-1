import { useState } from 'react'
import './App.css'
import PostsList from './components/PostsList';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className='app'>
      <h1>ROR React Project 1</h1>
      <p>Find this application in client/src/App.jsx</p>
      <PostsList />
    </div>
  </Router>
  );
}

export default App
