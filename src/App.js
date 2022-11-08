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
  import Home from './Components/Home';
import Dashboard from './Components/Admin/Dashboard';
import AdminNav from './Components/Navbars/AdminNav';
import UserNav from './Components/Navbars/UserNav';
import Customers from './Components/Admin/Customers';
import Orders from './Components/Admin/Orders';
import Products from './Components/Admin/Products';
import Settings from './Components/Admin/Settings';
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
  const setAuth = (boolean1) =>{
    setIsAuthenticated(boolean1)
  }

  // const history = useHistory()
  const role = localStorage.getItem('role')

  async function isAuth() {
    try {
      const res = await fetch(`http://localhost:5000/auth/verify`,{
        method : 'POST',
        headers : {jwt_token : localStorage.token}
      })
      const parseRes = await res.json()
      // console.log(parseRes)
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
      // history.push('/login')
    } catch (err) {
      console.error(err.message)
      
    }
  }
  useEffect(() =>{
    isAuth()
  },[])

  // function sidebarHandle(){
  //   switch(role){
  //     case 'admin':
  //       return <AdminNav />;
  //     default :
  //       return <UserNav />  
  //   }

  // }

  return (
    <>
      <Router>
        <Switch>
          {/* <Home /> */}
        <Route exact path='/' render={
            props => !isAuthenticated ? (
            <Login {...props} setAuth={setAuth}/>
             ) : (
             <Redirect to ={{ pathname: '/home' }}/> 
             )}/>

          <Route exact path='/login' render={
            props => !isAuthenticated ? (
            <Login {...props} setAuth={setAuth}/>
             ) : ( 
              <Redirect
              to={{
                pathname: "/home"
              }}
            />
             )}/>

          <Route exact path='/register' render={
            props => !isAuthenticated ? (
            <Register {...props} setAuth={setAuth}/>
            ) : (
            <Redirect to = {{ pathname: '/login' }} />
            )} />
        
         <Route exact path='/home' render={
            props => isAuthenticated ? (
            <Home {...props} setAuth={setAuth}/>
            ) : (
              <Redirect to = {{ pathname: '/login' }} />
            )}>
            </Route>
            
            <Products />
        </Switch>
      </Router>
      </>  
    
  )
}

export default App