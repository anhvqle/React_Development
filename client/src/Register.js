import './App.css';
import Axios from 'axios';
import { useState } from 'react';
let msg = "";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");

  let [registerStatus, setRegisterStatus] = useState("");

  const register = () => {
    console.log("log in pressed");
    Axios.post("http://localhost:3001/user/register", {
      username: username,
      password: password,
      email: email,
      fullname: fullname
    }).then( (response) => {
      console.log(response.data);
      if(parseInt(response.data.status) <= 299){
        msg = "Register Succesfully";
      }
      else{
        msg = "Register Unsuccesfully - " + response.data.message;
      }
      setRegisterStatus(msg);
    }).catch((error) => {
      console.log(error);
    })
  };
  return (
    <div className="jumbotron">
        <p>
            <label>Full Name: <input type="text" name="fullname" id="register_fullname" required onChange = {(e) => {
                    setFullname(e.target.value);
                }}></input>
            </label>
        </p>
        <p>
            <label>Email: <input type="email" name="email" id="register_email" required onChange = {(e) => {
                    setEmail(e.target.value);
                }}></input>
            </label>
        </p>
        <p>
            <label>
                Username: <input type="text" name="username" id="username" required onChange = {(e) => {
                    setUsername(e.target.value);
                }}></input>
            </label>
        </p>
        <p>
            <label>
                Password: <input type="password" name="password" id="password" required onChange = {(e) => {
                    setPassword(e.target.value);
                }}></input>
            </label>
        </p>
        <p><button className="btn btn-primary" type="submit" name="register" id="register_btn" onClick = {register}>Register</button></p>
        <p>{registerStatus}</p>
    </div>
  );
}

export default Register;
