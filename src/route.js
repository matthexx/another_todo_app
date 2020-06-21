import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home'
import Todo from '../src/pages/Todo'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
