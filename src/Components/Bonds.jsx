import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const Bonds = ({ onNavigate }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">Bonos</Typography>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6">¿Qué es un bono?</Typography>
        <Typography>Un bono es...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Tipos de bonos</Typography>
        <Typography>Existen varios tipos de bonos...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Cómo funcionan los bonos</Typography>
        <Typography>Los bonos funcionan...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Ejemplos de bonos</Typography>
        <Typography>Un ejemplo de bono es...</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={() => onNavigate('main')}>
        Atrás
      </Button>
    </Box>
  );
};

export default Bonds;
