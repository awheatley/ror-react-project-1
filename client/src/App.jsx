import { useState } from 'react'
import './App.css'
import PostsList from './components/PostsList';

function App() {
  return <>
    <div className='app'>
      <h1>ROR React Project 1</h1>
      <p>Find this application in client/src/App.jsx</p>
      <PostsList />
    </div>
  </>
}

export default App
