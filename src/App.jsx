import { useState, useEffect, useCallback, useMemo } from "react";

const getArray = () =>{
  for(let i = 0; i < 1000000000; i++) {

  }return ['Muhammad', "Good Boy"]
}

import React from 'react'

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [randomInput,setRandomInput] = useState("")

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
  }, [])

  const fibNumber = useMemo(() => fib(userInput), [userInput, fib]);

  const myArray = useMemo(() => getArray(), [])

  useEffect(() => {
    console.log("New Array");
  }, [myArray])

  
  
  return (

    <main className="App">
      <label> Fibonacci Sequence:</label>
      <input type="text"
       placeholder="Position"
      value={userInput}
       onChange={(e) => setUserInput(e.target.value)}
      />

      <P>Number: {fibNumber || "--"} </P>

      <br />
      <br />

      <label>Random Input:</label>
      <input type="text" 
      value={randomInput}
      placeholder="thanks you are welcome"
      onChange={(e) => setRandomInput(e.target.value)}
      
      />
      <p>Result: {randomInput}</p>
      

      

    </main>
    
  )
}

export default App
