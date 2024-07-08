import React from 'react';
import { Box, Typography } from '@mui/material';

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
      lineHeight: '20px'

 }}>
       
        <ul>
        <Typography sx={{ margin: '20px'}}>
          <li>Facilitar a productores o microemprendedores el acceso a microcréditos que les permitan desarrollar sus iniciativas empresariales.</li></Typography>
          <Typography sx={{ margin: '20px'}}><li>Proporcionar financiación a empresas y organizaciones que ejecutan proyectos con objetivos sociales, ambientales y culturales.</li></Typography>
          <Typography sx={{ margin: '20px'}}><li>Ofrecer a potenciales inversores la oportunidad de participar en proyectos con impacto significativo.</li></Typography>
        </ul>
      </Typography>
    </Box>
    </Typography>
  );
};

export default CuadroDeObjetivos;