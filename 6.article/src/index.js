import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CategoryPage from './components/CategoryPage';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import ArticleDetaile from './components/ArticleDetaile';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/OneZero" component={CategoryPage} />
        <Route path="/Article" component={ArticleDetaile} />
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
