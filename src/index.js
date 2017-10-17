import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from './containers/app';
import Home from './containers/home';
import StationaryShops from './containers/stationary_shops';
import OnlineShops from './containers/online_shops';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="app">
          <BrowserRouter>
              <div>
                <App />
                <Switch>
                    <Route path="/stationary" component={StationaryShops} />
                    <Route path="/online" component={OnlineShops} />
                    <Route path="/" component={Home} />
                </Switch>
              </div>
          </BrowserRouter>
        </div>
    </Provider>
, document.querySelector('.container'));
