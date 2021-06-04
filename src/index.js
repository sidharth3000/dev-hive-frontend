import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
 

import {Provider} from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'

import authReducer from './store/reducers/auth';
import userReducer from './store/reducers/user'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    
);

ReactDOM.render (app,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
