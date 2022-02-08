import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Drawer, } from '@mui/material';
import { ClassNameMap, DefaultTheme, makeStyles, WithStylesOptions } from '@mui/styles';
import { width } from '@mui/system';

const Style = makeStyles<WithStylesOptions<DefaultTheme>>({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "black"
    }
  },
  Drawer: {
    "& .MuiDrawer-paper": {
      backgroundColor: "black",
      borderRadius: "10px 0px 0px 10px",
      width: "80%"
    }
  }
})


const Navbar: React.FC = () => {

  const classes: ClassNameMap<"menu" | "Drawer"> = Style()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [drawer, SetDrawer] = useState<boolean>(false)

  return (
    <React.Fragment>
      <header className='w-screen bg-slate-900 text-gray-50  py-5 flex flex-col'>
        <div className='flex items-center justify-between w-[90%] lg:px-48 md:px-10 mx-auto'>
          <div className='flex items-center'>
            <img src="/logo Bg.png" alt="" className='w-12' />
            <span className='ml-5 font-bold lg:text-2xl text-xl font-serif'>Meme Media</span>
          </div>
          <input type="text" className=' bg-slate-800 rounded-full text-lg h-9 px-4 lg:w-[40%] hidden md:block' placeholder='Search Meme 😃' />

          {/* Menu List Code */}
          <div className='md:block hidden'>

            <button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}

            >
              <Avatar className=' cursor-pointer' />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              className={classes.menu}
            >
              <div>
                <MenuItem onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold">Profile</MenuItem>
                <MenuItem onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold">Favourites</MenuItem>
                <MenuItem onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold">Donwloads</MenuItem>
                <MenuItem onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold">Your Memes</MenuItem>
                <MenuItem onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold">Logout</MenuItem>
              </div>
            </Menu>
          </div>

          {/* Drawer for  Mobile Devices */}
          <div className='md:hidden'>
            <button onClick={(): void => { SetDrawer(true) }}>
              <Avatar className=' cursor-pointer' />
            </button>
            <Drawer
              anchor="right"
              open={drawer}
              onClose={(): void => { SetDrawer(false) }}
              className={classes.Drawer}
            >
              <div className='bg-black flex flex-col'>
                <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Profile</button> <div className='bg-gray-300 h-[1px] w-10/12 mx-auto mt-3'></div>
                <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Favourites</button> <div className='bg-gray-300 h-[1px] w-10/12 mx-auto mt-3'></div>
                <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Donwloads</button>  <div className='bg-gray-300 h-[1px] w-10/12 mx-auto mt-3'></div>
                <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Your Memes</button>  <div className='bg-gray-300 h-[1px] w-10/12 mx-auto mt-3'></div>
                <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Logout</button>
              </div>
            </Drawer>
          </div>
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
