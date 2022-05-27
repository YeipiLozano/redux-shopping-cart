import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Products} from '../pages/products';
import {Cart} from '../pages/cart';
import {Home} from '../pages/home';
import {Header} from '../components/header';
import {Login} from '../pages/login';

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div className="main">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
