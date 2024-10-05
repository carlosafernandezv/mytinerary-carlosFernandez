import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillEnvironment } from 'react-icons/ai';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Contact' },

  ];

  return (

    <div className='bg-[#ff2a51] flex justify-between items-center h-24 mx-auto px-4 text-white '>
      {/* Logo */}
      <div className="text-4xl font-bold flex justify-start items-start">
        <AiFillEnvironment />
        <h1 className='w-full text-3xl font-bold text-[#fff]'>Travel Now!</h1>
      </div>




      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='px-6 py-2 hover:bg-[#fff] rounded-full m-2 cursor-pointer duration-300 hover:text-black hover:font-bold'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-white bg-[#ff2a51] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <div className="text-4xl font-bold flex justify-center items-center m-3">
          <AiFillEnvironment />
        </div>
        <h1 className='w-full text-3xl font-bold text-[#FFF] m-4'>Travel Now!</h1>



        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#fff] duration-300 hover:text-black hover:font-bold cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
