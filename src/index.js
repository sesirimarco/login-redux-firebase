import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './redux/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from '../src/redux/middleware/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    todoApp,
    composeEnhancers(applyMiddleware(logger, thunk))
  )
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);