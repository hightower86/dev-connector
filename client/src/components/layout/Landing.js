import React from 'react';

const Landing = () => {
  return (
    <div className='flex container mx-auto rounded-lg  h-64 bg-gray-500 my-8 text-center'>
      <div className='flex flex-col  justify-center mx-auto'>
        <h1 className=' text-5xl mx-auto'>Developer Connector</h1>
        <p className='text-lg'>
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </p>
        <div className='flex self-center'>
          <button className='py-1 px-4 m-3 bg-green-400'>Sign Up</button>
          <button className='py-1 px-4 m-3 bg-white'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
