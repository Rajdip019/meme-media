import React, {useState} from 'react';
import { Avatar, Drawer } from '@mui/material';
import { ClassNameMap, DefaultTheme, makeStyles, WithStylesOptions } from '@mui/styles';

const Style = makeStyles<WithStylesOptions<DefaultTheme>>({ //Materia UI Styles for Menu
    Drawer: {
      "& .MuiDrawer-paper": { // This is to only style the Drawer Paper Section
        backgroundColor: "#0d0d0d",
        borderRadius: "10px 0px 0px 10px",
        width: "80%"
      }
    }
  })

const NavbarDrawer : React.FC= () => {
    
    const classes: ClassNameMap<"Drawer"> = Style()
    const [drawer, SetDrawer] = useState<boolean>(false)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClose = () => {
        setAnchorEl(null);
    };

  return (


      <React.Fragment>
                    <div className='md:hidden relative'>
            <button onClick={(): void => { SetDrawer(true) }}>
              <Avatar className=' cursor-pointer' />
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
                <button onClick={handleClose} className="text-white hover:bg-gray-800 transition-all font-semibold text-xl mt-5">Logout</button>
              </div>
          <div className='absolute bottom-5 left-5 text-white flex items-center'>
            <Avatar />
            <div>
            <p className='ml-5 text-lg font-semibold'>Rajdeep Sengupta</p>
            <p className='ml-5 text-gray-200 text-xs'>rajdeeptechbyparts019@gmail.com</p>
            </div>
          </div>
            </Drawer>
          </div>
      </React.Fragment>
  );
};

export default NavbarDrawer;
