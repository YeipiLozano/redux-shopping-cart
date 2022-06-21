import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Cart from '../pages/cart';
import Home from '../pages/home';
import Header from '../components/header';
import Login from '../pages/login';
import Products from '../pages/products/';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import {useSelector} from 'react-redux';

export const AppRouter = () => {
  const isLoggedIn = useSelector((state) => state.user.user.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Router>
      <Header />
      <div className='main'>
        <Switch>
          <PublicRoute path='/login' component={Login} isAuth={isLoggedIn} />
          <PrivateRoute
            exact
            path='/products'
            component={Products}
            isAuth={isLoggedIn}
          />
          <PrivateRoute
            exact
            path='/cart'
            component={Cart}
            isAuth={isLoggedIn}
          />
          <Redirect to="/login"/>
          {/* <Route exact path='/'>
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
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};
