import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CategoryPage from "./CategoryPage";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ArticleDetaile from "./ArticleDetaile";
import Coment from "./Coment";
import Register from "./Register";
import Login from "./Login";
import WriteStories from "./WriteStories";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/OneZero" component={CategoryPage} />
    <Route path="/Article" component={ArticleDetaile} />
    <Route path="/Coment" component={Coment} />
    <Route path="/Register" component={Register} />
    <Route path="/Login" component={Login} />
    <Route path="/WriteStories" component={WriteStories} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
