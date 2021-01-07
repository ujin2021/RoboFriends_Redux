import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { Provider } from 'react-redux' // connect
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { searchRobots, requestRobots } from './reducers'

const logger = createLogger()
const rootReducer = combineReducers({ searchRobots, requestRobots }) // reducer가 여러개 일 때 root로 묶어서 사용
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)) // 사용할 middleware가 여러개일 땐 순서대로

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,document.getElementById('root'));
registerServiceWorker();
