import {
  Route,
  Router,
  Switch
} from 'react-router-dom'
import { AppRoutes } from '../constants'
import Layout from './Layout'
import React from 'react'

const createBrowserHistory = require('history').createBrowserHistory
const App = () => {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <Switch>
        <Route path={AppRoutes.Home.URL} component={Layout} />
      </Switch>
    </Router>
  )
}

export default App
