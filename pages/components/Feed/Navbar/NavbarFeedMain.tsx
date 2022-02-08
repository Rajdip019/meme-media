import React, { useState } from 'react';
import NavbarMenu from './NavbarMenu';
import NavbarDrawer from './NavbarDrawer';


const Navbar: React.FC = () => {

  return (
    <React.Fragment>
      <header className='w-screen bg-[#0d0d0d] text-gray-50  py-5 flex flex-col shadow-lg'>
        <div className='flex items-center justify-between w-[90%] lg:px-48 md:px-10 mx-auto'>
          <div className='flex items-center'>
            <img src="/logo Bg.png" alt="" className='w-12' />
            <span className='ml-5 font-bold lg:text-2xl text-xl font-serif'>Meme Media</span>
          </div>
          <input type="text" className=' bg-slate-800 rounded-full text-lg h-9 px-4 lg:w-[40%] hidden md:block' placeholder='Search Meme 😃' />
          {/* Menu List Code */}
          <NavbarMenu />
          {/* Drawer for  Mobile Devices */}
          <NavbarDrawer />
        </div>
        {/* Input Field For Mobile    */}

        <div className=''>
          <input type="text" className=' bg-slate-800 rounded-full text-lg h-9 px-4 w-[90%] block md:hidden mt-5 mx-auto text-center' placeholder='Search Meme 😃' />
        </div>
      </header>
    </ React.Fragment>
  );
};

export default Navbar;
