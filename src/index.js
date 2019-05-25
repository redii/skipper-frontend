// React
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch } from 'react-router-dom'
import history from 'utils/history'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'
import { saveState, loadState } from 'utils/localStorage'

// Utils
import IndexRoutes from './indexRoutes'
import * as serviceWorker from 'utils/serviceWorker'

// CSS
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/antd.css'

const persistedState = loadState()
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk)
)

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  })
})

window.store = store  // ### FOR TESTING ###

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <IndexRoutes />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
