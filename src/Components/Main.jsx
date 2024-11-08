import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const Main = ({ onNavigate }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">Conceptos Básicos de Inversión</Typography>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6">¿Qué es la inversión?</Typography>
        <Typography>La inversión es...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Tipos de inversión</Typography>
        <Typography>Existen varios tipos...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Riesgos y beneficios</Typography>
        <Typography>Es importante entender...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Glosario</Typography>
        <Typography>El glosario es...</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={() => onNavigate('investmentTypes')}>
        Siguiente
      </Button>
      <Button variant="outlined" sx={{ marginLeft: '10px' }} onClick={() => onNavigate('home')}>
        Atrás
      </Button>
    </Box>
  );
};

export default Main;
