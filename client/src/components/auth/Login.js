import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <form
        className='container mx-auto mt-10 w-full max-w-sm'
        onSubmit={e => onSubmit(e)}
      >
        <h2 className='text-3xl mb-6 text-center text-gray-600'>Sign in</h2>

        <div className='mb-4'>
          <input
            className='bg-gray-200 appearance-none border-2 
            border-gray-200 rounded w-full py-2 px-4 
            text-gray-800 leading-tight focus:outline-none 
            focus:bg-white focus:border-teal-500  shadow-md'
            name='email'
            value={email}
            type='text'
            placeholder='Email'
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='md:flex md:items-center mb-6'>
          <input
            className='bg-gray-200 appearance-none border-2 
            border-gray-200 rounded w-full py-2 px-4 
            text-gray-800 leading-tight focus:outline-none 
            focus:bg-white focus:border-teal-500  shadow-md'
            name='password'
            type='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
            placeholder='Password'
          />
        </div>

        <div className='md:flex md:items-center'>
          {/* <div className='md:w-1/3'></div> */}
          <div className='md:w-2/3'>
            <button
              className='shadow  bg-teal-500 hover:bg-teal-400 
              focus:shadow-outline focus:outline-none text-white 
              py-2 px-3 rounded'
              type='submit'
            >
              Login
            </button>
            <p className='mt-4'>
              Do not have an account?{' '}
              <Link to='/register' className='text-teal-600'>
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);
