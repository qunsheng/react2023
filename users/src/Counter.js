import './App.css';
import { useState } from 'react';

// create a counter, number on right, button to increase 2
// make another button to increase counter after 5000 ms

function App() {
  const [counter, addCounter] = useState(0);

  function addCounterAsync() {
    setTimeout(() => {
      // need use functional useState to use current counter
      // addCounter(counter + 2);
      addCounter(value => value + 2);
    }, 5000);
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        {counter} 
        <button onClick={() => {
          // need use functional useState to use current counter
          // return addCounter(counter + 2)}
          return addCounter(value => value + 2);
        }}>Add 2 </button>
        <button onClick={addCounterAsync}>Add 2 Async</button>
      </div>      
    </div>
  );
}

export default App;
