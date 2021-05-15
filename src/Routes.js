import React from 'react'
// react router
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Emoji from './Emoji'
// pages
import Home from './Home'
import EventHandler from './tutorial/0-basics/EventHandler'
import FirstComponent from './tutorial/0-basics/FirstComponent'
import HookIntro from './tutorial/0-basics/HookIntro'
import JavascriptES6 from './tutorial/0-basics/JavascriptES6'
import JSXIntro from './tutorial/0-basics/JSXIntro'
import NestedComponents from './tutorial/0-basics/NestedComponents'
import SimpleProps from './tutorial/0-basics/Props'
import SimpleList from './tutorial/0-basics/SimpleList'
import SimpleListTutorial from './tutorial/0-basics/SimpleList/Tutorial'
import VirtualDom from './tutorial/0-basics/VirtualDom'
import UseStateOverview from './tutorial/1-useState/Overview'
import UseStateTutorial from './tutorial/1-useState/Tutorial'
import UseEffectOverview from './tutorial/2-useEffect/Overview'
import UseEffectTutorial from './tutorial/2-useEffect/Tutorial'
import FormsOverview from './tutorial/4-forms/Overview'
import FormsTutorial from './tutorial/4-forms/Tutorial'
import UseRefOverview from './tutorial/5-useRef/Overview'
import UseRefTutorial from './tutorial/5-useRef/Tutorial'
import UseReducerOverview from './tutorial/6-useReducer/Overview'
import UseReducerTutorial from './tutorial/6-useReducer/Tutorial'

const Routes = () => {
  return (
    <Router>
      <Link to="/" style={{ position: 'absolute', top: 20, left: 20 }}>
        <h2>
          <Emoji icon="🏠" />
        </h2>
      </Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/virtual-dom">
          <VirtualDom />
        </Route>
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

        <Route path="/event-handler">
          <EventHandler />
        </Route>

        <Route path="/ec6">
          <JavascriptES6 />
        </Route>

        <Route
          path="/simple-list"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={SimpleList} exact />
              <Route path={`${url}/tutorial`} component={SimpleListTutorial} />
            </>
          )}
        />

        {/* AdvancedRoutes */}
        <Route path="/hooks">
          <HookIntro />
        </Route>

        <Route
          path="/use-state"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={UseStateOverview} exact />
              <Route path={`${url}/tutorial`} component={UseStateTutorial} />
            </>
          )}
        />
        <Route
          path="/use-effect"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={UseEffectOverview} exact />
              <Route path={`${url}/tutorial`} component={UseEffectTutorial} />
            </>
          )}
        />

        <Route
          path="/forms"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={FormsOverview} exact />
              <Route path={`${url}/tutorial`} component={FormsTutorial} />
            </>
          )}
        />

        <Route
          path="/use-ref"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={UseRefOverview} exact />
              <Route path={`${url}/tutorial`} component={UseRefTutorial} />
            </>
          )}
        />

        <Route
          path="/use-reducer"
          render={({ match: { url } }) => (
            <>
              <Route path={`${url}/`} component={UseReducerOverview} exact />
              <Route path={`${url}/tutorial`} component={UseReducerTutorial} />
            </>
          )}
        />

        <Route path="*">
          <p>Unknown page :(</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
