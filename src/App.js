import React from 'react';
// import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import Home from './components/Home';
import Reports from './components/Reports';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">> hem</Link>
            </li>
            <li>
              <Link to="/reports/week/1">> redovisning</Link>
            </li>
            <li>
              <Link to="/login">> logga in</Link>
            </li>
            <li>
              <Link to="/register">> skapa användare</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact strict path="/">
              <Header />
              <Home />
          </Route>
          <Route exact strict path="/reports/week/1" component={Reports}/>
          <Route exact strict path="/login" component={Login}/>
          <Route exact strict path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
