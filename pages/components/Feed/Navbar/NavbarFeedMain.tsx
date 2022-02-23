import React, { useState } from 'react';
import NavbarMenu from './NavbarMenu';
import NavbarDrawer from './NavbarDrawer';
import Link from 'next/link';
import { useSession } from 'next-auth/react';


const Navbar: React.FC = () => {

  const session = useSession<boolean>();
  const img: string = session.data?.user?.image;
  const name: string = session.data?.user?.name;
  const email: string = session.data?.user?.email;
  const id: string = session.data?.user?.id
  const isauthenticated: "authenticated" | "unauthenticated" | "loading" = session.status

  
  return (
    <React.Fragment>
      <header className=' bg-[#0d0d0d] text-gray-50  py-5 flex flex-col shadow-lg' id='top'>
        <div className='flex items-center justify-between w-[90%] lg:px-48 md:px-10 mx-auto'>
          <Link href="/feed/memes">
            <div className='flex items-center cursor-pointer'>
              <img src="/logo Bg.png" alt="" className='w-12' />
              <span className='ml-5 font-bold lg:text-2xl text-xl font-serif'>Meme Media</span>
            </div>
          </Link>
          <input type="text" className=' bg-slate-800 rounded-full text-lg h-9 px-4 lg:w-[40%] hidden md:block' placeholder='Search Meme 😃' />
          {isauthenticated === "authenticated" ? (
            <NavbarMenu
              name={name}
              email={email}
              img={img}
              isauthenticated={isauthenticated}
            />
          ) : (
            <Link href="/auth/signin">
            <button className='border-2 border-gray-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-700 transition-all'>SignIn</button>
            </Link>
          )}
          {/* Menu List Code */}
          {/* Drawer for  Mobile Devices */}
          <NavbarDrawer
            name={name}
            email={email}
            img={img}
            isauthenticated={isauthenticated} />
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
