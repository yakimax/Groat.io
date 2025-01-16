import React from 'react';
import { Box, Typography, Card, CardContent ,CardMedia,TextField} from '@mui/material';
import Grid from '@mui/material/Grid2';
import img from '../assets/img.png'
import { useNavigate } from 'react-router-dom';
import { ContextWrapper } from '../Context/ContextWrapper.js';
import { useContext, useEffect } from 'react';

export default function Catalog() {
  const navigate = useNavigate();
  const {value,setValue} = React.useContext(ContextWrapper);
  const courses = [
    { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming' },
    { id: 2, title: 'Web Development', description: 'Full stack web development course' },
    { id: 3, title: 'Data Structures', description: 'Understanding fundamental data structures' },
  ];
  useEffect(()=>{
    console.log(value);
  },[value])

  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      paddingTop: '0.1rem',
      backgroundColor: 'background.default',
      padding: '0.1rem'
    }}>
      <Typography 
        variant="h5" 
        sx={{
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
        Courses:
      </Typography>
      <TextField 
        placeholder="Search courses..."
        variant="outlined"
        sx={{
          width: '100%',
          marginBottom: '2rem',
          backgroundColor: '#2c2c2c',
          borderRadius: '50px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
            '&:hover fieldset': {
              border: 'none',
            },
            '&.Mui-focused fieldset': {
              border: 'none',
            }
          },
          '& .MuiInputBase-input': {
            color: 'white',
            '&::placeholder': {
              color: 'white',
              opacity: 1,
              fontSize:'1.2rem'
            }
          }
        }}
      />
      <Grid container spacing={2} columns={12}>
        {courses.map((course) => (
          <Grid onClick={()=>{setValue('Lecture')}} size={{xs:12}} key={course.id}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor:'#2c2c2c'
            }}>
              <CardMedia
                component="img"
                sx={{ 
                  width: '12%',
                  objectFit: 'cover',
                  padding: '1rem',
                  borderRadius: '24px',
                  '& img': {
                    borderRadius: '24px'
                  }
                }}
                image={img}
                alt={course.title}
              />
              <CardContent sx={{ 
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <Typography variant="h6" component="div" sx={{ color: 'white',textAlign:'left' }}>
                  {course.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
