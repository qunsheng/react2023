import React, {createContext, useContext} from 'react';
import './App.css';

// create context
const Context = createContext();

function GrandChild(props){
  // use context
  const context = useContext(Context);
  return <h2>{context}</h2>
}

function Child(props){
  return <GrandChild />
}

function App() {
  return (
    // provide context
    <Context.Provider value={1}>
      <div className='App'>
        <h1>Context</h1>
        <Child />
      </div>
    </Context.Provider>
  );
}

export default App;
