import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { Provider } from 'react-redux' // connect
import { createStore } from 'redux'
import { searchRobots } from './reducers'

const store = createStore(searchRobots) // createStore(rootReducer) 현재 reducer는 하나이므로 searchRobots을 넣는다

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,document.getElementById('root'));
registerServiceWorker();
