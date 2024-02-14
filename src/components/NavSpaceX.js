import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const NavSpaceX = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: 'dodgerblue' }}>
        <Link to="/" style={{ flexGrow: 1 }}>
          <img src="https://1000logos.net/wp-content/uploads/2020/09/SpaceX-Logo.png" alt="SpaceX Logo" style={{ maxWidth: 120 }} />
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default NavSpaceX
