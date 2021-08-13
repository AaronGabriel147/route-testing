import { BrowserRouter as Router, Switch, Route, useParams, useHistory } from 'react-router-dom';

import './App.css';
import React from 'react';

import Navigation from './components/Navigation';
import Cosmos from './components/Cosmos';
import About from './components/About';
import Home from './components/Home';
import Large from './components/Large'; // Have not used this yet.


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch> {/* As soon as a specific path matches, it uses it and only it. */}

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cosmos" component={Cosmos} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
