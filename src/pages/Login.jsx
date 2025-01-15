import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Paper } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { IconButton } from '@mui/material'
import { Visibility } from '@mui/icons-material'
import { VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Divider } from '@mui/material'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  console.log(email);
  const handleClickShowPassword = () => setShowPassword((showPassword) => !showPassword);
  useEffect(async ()=>{
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  },[])
  return (
    <div style={{backgroundColor:"#000000",height:"100vh",width:"100vw",position:"absolute",top:"0", left:"0", right:"0" }}>
      <Box sx={{display:"flex", justifyContent:"center",flexDirection:"column" ,position:"absolute",top:"0", left:"0", right:"0" }}>
        <Typography variant="h3" sx={{fontWeight:"bold" ,marginTop:"40px",marginBottom:"40px"}}>Groat.io</Typography>
        <Paper sx={{height:"60vh",backgroundColor:"#1a1a1a",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"16px",width:"90vw",marginLeft:"5vw"}}>
          <Typography variant="h4" sx={{fontWeight:"bold" ,marginTop:"0.1rem",color:"white"}}>Welcome Back</Typography>
          
          <TextField 
          InputLabelProps={{
            style: { color: 'white' }
          }}
          inputProps={{
            style: { color: 'white' }
          }} label="Email" 
          sx={{marginTop:"20px",backgroundColor:"#2c2c2c",borderRadius:"16px",width:"72rem"}}
          onChange={(e)=>{setEmail(e.target.value)}}
          />

          <TextField 
          InputLabelProps={{
            style: { color: 'white' }
          }}
          inputProps={{
            style: { color: 'white' }
          }}
          label="Password" 
          type={showPassword ? 'text' : 'password'}
          sx={{marginTop:"20px",backgroundColor:"#2c2c2c",borderRadius:"16px",width:"72rem"}}
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
          onChange={(e)=>{setPassword(e.target.value)}}
          />

          <Button variant="contained"
           sx={{marginTop:"20px",backgroundColor:"#1373c2",borderRadius:"26px",width:"72rem",height:"50px",fontWeight:"bold",fontSize:"1.5rem"}}
           >Sign In</Button>
           <Typography variant="h6" sx={{marginTop:"20px"}}> <Link style={{color:"white"}} to="/frgtpass">Forgot Password?</Link></Typography>
        </Paper>
        <Divider sx={{"&::before, &::after": { borderColor: "#2c2c2c" },marginTop:"20px",maxWidth:"71rem",marginLeft:"5vw",paddingTop:"15px"}}>OR</Divider>
        <Typography variant="h6" sx={{marginTop:"10px",color:"grey"}}>Don't have an account?</Typography>
          <Typography variant="h5"> <Link style={{color:"white",fontWeight:"bold"}} to="/signup">Sign Up</Link></Typography>
      </Box>
    </div>
  )
}

export default Login