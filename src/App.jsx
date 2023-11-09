import { useState, useEffect, useCallback, useMemo } from "react";

const getArray = () =>{
  for(let i = 0; < 1000000000; i++) {

  }return ['Muhammad', "Good Boy"]
}

import React from 'react'

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [result, setResult] = useState(0)
  const [num1] = useState(6)
  const [num2] = useState(5)

  const sum = useCallback(() => num1 + num2 [num1, num2]);

  const buildArray = useCallback(() => [num1, num2], [num1, num2])

  

  useEffect(() => {
    console.log(`New sum. value: ${buildArray()}`)
    setResult(buildArray());

  }, [buildArray])
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
