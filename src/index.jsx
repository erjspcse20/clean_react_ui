import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import allReducers from './reducers';

import Home from "./containers/home/Home";
import List from "./containers/home/List";
const isDevelopmentMode = (process.env.NODE_ENV !== 'production');
const history = createBrowserHistory();
const middleware = routerMiddleware(history);
let store = null;
if (isDevelopmentMode) {
    store = createStore(
        allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(middleware, thunk),
        );
} else {
    store = createStore(
        allReducers,
        applyMiddleware(middleware, thunk),
    );
}
ReactDOM.render(
<Provider  store={store}>
        <BrowserRouter basename="/">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/list" exact component={List} />
            </Switch>
        </BrowserRouter>
 </Provider>, document.getElementById('root'));
