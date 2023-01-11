import React, {useState, useRef} from 'react';
import './App.css';

function Controlled() {
  const [state, setState] = useState('');  
  
  function handleChange(e) {
    setState(e.target.value);
  }

  function alertValue() {
    alert(state);
  }

  return (
    <div>
      {/* Controlled component bound to data */}
      <input value={state} onChange={handleChange}/>
      <button onClick={alertValue}>Click me</button>
    </div>
  )
};

function UnControlled() {
  const inputRef = useRef();

  function alertValue() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef}/>
      {/* UnControlled component not bound to data */}
      <button onClick={alertValue}>Click me</button>
    </div>
  )
}

/**
 * Example show difference between controlled component and uncontrolled component
 */
function App() {
  return (
    <div className='App'>
      <h1>Controlled vs Uncontrolled Components</h1>
      <Controlled />
      <UnControlled />
    </div>
  );
}

export default App;
