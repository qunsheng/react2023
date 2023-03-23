import './App.css';
import { useState } from 'react';

// create a counter, number on right, button to increase 2
// make another button to increase counter after 5000 ms
// use async/await to implement async add counter function

function App() {
  const [counter, addCounter] = useState(0);

  // this wait function return a promise, therefor can be used for await
  function wait (ms) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("done!");
      }, ms)
    });
    return promise;
  }

  // await need inside async funtion
  async function addCounterAsync() {
    // await must used for promise
    await wait(5000);
    // need use functional useState to use current counter
    // addCounter(counter + 2);
    addCounter(value => value + 2);
  }

  return (
    <div className="App">
      <h1>Counter</h1>
      <div>
        {counter} 
        <button onClick={() => {
          // need use functional useState to use current counter
          // return addCounter(counter + 2);
          return addCounter(value => value + 2);
        }}>Add 2 </button>
        <button onClick={addCounterAsync}>Add 2 Async</button>
      </div>      
    </div>
  );
}

export default App;
