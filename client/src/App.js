import './App.css';
import Axios from 'axios';
import { useState } from 'react';
let token = undefined;
let msg = "";

function App() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    console.log("log in pressed");
    Axios.post("http://localhost:3001/user/login", {
      username: loginUsername,
      password: loginPassword
    }).then( (response) => {
      console.log(response.data);
      if(parseInt(response.data.status) <= 299){
        token = response.data.token;
        localStorage.setItem('token', token);
        msg = "Login Succesfully";
        console.log(msg);
      }
      else{
        msg = "Incorrect username or password!";
        console.log(msg);
      }
    }).catch((error) => {
      console.log(error);
    })
  };
  return (
    <div className="jumbotron">
      <p>
        <label>
          Username: <input type="text" name="username" id="username" required onChange = {(e) => {
            setLoginUsername(e.target.value);
          }}></input>
          </label>
        </p>
      <p>
        <label>
          Password: <input type="password" name="password" id="password" required onChange = {(e) => {
            setLoginPassword(e.target.value);
          }}></input>
          </label>
      </p>

      <p><button className="btn btn-primary" type="submit" name="login" id="login_btn" onClick = {login}>Log In</button></p>
      <p id="login_message"></p>
      <p id="logout"><input className="btn btn-primary" type="submit" style={{display:"none"}} name="logout" value="Logout" id="logout_btn"></input></p>
    </div>
  );
}

export default App;
