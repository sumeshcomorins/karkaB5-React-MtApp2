import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './RouterComponents/Home';
import Users from './RouterComponents/Users';
import About from './RouterComponents/About';
import NavBar from './RouterComponents/NavBar';
import LoginPage from './LoginComponents/LoginPage';
import Feed from './RouterComponents/Feed';
import LogOutPage from './LogOutComponents/LogOutPage';

function App() {
  
  return (
    <Router>
    <div className="App">
      <NavBar/>
    <Switch>
         <Route path="/home">
            <Home/>
          </Route>

          <Route path="/feed">
            <Feed/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

          <Route path="/users">
            <Users/>
          </Route>
          
          <Route path="/" exact>
          <LoginPage/>
          </Route>

          <Route path="/logOut" >
          <LogOutPage/>
          </Route>

        </Switch>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       

      </header> */}
        

    </div>
    </Router>
  );
}

export default App;
