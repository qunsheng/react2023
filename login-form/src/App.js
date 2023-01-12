import React from 'react';
import {login} from './utils';
import './App.css';

// ==================== LOGIN FORM ========================
//
// Tasks:
// The login button should trigger login() action imported
// disable login button if email is blank or if password is under 6 letters
// disable login button where login action is being performed
// show error message from the login() if login fails, the error message should be cleared every time user re-attempt to login
// show alert box if login cucceeds

function App() {
  return (
    <div className='App'>
      <h1>Login Form</h1>
      <div>
        <label htmlFor={"email"}>Email</label>
        <input id={'email'} type={'email'} />
      </div>
      <div>
        <label htmlFor={"password"}>Password</label>
        <input id={'password'} type={'password'} />
      </div>

      {/* error message */}
      <div></div>

      <div>
        <button>Login</button>
      </div>

    </div>
  );
}

export default App;
