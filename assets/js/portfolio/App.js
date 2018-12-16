import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import Landing from './pages/landing.js'
import About from './pages/about.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <div>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames={'fade'}>
                  <Switch location={location}>
                    <Route exact path="/" component={Landing} />
                    <Route path="/About" component={About} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </Router>
    )
  }
}

