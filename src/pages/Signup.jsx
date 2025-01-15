import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
   
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword);
  
    
  return (
  <>
    <div style={{backgroundColor:"#000000",height:"100vh",width:"100vw",position:"absolute",top:"0", left:"0", right:"0" }}>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"flex-start",flexDirection:"column",marginLeft:"50px"}}>
        <Typography variant="h4" sx={{fontWeight:"bold" ,marginLeft:"10px",marginTop:"50px"}}>Create account</Typography>
        <TextField InputLabelProps={{
            style: { color: 'white' }
          }}
          inputProps={{
            style: { color: 'white' }
          }}
          label="Full Name"  
          sx={{backgroundColor:"#1a1a1a",borderRadius:"15px",marginLeft:"10px",marginTop:"20px",width:"90vw"}}
        />
        <TextField 
          InputLabelProps={{
            style: { color: 'white' }
          }}
          inputProps={{
            style: { color: 'white' }
          }}
          label="Email Address" 
          sx={{backgroundColor:"#1a1a1a",borderRadius:"15px",marginLeft:"10px",marginTop:"20px",width:"90vw"}}
        />
        <TextField 
          type={showPassword ? 'text' : 'password'}
          InputLabelProps={{
            style: { color: 'white' }
          }}
          inputProps={{
            style: { color: 'white' }
          }}
          label="Password"  
          sx={{backgroundColor:"#1a1a1a",borderRadius:"15px",marginLeft:"10px",marginTop:"20px",width:"90vw"}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword} 
                  edge="end"
                  sx={{ color: 'white' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField 
        type={showConfirmPassword ? 'text' : 'password'}
        InputLabelProps={{
            style: { color: 'white' }
          }}
          inputProps={{
            style: { color: 'white' }
          }}
           label="Confirm Password"  
           sx={{backgroundColor:"#1a1a1a",borderRadius:"15px",marginLeft:"10px",marginTop:"20px",width:"90vw"}}
           InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword} 
                  edge="end"
                  sx={{ color: 'white' }}
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" sx={{backgroundColor:"blue",borderRadius:"15px",marginLeft:"10px",marginTop:"50px",width:"90vw",height:"50px",fontSize:"20px",fontWeight:"bold",fontFamily:"'Poppins', sans-serif"}}>Sign Up</Button>
        <Typography variant="body1" sx={{justifyContent:"center",alignItems:"center",color:"white",marginLeft:"37vw",marginTop:"20px",fontSize:"16px",fontWeight:"bold",fontFamily:"'Poppins', sans-serif"}}>Already have an account? <Link to="/login">Login</Link></Typography>
      </Box>
    </div>

  </>
  )
}

export default Signup