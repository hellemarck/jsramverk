import React from 'react';
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
