import React from 'react';

const Navbar = ({ mode }) => {
  return (
    <nav className={`p-4 ${mode ? 'bg-gray-800  text-white' : 'bg-white text-black'}`}>
      <ul className='flex space-x-4'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Services</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
