import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
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
      console.log('Passwords do not match');
    } else {
      const newUser = {
        name,
        email,
        password
      };

      try {
        const config = { headers: { 'Content-Type': 'application/json' } };

        const body = JSON.stringify(newUser);

        const res = await axios.post('/api/users', body, config);

        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

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

export default Login;
