import React from 'react';
import { Box, Stack, Button, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState,useEffect } from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ContextWrapper } from '../Context/ContextWrapper.js'
import { useContext } from 'react'
import { db } from '../Firebase/FirebaseConfig.js';
import { doc, getDoc } from 'firebase/firestore';

function Profile() {
  const navigate = useNavigate();
  const [name,setName] = useState('John Doe');
  const [email,setEmail] = useState('john.doe@example.com');
  const {user} = useContext(ContextWrapper);
  // console.log(user.reloadUserInfo.email);
  useEffect(()=>{
    async function fetchData(){
    const userRef = doc(db,"UserInfo",user.uid);
    const userData = await getDoc(userRef);
    // console.log(userData.data());
    setName(userData.data().Name);
    setEmail(userData.Email);
    }
    fetchData();
  },[user]);
  return (
    <Box sx={{ 
      marginTop: '100px',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2,
      padding: 2,
      width: '100%'
    }}>
      <Avatar 
        alt="Remy Sharp" 
        src="/static/images/avatar/1.jpg" 
        sx={{
          width: 100,
          height: 100
        }}
      />
        <Typography variant="h5" sx={{ fontWeight: 'bold',fontSize:'30px' }}>
           {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {user.reloadUserInfo.email}
        </Typography>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Button 
          endIcon={<KeyboardArrowRight />} 
          variant="contained"
          color="primary"
          onClick={()=>{navigate('/edit-profile')}}
          sx={{height:"65px", width: '100%',display:'flex',justifyContent:'flex-start',alignItems:'center',color:'white',borderRadius:'10px',backgroundColor:'blue' }}
        >
          <AccountCircleIcon sx={{ mr: 1 }}/>
          Edit Profile
        </Button>
        <Button 
          endIcon={<KeyboardArrowRight />} 
          variant="contained"
          color="primary"
          onClick={()=>{navigate('/support')}}
          sx={{height:"65px", width: '100%',display:'flex',justifyContent:'flex-start',alignItems:'center',color:'white',borderRadius:'10px',backgroundColor:'blue' }}
        >
          <HelpOutlineIcon sx={{ mr: 1 }}/>
          Support
        </Button>
        <Button 
          endIcon={<KeyboardArrowRight />} 
          variant="contained"
          color="primary"
          onClick={()=>{navigate('/terms')}}
          sx={{height:"65px", width: '100%',display:'flex',justifyContent:'flex-start',alignItems:'center',color:'white',borderRadius:'10px',backgroundColor:'blue' }}
        >
          <GppMaybeIcon sx={{ mr: 1 }}/>
          Terms of Service
        </Button>
      </Stack>
    </Box>
  );
}

export default Profile;