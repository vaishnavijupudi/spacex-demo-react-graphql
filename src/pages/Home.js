import React from 'react'
import {  Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="home" style={{
        height: '100vh',
        width: '100vw', 
        overflow: 'hidden', 
        position: 'relative',
      }}>
      <img 
        src={'https://sxcontent9668.azureedge.us/cms-assets/assets/AX_3_Splashdown_Drone_20240209_000648_Higher_Res_Upscale_sharpen_Desktop_36389d8611.jpg'} 
        alt="Background" 
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover', 
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <Link to="/upcoming-missions">
        <Button 
            variant="contained" 
            color="primary" 
            sx={{
            position: 'absolute',
            bottom: '45%',
            left: '45%', 
            transform: 'translateX(-50%)',
            '@media (max-width: 600px)': {
              bottom: '55%',
              left: '50%',
              transform: 'translateX(-50%)',
            },
            '@media (min-width: 601px) and (max-width: 1024px)': { 
              bottom: '50%',
              left: '50%',
              transform: 'translateX(-50%)',
            }
            }}
        >
            Upcoming Missions
        </Button>
      </Link>

      <Link to="/launches" >
        <Button 
            variant="contained" 
            color="primary" 
            sx={{
            position: 'absolute',
            bottom: '45%',
            left: '60%',
            transform: 'translateX(-50%)',
            '@media (max-width: 600px)': {
                bottom: '65%',
                left: '50%',
                transform: 'translateX(-50%)',
            },
            '@media (min-width: 601px) and (max-width: 1024px)': { 
              bottom: '70%',
              left: '50%',
              transform: 'translateX(-50%)',
            }
            }}
        >
            All Launches
        </Button>

      </Link>
      
    </div>
    
    </>
    
  )
}

export default Home
