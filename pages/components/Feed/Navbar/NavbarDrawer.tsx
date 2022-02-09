import React, { useState } from 'react';
import { Avatar, Drawer } from '@mui/material';
import { ClassNameMap, DefaultTheme, makeStyles, WithStylesOptions } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';


const Style = makeStyles<WithStylesOptions<DefaultTheme>>({ //Materia UI Styles for Menu
  Drawer: {
    "& .MuiDrawer-paper": { // This is to only style the Drawer Paper Section
      backgroundColor: "#0d0d0d",
      borderRadius: "10px 0px 0px 10px",
      width: "80%"
    }
  }
})

type Props = { //Interface of the Prop Passed in this Compnent
  img: string,
  name: string,
  email: string
  isauthenticated: "authenticated" | "unauthenticated" | "loading"
}

const NavbarDrawer: React.FC<Props> = ({img, name, email, isauthenticated}) => {

  const classes: ClassNameMap<"Drawer"> = Style()
  const [drawer, SetDrawer] = useState<boolean>(false)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (


    <React.Fragment>
      <div className='md:hidden relative'>
        {isauthenticated === "authenticated" ? (
        <>
        <button onClick={(): void => { SetDrawer(true) }}>
          <MenuIcon className='w-16 scale-150 cursor-pointer'/>
        </button>
        <Drawer
          anchor="right"
          open={drawer}
          onClose={(): void => { SetDrawer(false) }}
          className={classes.Drawer}
        >
          <div className=' flex flex-col'>
            <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Profile</button> <div className='bg-gray-300 h-[1px] w-10/12 mx-auto mt-3'></div>
            <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Favourites</button> <div className='bg-gray-300 h-[1px] w-10/12 mx-auto mt-3'></div>
            <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Donwloads</button>  <div className='bg-gray-300 h-[1px] w-10/12 mx-auto mt-3'></div>
            <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Your Memes</button>  <div className='bg-gray-300 h-[1px] w-10/12 mx-auto mt-3'></div>
            <button onClick={(): void => {handleClose(); signOut()}} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Logout</button>
          </div>
          <div className='absolute bottom-5 left-5 text-white flex items-center'>
          <Avatar className=' cursor-pointer ring-2 ring-white' src={img} alt={name} sx={{width: 40, height:40}}/>
            <div>
              <p className='ml-5 text-lg font-semibold'>{name}</p>
              <p className='ml-5 text-gray-300 text-xs'>{email}</p>
            </div>
          </div>
        </Drawer>
        </>) : (
          <>
          <Link href="/auth/signin">
          <button className='bg-gray-200 px-4 py-2 rounded-md text-black font-semibold'>SignIn</button>
          </Link>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default NavbarDrawer;
