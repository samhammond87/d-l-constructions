import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/sign_in';
import PortalPage from './pages/portal';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/sign_in' component={SigninPage} exact />
        <Route path='/portal' component={PortalPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
