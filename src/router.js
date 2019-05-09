import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Projects from './Projects/Projects'

const Router = () => (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/projects' component={Projects}/>
  </Switch>
)
export default Router