import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState('');
  
    function increment() {
      setCount(count ++)
    }
    
    function decrement() {
      setCount(count --)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button> 
    </div>
  )
}

export default Counter;
