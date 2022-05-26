import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            CartLink
          </nav>
        </header>
      </div>
      <Switch>
        <Route exact path='/'>
          Home
        </Route>
        <Route path='/products'>Products</Route>
        <Route path='/cart'>Cart</Route>
      </Switch>
    </Router>
  );
};
