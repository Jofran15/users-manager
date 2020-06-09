import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
 
  } from "react-router-dom";
import Login from './components/Login'
import Users from './components/Users'
import Profile from './components/Profile'

const Routes =()=>{
    return(
    <Router>
    
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/Users' component={Users}></Route>
            <Route path='/Profile' component={Profile}></Route>
        </Switch>
      
        <div>
        <ul>
        <li>
            <Link to="/">Login</Link>
          </li>
        
          <li>
            <Link to="/Users">Usuarios</Link>
          </li>
          <li>
            <Link to="/Profile">Perfil</Link>
          </li>
        </ul>
        </div>
        
    

        </Router>   
    )
}

export default Routes 
