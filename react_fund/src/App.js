import React, { useState } from 'react';
import './App.css';


function App() {
  const [likes , setLikes] = useState(0);
  const [value, setValue] = useState('input text')

  function increment() {
    setLikes(likes + 1)
  }
  
  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div>
    <h1>{likes}</h1>
    <h1>{value}</h1>
      <input 
      type="text" 
      value={value}
      onChange={e => setValue(e.target.value)}
      />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button> 
    </div>
  );
}

export default App;
