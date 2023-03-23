import './App.css';
import { useEffect, useState } from 'react';
// do npm install axios
import axios from 'axios';

// create a counter, number on right, button to increase 2
// make another button to increase counter after 5000 ms
// fetch data from https://randomuser.me/api and display data
// display user name and picture

function renderUser(user){
  if(user && user.name && user.picture &&  user.picture.medium){
    const userName = `${user.name.first} ${user.name.last}`
    return <div>
      {userName} 
      <img src={user.picture.medium} />
      </div>
  }
}

function App() {
  const [user, setUser] = useState({});

  useEffect( () => {
    axios.get("https://randomuser.me/api").then (response => {
      if(response.data && response.data.results && response.data.results.length){
        setUser(response.data.results[0]);
      }
    }).catch(err => console.log(err));
  }, [])

  return (
    <div className="App">
      {renderUser(user)}
    </div>
  );
}

export default App;
