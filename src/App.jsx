import { useState, useEffect, useCallback, useMemo } from "react";

const getArray = () =>{
  for(let i = 0; i < 1000000000; i++) {

  }return ['Muhammad', "Good Boy"]
}

import React from 'react'

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [randomInput,useRandomInput] = useState("")
  const
  
  return (

    <main className="App">
      <input type="text" placeholder="input"
      value={userInput} onChange={(e) => setUserInput(e.target.value)}
      />

      <h1>output: {userInput || "..."}</h1>

    </main>
    
  )
}

export default App
