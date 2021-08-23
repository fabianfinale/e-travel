import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cover from './components/Cover';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

const Routes = () => {
  return (
    <Switch>
      <Route path='/home' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route exact path='/' component={Cover} />
    </Switch>
  );
};

export default Routes;
