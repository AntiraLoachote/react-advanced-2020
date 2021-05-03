import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// pages
import Home from './Home'
import FirstComponent from './tutorial/0-basics/FirstComponent'
import JSXIntro from './tutorial/0-basics/JSXIntro'
import NestedComponents from './tutorial/0-basics/NestedComponents'
import SimpleProps from './tutorial/0-basics/Props'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <BasicRoutes />
        <AdvancedRoutes />
        <Route path="*">
          <p>Unknown page :(</p>
        </Route>
      </Switch>
    </Router>
  )
}
function BasicRoutes() {
  return (
    <>
      <Route path="/first-component">
        <FirstComponent />
      </Route>

      <Route path="/jsx">
        <JSXIntro />
      </Route>
      <Route path="/nested">
        <NestedComponents />
      </Route>

      <Route path="/props">
        <SimpleProps />
      </Route>
    </>
  )
}

function AdvancedRoutes() {
  return (
    <>
      <Route path="/first-component">
        <FirstComponent />
      </Route>

      <Route path="/jsx">
        <JSXIntro />
      </Route>
      <Route path="/nested">
        <NestedComponents />
      </Route>

      <Route path="/props">
        <SimpleProps />
      </Route>

      <Route path="*">
        <p>Unknown page :(</p>
      </Route>
    </>
  )
}

export default Routes
