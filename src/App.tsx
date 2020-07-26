import React from 'react';
import './App.scss';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavigation />
        <footer>
          <div><small>Icons made by <a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">xnimrodx</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small></div>
        </footer>
      </Router>
    </div>

  );
}

export default App;
