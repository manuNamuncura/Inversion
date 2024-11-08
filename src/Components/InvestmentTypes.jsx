import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const InvestmentTypes = ({ onNavigate }) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">Tipos de Inversión</Typography>
      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6">Acciones</Typography>
        <Typography>Las acciones son...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Bonos</Typography>
        <Typography>Los bonos son...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Fondos Mutuos</Typography>
        <Typography>Los fondos mutuos son...</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Inversiones alternativas</Typography>
        <Typography>Las inversiones alternativas...</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={() => onNavigate('bonds')}>
        Siguiente
      </Button>
      <Button variant="outlined" sx={{ marginLeft: '10px' }} onClick={() => onNavigate('main')}>
        Atrás
      </Button>
    </Box>
  );
};

export default InvestmentTypes;
