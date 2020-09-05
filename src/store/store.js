import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import * as reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

let loggerMode = false,
    store;

if (loggerMode) {
    const composeEnhancers = composeWithDevTools({
        serialize: true
    });
    store = createStore(
        combineReducers({ ...reducers}),
        composeEnhancers( applyMiddleware( thunkMiddleware, loggerMiddleware )),
    );
} else {
    store = createStore(
        combineReducers({ ...reducers}),
        undefined,
        applyMiddleware( thunkMiddleware )
    );
}

export default store;
