import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
// need to create a store for the app, reducers, middleware, and dev tools

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
)

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router> 
    </Provider>,
    document.getElementById('root')
)
