import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu,MenuItem } from '@mui/material';
import { useState } from 'react';

const HeaderMenu=(props)=>{

    const [open, setOpen]=useState(null);
    // const [OpenOnProfile, setOpenOnProfile]=useState(null);

    const handleClose=()=>{
        setOpen(null);
    }

    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }

  
    return (
        <>
        <MoreVertIcon onClick={handleClick} />
        <Menu
        id="basic-menu"
        anchorEl={open}
        open={open}
        keepMounted
        onClose={handleClose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'    //change pos with rep to morezvert i.e :

        }}
      >
        <MenuItem onClick={()=>{handleClose(); props.setOpenDrawer(true);}}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </>

    )
}
export default HeaderMenu;