import { useState } from 'react';
import Another from './Another';
import './App.css';

function App() {
  const [count, setCount] = useState(10);
  let increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  let decrement = () => {
    setCount(prevCount => prevCount - 1)
  }
  return (
    <div className="App">
      <Another  name="Subodha"/>
      <span>{count}</span>
      <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      </div>
     
        <h1> Hello World</h1>
    </div>
  );
}

export default App;
