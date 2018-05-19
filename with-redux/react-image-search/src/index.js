import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import './index.css';
import App from './App.jsx';
import { reducer } from './store';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(promiseMiddleware(), logger));

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
