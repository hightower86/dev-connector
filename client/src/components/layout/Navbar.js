import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import Dashboard from '../dashboard/Dashboard';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  //const propTypes = PropTypes();
  const authLinks = (
    <ul className=' flex items-center '>
      <li className='mr-3 uppercase tracking-wide hover:text-white cursor-pointer'>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li className='mr-3 uppercase tracking-wide hover:text-white cursor-pointer'>
        <Link to='/' onClick={logout}>
          Logout
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className=' flex items-center '>
      <li className='mr-3 uppercase tracking-wide hover:text-white cursor-pointer'>
        <Link to='!#'>Developers</Link>
      </li>
      <li className='mr-3 uppercase tracking-wide hover:text-white cursor-pointer'>
        <Link to='/register'>Register</Link>
      </li>
      <li className='mr-3 uppercase tracking-wide hover:text-white cursor-pointer'>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <div className='w-full p-4 bg-gray-500'>
      <nav className='flex justify-between'>
        <h2 className=' text-lg'>
          <Link to='/'>Logo</Link>
        </h2>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });
export default connect(mapStateToProps, { logout })(Navbar);
