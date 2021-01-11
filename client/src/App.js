import './App.css';

function App() {
  return (
    <div className="jumbotron">
      <p><label>Username: <input type="text" name="username" id="username" required></input></label></p>
      <p><label>Password: <input type="password" name="password" id="password" required></input></label></p>
      <p><input class="btn btn-primary" type="submit" name="login" value="Log In" id="login_btn"></input></p>
      <p id="login_message"></p>
      <p id="logout"><input class="btn btn-primary" type="submit" style={{display:"none"}} name="logout" value="Logout" id="logout_btn"></input></p>
    </div>
  );
}

export default App;
