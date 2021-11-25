// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from "react-router-dom";

import { Login } from "./Components/login";
import SignUp from "./Components/signup";
// import Createac from "./Components/createac";
import axios from 'axios';
import Form from './Components/Form';


function App() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* <li className="nav-item"> */}
            {/* <link className='nav-link' to={"/create ac"}>create account</link> */}
          {/* </li> */}
          {/* <Link className="navbar" to={"/sign-in"}>Home</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}><a href="#" className="nvb">Login</a></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}><a href="#" className="nvb">Sign up</a></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Form"}><a href="#" className="nvb">Create an account</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
      <div className="auth-wrapper">
        <div className="auth-inner">
          <BrowserRouter>
          <Switch>
            {/* <Route path="/create account" exact component={Createac} /> */}
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/form" component={Form}/>
          </Switch>
          </BrowserRouter>
          
        </div>
  </div>
    </div>
    
  );
}
export default App;