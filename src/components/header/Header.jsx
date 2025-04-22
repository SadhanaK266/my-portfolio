import React from 'react'
import "./Header.scss"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';



export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200,height:'100%',background:'rgb(30, 30, 30)',color:'white' }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'About', 'Skills', 'Projects','Experience'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{
              transition: 'transform 0.2s ease,color 0.2s ease',
              '&:hover':{
                color:'rgb(200,0,200)',transform:'scale(1.02)'
              }
            }}>
              <ListItemIcon>
                <HomeIcon sx={{color:'white'}}/>
              </ListItemIcon>
      
              <ListItemText primary={text} primaryTypographyProps={{fontFamily:'poppins'}}/>
            </ListItemButton>
          </ListItem>
          
        ))}
      </List>
      
    </Box>
  );
  return (
    <>
      <header>
        <div className='header__left'>
          <h1>Sadhana K.</h1>
        </div>
        <div className='header__right'>
          <p>Home</p>
          <p>About</p>
          <p>Skills</p>
          <p>Projects</p>
          <p>Experience</p>
          <button>Contact</button>
        </div>
        <div className='menu-drawer'>
          <Button onClick={toggleDrawer(true)}><MenuIcon sx={{color:'rgb(200, 0, 200)'}}/></Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>

      </header>

    </>
  )
}
