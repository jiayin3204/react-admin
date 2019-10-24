import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../page/home/home'
import allStudent from '../page/allStudent/allStudent'
import classStudent from '../page/classStudent/index'
import Login from '../page/login/login'

const BaseRouter = () => (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/allStudent" component={allStudent}/>
        <Route exact path="/classStudent" component={classStudent}/>
      </Switch>
    </HashRouter>
)

export default BaseRouter;