import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { ClassNameMap, DefaultTheme, makeStyles, WithStylesOptions } from '@mui/styles';

const Style = makeStyles<WithStylesOptions<DefaultTheme>>({
    menu: {
        "& .MuiPaper-root": {
            backgroundColor: "#0d0d0d"
        }
    },
})

const NavbarMenu: React.FC = () => {


    const classes: ClassNameMap<"menu"> = Style()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default NavbarMenu;
