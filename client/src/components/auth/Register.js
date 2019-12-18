import React, { Fragment, useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;
  return (
    <Fragment>
      <form className='container mx-auto mt-10 w-full max-w-sm'>
        <div className='md:flex md:items-center mb-6'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  shadow-md'
            id='inline-full-name'
            type='text'
            value={name}
            placeholder='Name'
          />
          {/* </div> */}
        </div>
        <div className='md:flex md:items-center mb-6'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  shadow-md'
            id='inline-email'
            type='text'
            placeholder='Email'
          />
        </div>
        <div className='md:flex md:items-center mb-6'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  shadow-md'
            id='inline-username'
            type='password'
            minLength='6'
            placeholder='Password'
          />
        </div>
        <div className='md:flex md:items-center mb-6'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 shadow-md'
            id='inline-username2'
            type='password'
            minLength='6'
            placeholder='Confirm password'
          />
        </div>

        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='button'
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
