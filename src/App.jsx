import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from "./contexts/AuthContext"

import './stylesheets/main.scss';


function App ()
{


  return (<div className='App'>
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/' component={ Home } />
          <PrivateRoute path="/update-profile" component={ UpdateProfile } />

          <Route path='/signup' component={ SignUp } />
          <Route path='/signin' component={ SignIn } />
          <Route path="/forgot-password" component={ ForgotPassword } />

        </Switch>
      </AuthProvider>
    </Router>
  </div>)
}

export default App;
