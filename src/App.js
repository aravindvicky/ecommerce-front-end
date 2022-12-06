import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React,{useState, useEffect} from 'react';
import { 
    Route, 
    Switch, 
    BrowserRouter as Router,
    Link,
    Redirect
   } from "react-router-dom";
  // components
  import Register from './Components/Register';
  import Login from './Components/Login';
import Dashboard from './Components/Admin/Dashboard';
import Productlist from './Components/Admin/Productlist'
import Customers from './Components/Admin/Customers';
import Orders from './Components/Admin/Orders';
import Products from './Components/Admin/Products';
import Settings from './Components/Admin/Settings';
import Navbar from './Components/Navbars/NavBar';
import EditProducts from './Components/Admin/EditProducts';
import About from './Components/Users/About';
import Cart from './Components/Users/Cart';
import Contact from './Components/Users/Contact';
import Home from './Components/Users/Home';
// import AllProducts from './Components/Users/Category/AllProducts';
// import Card from './Components/Users/Category/Card';
import Ecommerce from './Components/Users/Category/Ecommerce';
import Productpage from './Components/Users/Category/Productpage';
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  const setAuth = (boolean1) =>{
    setIsAuthenticated(boolean1)
  }
  async function isAuth() {
    try {
      const res = await fetch(`http://localhost:5000/auth/verify`,{
        method : 'POST',
        headers : {jwt_token : localStorage.token}
      })
      const parseRes = await res.json()
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
    } catch (err) {
      console.error(err.message)
      
    }
  }
  useEffect(() =>{
    isAuth()
  },[])

  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/' render={
            props => !isAuthenticated ? (
            <Login {...props} setAuth={setAuth}/>
             ) : (
             <Redirect to ={{ pathname: '/login' }}/> 
             )}/>

          <Route exact path='/login' render={
            props => !isAuthenticated ? (
            <Login {...props} setAuth={setAuth}/>
             ) : ( 
              <Redirect
              to={{
                pathname: "/dashboard"
              }}
            />
             )}/>

          <Route exact path='/register' render={
            props => !isAuthenticated ? (
            <Register {...props} setAuth={setAuth}/>
            ) : (
            <Redirect to = {{ pathname: '/login' }} />
            )} />
        
         <Route exact path='/logout' render={
            props => isAuthenticated ? (
            <Navbar {...props} setAuth={setAuth}/>
            ) : (
              <Redirect to = {{ pathname: '/logout' }} />
            )}>
            </Route>
            
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/customers' component={Customers} /> 
            <Route path='/add-products' component={Products} /> 
            <Route path='/product-list' component={Productlist} /> 
            <Route path='/orders' component={Orders} /> 
            <Route path='/settings' component={Settings} /> 
            <Route path='/EditProducts/:id' component={EditProducts} />

            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} /> 
            <Route path='/cart' component={Cart} />
            {/* <Route path='/products' component={AllProducts} /> */}
            {/* <Route path='/card' component={Card} /> */}
            <Route path='/ecommerce' component={Ecommerce} />
            <Route path='/product-page' component={Productpage} />
        </Switch>
      </Router>
      </>  
    
  )
}

export default App