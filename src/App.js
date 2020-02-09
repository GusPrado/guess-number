import React, {useState} from 'react';
import './App.css';

function App() {
  //Game status
  const [status, setStatus] = useState('START')
  // machine guess - supposing between 0-300
  const [numGuess, setNumGuess] = useState(1)
  const [ min, setMin] = useState(0)
  const [ max, setMax] = useState(300)
  const [guess, setGuess] = useState(max/2)


  const startGame = () => {
    setStatus('RUNNING')
    setMin(0)
    setMax(300)
    setNumGuess(1)
    setGuess(150)
  }

  if(status === 'START'){
    return <button onClick={startGame}>Start to play</button>
  }

  const lessThan = () => {
    setNumGuess(numGuess + 1)
    setMax(guess)
    const nextGuess = parseInt((guess - min) / 2) + min
    setGuess(nextGuess)
  }

  const greaterThan = () => {
    setNumGuess(numGuess + 1)
    setMin(guess)
    const nextGuess = parseInt((max - guess) / 2) + guess
    setGuess(nextGuess) 
  }

  const gotIt = () => {
    setStatus('FINISH')
  }

  if (status === 'FINISH') {
  return (
    <div>
  <p>I got the number {guess} with {numGuess} tries</p>
      <button onClick={startGame}>Restart?</button>
    </div>
  )
  }

  return (
    <div className="App">
      <p>Your number is {guess}?</p>
      <p>Min: {min} / Max: {max}</p>
      <button onClick={lessThan}>Less than</button>
      <button onClick={gotIt}>Got it!</button>
      <button onClick={greaterThan}>Greater than</button>
    </div>
  );
}

export default App;
