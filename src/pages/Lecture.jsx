import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Lecture() {
  return (
    <Container>
      <Box sx={{ padding: '0rem',marginTop:'0rem' }}>
        <Typography variant='h6' sx={{fontWeight:'bold',fontSize:'1rem'}} >
        Select Chapter Below
        </Typography>
        <Card 
          sx={{ 
            maxWidth: '100%',
            margin: '20px auto',
            backgroundColor: '#1a1a1a'
          }}
        >
          <CardContent sx={{ padding: '0',width:'100%' }}>
            <video
              controls
              width="100%"
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              />
            </video>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default Lecture;