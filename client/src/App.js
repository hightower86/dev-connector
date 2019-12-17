import React, { Fragment } from 'react';
import './css/tailwind.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

const App = () => {
  return (
    <Fragment>
      <Navbar className='' />
      <Landing />
    </Fragment>
  );
};

export default App;
