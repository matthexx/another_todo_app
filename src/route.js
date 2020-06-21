import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Todo from '../src/pages/Todo'
import Header from '../src/component/Header';
import Footer from "./component/Footer";


export default function App() {
  const [ user, setUser] = React.useState('')
  return (
    <Router>
      <div>
        <Header user={user} />
        <Switch>
          <Route path="/todo">
          {!user ? <Redirect to="/" /> : <Todo />}
          </Route>
          <Route path="/">
            <Home setUser={setUser} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
