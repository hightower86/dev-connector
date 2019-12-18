import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='flex container mx-auto my-8 rounded-lg  h-64 bg-gray-300 shadow-lg text-center'>
      <div className='flex flex-col  justify-center mx-auto'>
        <h1 className=' text-5xl mx-auto'>Developer Connector</h1>
        <p className='text-lg'>
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div className='flex self-center mt-2'>
          <Link to='/register'>
            <button className='py-1 px-4 m-1 bg-green-400'>Sign Up</button>
          </Link>
          <Link to='/login'>
            <button className='py-1 px-4 m-1 bg-white'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
