import React from 'react'
import { TextField, Box } from '@mui/material';
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextWrapper } from '../Context/ContextWrapper';
import Typography from '@mui/material/Typography';


function EditProfile() {
  const navigate = useNavigate();
  const {user} = useContext(ContextWrapper);
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",backgroundColor:"#000000",height:"100vh",width:"100vw",position:"absolute",top:"0", left:"0", right:"0" }}>
      <Box sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 1,
      width: '100%'}}>
        <ArrowBackIcon sx={{color:'white',top:20,left:10,fontSize:'30px',fontWeight:'bold'}} onClick={()=>navigate(-1)}/>
        <Typography variant="h4" sx={{marginTop:"5vh",marginLeft:"1vw",fontWeight:"bold",color:'white',top:20,left:80}}>Edit Profile</Typography>
        <Typography  sx={{marginLeft:"1vw",color:'grey'}}>Below are your profile details</Typography>
      </Box>
      <Box sx={{
        marginTop:"25vh",
        marginLeft:"1.5vw",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%'}}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Button sx={{border: '2px solid white',marginTop:"30px",marginLeft:"20px",backgroundColor:"black",color:"white",borderRadius:"11px",height:"8vh"}} variant="outlined">Change Photo</Button>
      </Box>
      <Box sx={{
        marginTop:"4vh",
        marginLeft:"1.5vw",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap:3,
        width: '100%'}}
      >
        <TextField sx={{
          width:"95vw",
          height:"8vh",
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: '#1976d2',  
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            }
          },
          '& .MuiInputLabel-root': {
            color: 'white'
          },
          '& .MuiOutlinedInput-input': {
            color: 'white'
          }
        }} 
          label="Your Name" 
          color="secondary" 
          focused
       />
        <TextField sx={{
          width:"95vw",
          height:"8vh",
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            }
          },
          '& .MuiInputLabel-root': {
            color: 'white'
          },
          '& .MuiOutlinedInput-input': {
            color: 'white'
          }
        }} 
        label="Mobile no."
        color="secondary" 
        focused />
      </Box>
      <Box sx={{
        marginTop:"4vh",
        marginLeft:"3vw",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap:0,
        width: '100%'}}
      >
        <Typography sx={{color:"grey"}}>The email associated with your account is:</Typography>
        <Typography sx={{color:"white"}}>{user.email}</Typography>
      </Box>
      <Box sx={{
        marginTop:"4vh",
        marginLeft:"2vw",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap:0,
        width: '100%'}}
      >
        <Button variant="outlined" sx={{border: '2px solid white',height:"8vh",borderRadius:"16px",backgroundColor:"black",color:"white",width:"8vw"}}>Cancel</Button>
        <Button variant="contained" sx={{height:"8vh",borderRadius:"16px",backgroundColor:"blue",marginLeft:"75.3vw"}}>Save Changes</Button>
      </Box>
    </div>
  )
}

export default EditProfile