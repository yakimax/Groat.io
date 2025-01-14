import React from 'react'
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


function Support(props) {
  const navigate = useNavigate();
  return (
    <div>
            <ArrowBackIcon sx={{color:'white',position:'absolute',top:20,left:10,fontSize:'30px',fontWeight:'bold'}} onClick={()=>navigate(-1)}/>
            <Typography variant="h4" sx={{color:'white',position:'absolute',top:20,left:80,fontSize:'25px'}}>Support</Typography>
            <Grid container spacing={2} sx={{
              marginTop: '69px',
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0,
              padding: 0,
              width: '100%'}}>
                <Typography variant="h6" sx={{padding: '5px',marginTop: '0px' }}>Call Us: +91 9876543210</Typography>
                <Typography variant="h6">Request a new course or Raise an issue:</Typography>
                <Input
                  placeholder="Type in here…"
                  sx={{
                    color:'white',
                    '&::before': {
                      display: 'none',
                    },
                    '&:focus-within': {
                      outline: '2px solid white',
                      outlineOffset: '2px',
                    },
                  }}
                />
            </Grid>
    </div>
  )
}

export default Support