import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import PlayersList from './PlayersList';

function App() {


  return (
    <>
    <div className="App">
      <h1>FIFA Player Cards</h1>
      <PlayersList />
    </div>
    </>
  )
}

export default App
