import './App.css';
import Axios from 'axios';
import Register from './Register';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
let token = undefined;
let msg = "";

function Login() {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    let [loginStatus, setLoginStatus] = useState("");
    let [isLoggedIn, isLogin] = useState(Boolean);

    const login = () => {
    console.log("log in pressed");
        Axios.post("http://localhost:3001/user/login", {
        username: loginUsername,
        password: loginPassword
        }).then( (response) => {
        console.log(response.data);
        if(parseInt(response.data.status) <= 299){
            token = response.data.token;
            isLogin(true);
            localStorage.setItem('token', token);
            msg = "Login Succesfully";
        }
        else{
            msg = "Incorrect username or password!";
            console.log(msg);
        }
        setLoginStatus(response.data.message);
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
            <p><button className="btn btn-primary" type="submit" style={{display: isLoggedIn ? "none" : "block"}} name="login" id="login_btn" onClick = {login}>Log In</button></p>
            <p>{loginStatus}</p>
            <p><button className="btn btn-primary" type="submit" style={{display: isLoggedIn ? "block" : "none"}} name="logout" id="logout_btn">Log Out</button></p>
        </div>
    );
}

export default Login;
