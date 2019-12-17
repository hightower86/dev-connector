import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/tailwind.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar className='' />
        <Route exact path='/' component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Fragment>
    </Router>
  );
};

export default App;
