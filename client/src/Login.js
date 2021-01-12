import './App.css';
import Axios from 'axios';
import { useState } from 'react';
let token = undefined;
let msg = "";

function Login() {
    document.addEventListener("DOMContentLoaded", function(event) {
        // console.log("Refresh button pressed");
        Axios.post("http://localhost:3001/user/checkToken", {
            token: localStorage.getItem('token')
        }).then( (response) => {
            if(parseInt(response.data.status) <= 299){
                token = response.data.token;
                isLogin(true);
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
    });

    let [loginStatus, setLoginStatus] = useState("");
    let [isLoggedIn, isLogin] = useState(Boolean);

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = () => {
        // console.log("log in pressed");
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

    const logout = () => {
        console.log("log out pressed");
        Axios.get("http://localhost:3001/user/logout").then( (response) => {
            if(parseInt(response.data.status) <= 299){
                localStorage.removeItem('token');
                isLogin(false);
                msg = "Logout Succesfully";
            }
            else{
                msg = "Logout Unsuccesfully";
            }
            setLoginStatus(response.data.message);
        }).catch((error) => {
            console.log(error);
        })
    };

    return (
        <div className="jumbotron">
            <h1 style={{display: isLoggedIn ? "block" : "none"}} >Hello World</h1>
            <div style={{display: isLoggedIn ? "none" : "block"}}>
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
            </div>
            <p>{loginStatus}</p>
            <p><button className="btn btn-primary" type="submit" style={{display: isLoggedIn ? "block" : "none"}} name="logout" id="logout_btn" onClick = {logout}>Log Out</button></p>
        </div>
    );
}

export default Login;
