import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home'
import Todo from '../src/pages/Todo'
import Header from '../src/component/Header';
import Footer from "./component/Footer";


export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
