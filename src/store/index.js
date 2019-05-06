import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers';

let middleware = [promiseMiddleware];

export default createStore(rootReducer, applyMiddleware(...middleware));
