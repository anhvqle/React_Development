import './App.css';
import Register from './Register';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
