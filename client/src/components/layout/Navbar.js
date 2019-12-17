import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full p-4 bg-gray-500'>
      <nav className='flex justify-between'>
        <h2 className=' text-lg'>
          <Link to='/'>Logo</Link>
        </h2>
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
      </nav>
    </div>
  );
};

export default Navbar;
