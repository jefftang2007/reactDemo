import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from './login'
import Home from './home'
import TestApi from './testApi'
import SendNotification from './notification'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /test
// and /notification routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/test' component={TestApi}/>
        <Route path='/notification' component={SendNotification}/>
      </Switch>
    </main>
);

export default class App extends Component {
    render() {
        return(
            <Main />
        );
    }
}