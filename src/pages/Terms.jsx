import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Grid2 } from '@mui/material';
import { Box } from '@mui/material';


function Terms() {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{
      marginTop: '0px',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2,
      padding: 2,
      width: '100%'}}>
        <ArrowBackIcon sx={{color:'white',position:'absolute',top:20,left:10,fontSize:'30px',fontWeight:'bold'}} onClick={()=>navigate(-1)}/>
        <Typography variant="h2" sx={{alignItems:'flex-start',color:'white',position:'absolute',top:20,left:80,fontSize:'25px'}}>Privacy and Data Protection Policy</Typography>
      </Box>
    </div>
  )
}

export default Terms