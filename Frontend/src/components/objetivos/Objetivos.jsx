import React from 'react';
import { Box, Typography } from '@mui/material';
import {data} from '../../assets/objetivos.json'

const CuadroDeObjetivos = () => {
  return (
    <Typography sx={{
        top: '585px',
        left: '16px',
        padding: '8px 0px 16px 0px',
        gap: '8px',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'green', 
        
       
      }}>
    <Box>
      <Typography variant="h3" 
      sx={{
        gap: '0px',
        opacity: '0px',
        textAlign: 'center',
        }}>
        Objetivos de Ubuntu
      </Typography>
      <Typography variant='p' sx={{
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '20px'}}>
      
      <ul>
        {data.map((objetivo,index)=> (
          <Typography sx={{ margin: '20px'}}>
            <li id={index}>{objetivo.content}</li>
          </Typography>
          ))}
       </ul>
       </Typography>
       
    </Box>
   </Typography> 
  
  );
};

export default CuadroDeObjetivos;