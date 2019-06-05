import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import MainPage from './pages/index';
import DetailPage from './pages/Detail';
import NotFoundPage from './pages/404';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/detail" exact component={DetailPage} />
          <Route path="/404" exact component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
