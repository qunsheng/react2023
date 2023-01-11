import React, {useState} from 'react';
import './App.css';

/**
 * use example to show React one direction data flow 
 */
function App() {
  const [state, setState] = useState('');

  function handleChange(e) {
    // if you try to type any thing in input box, nothing happened.
    // that means dom itself don't update dom
    // only when data changed by setState, the dom then changed
    // uncomment following setState code to test
    // setState(e.target.value);
  }

  return (
    <div className='App'>
      <h1>Unidirectional Data Flow</h1>
      <input value={state} onChange={handleChange}/>
    </div>
  );
}

export default App;
