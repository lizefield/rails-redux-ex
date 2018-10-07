import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../containers/Home'
import Counter from '../containers/counter'
import NoMatch from '../containers/nomatch'
import Header from '../containers/header'
import UserHistory from '../containers/user_history'

const routes = (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter} />
      <Route path="/history" component={UserHistory} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes