import {useState} from 'react';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function emailChanged(e){
    setEmail(e.target.value);
  }

  function passwrodChanged(e){
    setPassword(e.target.value);
  }

  function loginClicked() {
    setErrorMessage('');
    if(!email || !password || password.length < 6){
      setButtonDisabled(true);
      return;
    }

    // another approach is using async, await, try, catch
    login({email, password}).then( response => {
      alert("Login OK");
      setButtonDisabled(true);
    }).catch(error => {
      setErrorMessage(error.toString());
      setButtonDisabled(true);
    });
  }

  return (
    <div className='App'>
      <h1>Login Form</h1>
      <div>
        <label htmlFor={"email"}>Email</label>
        <input id={'email'} type={'email'} value={email} onChange={emailChanged}/>
      </div>
      <div>
        <label htmlFor={"password"}>Password</label>
        <input id={'password'} type={'password'} value={password} onChange={passwrodChanged}/>
      </div>

      {/* error message */}
      <div>{errorMessage}</div>

      <div>
        <button disabled={buttonDisabled} onClick={loginClicked}>Login</button>
      </div>
    </div>
  );
}

export default App;
