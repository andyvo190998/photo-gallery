import { IconButton, Menu, MenuItem, Zoom } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    return;
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex justify-between">
      <p className="cursor-pointer font-light text-stone-500 text-2xl">
        ANDY GALLERY
      </p>
      <div className="sm:hidden block">
        <IconButton onClick={handleClick}>
          {open ? (
            <Zoom in={open} style={{ transitionDelay: open ? '500ms' : '0ms' }}>
              <CloseIcon />
            </Zoom>
          ) : (
            <Zoom
              in={!open}
              style={{ transitionDelay: !open ? '500ms' : '0ms' }}
            >
              <MenuIcon />
            </Zoom>
          )}
        </IconButton>
      </div>
      <div className="gap-4 sm:flex hidden">
        <p
          className="flex justify-center items-center cursor-pointer hover:underline hover:text-red-600 text-stone-500 font-light"
          onClick={handleClick}
        >
          PORTFOLIOS <ExpandMoreIcon />
        </p>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem sx={{ fontWeight: '300' }} onClick={handleClose}>
            FOOD + DRINK
          </MenuItem>
          <MenuItem sx={{ fontWeight: '300' }} onClick={handleClose}>
            INSIDE + OUTSIDE
          </MenuItem>
          <MenuItem sx={{ fontWeight: '300' }} onClick={handleClose}>
            PORTRAIT
          </MenuItem>
          <MenuItem sx={{ fontWeight: '300' }} onClick={handleClose}>
            ILLUSTRATION
          </MenuItem>
        </Menu>
        <p className="flex justify-center items-center cursor-pointer hover:underline hover:text-red-600 text-stone-500 font-light">
          ABOUT
        </p>
        <p className="flex justify-center items-center cursor-pointer hover:underline hover:text-red-600 text-stone-500 font-light">
          BLOG
        </p>
        <p className="flex justify-center items-center cursor-pointer hover:underline hover:text-red-600 text-stone-500 font-light">
          VIDEOS
        </p>
        <p className="flex justify-center items-center cursor-pointer hover:underline hover:text-red-600 text-stone-500 font-light">
          <InstagramIcon />
        </p>
        <p className="flex justify-center items-center cursor-pointer hover:underline hover:text-blue-600 text-stone-500 font-light">
          <LinkedInIcon />
        </p>
        <p className="flex justify-center items-center cursor-pointer hover:underline hover:text-blue-600 text-stone-500">
          <FacebookIcon />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
