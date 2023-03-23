import './App.css';
import { useEffect, useState } from 'react';
// do npm install axios
import axios from 'axios';

// display a counter number, and a button to increase counter by 2
// make another button to increase counter after 5000 ms
// fetch data from https://randomuser.me/api and display data
// display user name and picture
// fetch data from https://randomuser.me/api?page=1 and display a page of users
// add a button to get data from next page, and append new users to existing users

function renderUser(user){
  if(user && user.name && user.picture &&  user.picture.medium &&  user.id && user.id.value){
    const userName = `${user.name.first} ${user.name.last}`
    return <div key={user.id.value}>
      {userName} 
      <img src={user.picture.medium} alt="" />
      </div>
  }
}

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect( () => {
    axios.get(`https://randomuser.me/api?page=${page}`).then (response => {
      if(response.data && response.data.results && response.data.results.length){
        setUsers([...users, ...response.data.results]);
      }
    }).catch(err => console.log(err));
  }, [page])

  return (
    <div className="App">
      <div> <button onClick={() => setPage(page + 1)}> next page</button></div>
      {users.map(user =>  renderUser(user))}    
    </div>
  );
}

export default App;
