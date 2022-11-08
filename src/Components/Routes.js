// Admin routes

import Customers from '../Components/Admin/Customers'
import Dashboard from '../Components/Admin/Dashboard'
import Orders from '../Components/Admin/Orders'
import Products from '../Components/Admin/Products'
import Settings from '../Components/Admin/Settings'

// User Routes

import About from '../Components/Users/About'
import Collection from './Users/Collection'
import Contact from '../Components/Users/Contact'
// import Home from '../Components/Users/Home'
import Shop from '../Components/Users/Shop'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


export const AdminRoutes = () =>{
    return(
        <Switch>
            {/* <Route path={'/home'} exact component={Home} /> */}
            <Route path={'home/dashboard'} component={Dashboard} />
            <Route path={'home/products'} component={Products} />
            <Route path={'home/customers'} component={Customers} />
            <Route path={'home/orders'} component={Orders} />
            <Route path={'home/settings'} component={Settings} />
        </Switch>
    )
}

export const UserRoutes = () =>{
    return(
        <Switch>
           {/* <Route path={'/home'} component={Home} /> */}
           <Route path={'/collection'} component={Collection} />
           <Route path={'/shop'} component={Shop} />
           <Route path={'/about'} component={About} />
           <Route path={'/contact'} component={Contact} />
        </Switch>
    )
}