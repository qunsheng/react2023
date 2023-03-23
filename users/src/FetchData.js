import './App.css';
import { useEffect, useState } from 'react';
// do npm install axios
import axios from 'axios';

// create a counter, number on right, button to increase 2
// make another button to increase counter after 5000 ms
// fetch data from https://randomuser.me/api and display data

function App() {
  const [data, setData] = useState("");

  // another approach, use react query (tan stack query)
  useEffect( () => {
    axios.get("https://randomuser.me/api").then (response => {
      setData(response.data);
    }).catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      <h1>User Data</h1>
      <pre>
        {JSON.stringify(data, undefined, ' ')}
      </pre>
     
    </div>
  );
}

export default App;
