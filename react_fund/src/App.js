import React, { useState } from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';


function App() {

  const [value, setValue] = useState('input text')

  return (
    <div  className='App'>
      {/* <Counter/> */}
      <ClassCounter/>
    </div>
  );
}

export default App;
