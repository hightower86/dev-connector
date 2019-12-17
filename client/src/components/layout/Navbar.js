import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full p-4 bg-gray-500'>
      <nav className='flex justify-between'>
        <h2 className=' text-lg'>Logo</h2>
        <ul className=' flex items-center '>
          <li className='mr-3 uppercase tracking-wide hover:bg-gray-500'>
            Home
          </li>
          <li className='mr-3 uppercase tracking-wide hover:bg-gray-500'>
            About
          </li>
          <li className='mr-3 uppercase tracking-wide hover:bg-gray-500'>
            Contacts
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
