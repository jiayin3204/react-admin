import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Main from '../page/main'
import Home from '../page/home/home'
import Login from '../page/login/login'

const BaseRouter = () => (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/home" component={Home}/>
      </Switch>
    </HashRouter>
)

export default BaseRouter;