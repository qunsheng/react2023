import React, {useState, memo, useCallback, useMemo} from 'react';
import './App.css';

// // when App local value changed, this child component re-rendering
// const Child = function(props){
//   console.log("I am rendering");
//   return <div>I am child</div>
// }

// when App local value changed, this child component will not re-rendering
const Child = memo(function(props){
  console.log("I am rendering");
  return <div>I am child</div>
});

const array = [1, 3, 9];

/**
 * 
 * Example show how memo, useCallback, and useMemo works
 * 
 * React.memo make wrapped component only render when props changes
 * 
 * useCallback hook memorize a function, to avoid a function to be created every time
 * 
 * useMemo hook memorize a value of function, to avoid a function be called every time
 * 
 */
function App() {
  const [localValue, setLocalValue] = useState(0);

  function someFunc() {}

  // create memorizedFunc by calling useCallback with empty dependency array 
  // therefore memorizedFunc will only create once
  const memorizedFunc = useCallback(someFunc, []);

  function largestNumber() {
    console.log("I am working");
    return Math.max(...array);
  }

  // create memorizedValue by calling useMemo with empty dependency array 
  // therefore memorizedValue will only create once
  const memorizedValue = useMemo(largestNumber, []);

  return (
    <div className='App'>
      {/* someFunc will re-creat every time, and func prop will change every time */}
      {/* <Child func = {someFunc} /> */}

      {/* memorizedFunc will NOT re-creat every time, and func prop will NOT change every time */}
      <Child func = {memorizedFunc} />

      <h1>localValue: {localValue}</h1>
      <button onClick={() => setLocalValue(localValue + 1)}>
        Change loval value
      </button>

      {/* largestNumber function will be called every time */}
      {/* <h1>Larget Number {largestNumber()} </h1> */}

      {/* memorizedValue will NOT be changed every time, largestNumber function will NOT be called every time */}
      <h1>Larget Number {memorizedValue} </h1>
    </div>
  );
}

export default App;
