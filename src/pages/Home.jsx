import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import Catalog from './Catalog';
import Lecture from './Lecture';
import Profile from './Profile';
import { ContextWrapper } from '../Context/ContextWrapper.js';
import { useContext } from 'react';


function Home() {
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });
    const {value,setValue} = React.useContext(ContextWrapper);
  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline /> 
    <div>
      {value === 'Catalog' ? <Catalog /> : 
       value === 'Lecture' ? <Lecture /> : 
       value === 'Profile' ? <Profile /> : 
       <Lecture />}

      <Box sx={{bottom : 0,position : 'fixed',left: 0,right: 0,width: '100vw'}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            const labels = ["Catalog", "Lecture", "Profile"];
            const selectedLabel = labels[newValue];
            setValue(selectedLabel);
          }}
          sx={{width : '100%',justifyContent : 'space-around',
            '& .MuiBottomNavigationAction-root': {
            '&.Mui-selected': {
              color: 'white',
            },
            '&:focus': {
              outline : 'none'
            },
            '& .MuiTouchRipple-root': {
                  display: 'none'  
                },
            }}}
        >
            <BottomNavigationAction 
              label="Catalog" 
              icon={<MenuBookIcon sx={{fontSize : '1.7rem'}}/>} 
            />
            <BottomNavigationAction 
              label="Lecture" 
              icon={<BookIcon sx={{fontSize : '1.7rem'}}/>} 
            />
            <BottomNavigationAction 
              label="Profile" 
              icon={<PersonIcon sx={{fontSize : '1.7rem'}}/>} 
            />
        </BottomNavigation>
      </Box>
    </div>
  </ThemeProvider>
  );
}

export default Home