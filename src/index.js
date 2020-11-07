import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Router} from "react-router-dom";
import App from './App'
import Header from "./components/general/header";
import Footer from "./components/general/footer";
import { createStore } from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./reducers/root-reducer";
import history from './history';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Header/>
            <App/>
            <Footer/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
