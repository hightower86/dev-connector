import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      //console.log('Passwords do not match', 'danger');
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Fragment>
      <form
        className='container mx-auto mt-10 w-full max-w-sm'
        onSubmit={e => onSubmit(e)}
      >
        <h2 className='text-3xl mb-6 text-center text-gray-600'>
          Register a new User
        </h2>
        <div className='md:flex md:items-center mb-6'>
          <input
            className='bg-gray-200 appearance-none border-2 
            border-gray-200 rounded w-full py-2 px-4 text-gray-800 
            leading-tight focus:outline-none focus:bg-white 
            focus:border-teal-500  shadow-md'
            name='name'
            type='text'
            value={name}
            placeholder='Name'
            onChange={e => onChange(e)}
          />
        </div>
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
          />
          <p className='mt-1 text-xs'>
            This site uses Gravatar. So if you want a profile image, use a
            gravatar email.
          </p>
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
        <div className='md:flex md:items-center mb-6'>
          <input
            className='bg-gray-200 appearance-none border-2 
            border-gray-200 rounded w-full py-2 px-4 
            text-gray-800 leading-tight 
            focus:outline-none focus:bg-white 
            focus:border-teal-500 shadow-md'
            name='password2'
            type='password'
            value={password2}
            onChange={e => onChange(e)}
            minLength='6'
            placeholder='Confirm password'
          />
        </div>

        <div className='md:flex md:items-center'>
          {/* <div className='md:w-1/3'></div> */}
          <div className='md:w-2/3'>
            <button
              className='shadow  bg-teal-500 hover:bg-teal-400 
              focus:shadow-outline focus:outline-none text-white 
              py-2 px-3 rounded '
              type='submit'
            >
              Register
            </button>
            <p className='mt-4'>
              Already have an account?{' '}
              <Link to='/login' className='text-teal-600'>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};
export default connect(null, { setAlert, register })(Register);
