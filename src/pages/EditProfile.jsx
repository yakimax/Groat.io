import React, { useState,useEffect } from 'react'
import { TextField, Box, Container } from '@mui/material';
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextWrapper } from '../Context/ContextWrapper';
import Typography from '@mui/material/Typography';
import { doc } from 'firebase/firestore';
import { db } from '../Firebase/FirebaseConfig.js';
import { setDoc,getDoc } from 'firebase/firestore';

function EditProfile() {
  const navigate = useNavigate();
  const [photo,setPhoto] = useState(null);
  const [name,setName] = useState(null);
  const [mobile,setMobile] = useState(null);
  const {user} = useContext(ContextWrapper);
  useEffect(()=>{
    async function fetchData(){
    const userRef = doc(db,"UserInfo",user.uid);
    const userData = await getDoc(userRef);
    console.log(userData.data());
    setName(userData.data().Name);
    setMobile(userData.data().MobileNo);
    }
    fetchData();
  },[user]);
  const handleSaveChanges =async ()=>{
    const userRef = doc(db,"UserInfo",user.uid);
    await setDoc(userRef,{
      Name:name,
      MobileNo:mobile,
      uid:user.uid
    })
    navigate(-1);
  }
  const handleChangePhoto = ()=>{
    let photo = document.getElementById("file");
    photo.click();
    photo.addEventListener("change",(e)=>{
      setPhoto(e.target.files[0]);
    })
  }
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
        <input type="file" id="file" style={{display:"none"}}/>
        <label htmlFor="file">
          <Button onClick={handleChangePhoto} sx={{border: '2px solid white',marginTop:"30px",marginLeft:"20px",backgroundColor:"black",color:"white",borderRadius:"11px",height:"8vh"}} variant="outlined">Change Photo</Button>
        </label>
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
        <TextField 
        value={name}  
        onChange={(e)=>setName(e.target.value)}
        sx={{
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
          placeholder={user.displayName}
       />
        <TextField 
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
          sx={{
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
        focused 
        />
      </Box>
      <Box sx={{
        marginTop:"4vh",
        marginLeft:"3vw",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap:0,
        width: '100%'}}
      >
        <Container sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:0}}>
          <Typography sx={{color:"grey"}}>The email associated with your account is:</Typography>
          <Typography variant="h6" sx={{color:"white"}}>{user.email}</Typography>
        </Container>
        <Container sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:0,marginLeft:"15vw"}}>
          <Typography sx={{color:"grey"}}>Created on:</Typography>
          <Typography variant="h6" sx={{color:"white"}}>{user.metadata.creationTime}</Typography>
        </Container>
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
        <Button onClick={()=>navigate(-1)} variant="outlined" sx={{border: '2px solid white',height:"8vh",borderRadius:"16px",backgroundColor:"black",color:"white",width:"8vw"}}>Cancel</Button>
        <Button onClick={handleSaveChanges} variant="contained" sx={{height:"8vh",borderRadius:"16px",backgroundColor:"blue",marginLeft:"75.3vw"}}>Save Changes</Button>
      </Box>
    </div>
  )
}

export default EditProfile