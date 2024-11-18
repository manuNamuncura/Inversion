import React from 'react';
import { Card, CardContent, CardHeader, Typography, Box } from '@mui/material';
import { Briefcase, Landmark, LineChart, Globe, Building2 } from 'lucide-react';

export default function PantallaInversiones() {
  const inversiones = [
    {
      titulo: "Plazo Fijo UVA",
      descripcion: "Combina tasa fija con variación de inflación (UVA)",
      rendimiento: "Hasta 150% de retorno en pesos",
      icono: <Briefcase style={{ height: 32, width: 32, color: '#1976d2' }} />,
    },
    {
      titulo: "Bonos Soberanos",
      descripcion: "Bonos en pesos y dólares (AL30, AL35)",
      rendimiento: "Rendimiento atractivo en 2024",
      icono: <Landmark style={{ height: 32, width: 32, color: '#388e3c' }} />,
    },
    {
      titulo: "Merval y Acciones",
      descripcion: "Índice Merval y acciones argentinas",
      rendimiento: "Cerca del 94% de retorno en pesos",
      icono: <LineChart style={{ height: 32, width: 32, color: '#d32f2f' }} />,
    },
    {
      titulo: "Bonos CER y Bonos Dual",
      descripcion: "Vinculados a la inflación",
      rendimiento: "63% en pesos (Bonos CER)",
      icono: <Briefcase style={{ height: 32, width: 32, color: '#9c27b0' }} />,
    },
    {
      titulo: "Inmuebles y Crowdfunding Inmobiliario",
      descripcion: "Inversión en propiedades locales e internacionales",
      rendimiento: "8-10% anual por alquileres en EE.UU. y Europa",
      icono: <Building2 style={{ height: 32, width: 32, color: '#f57c00' }} />,
    },
    {
      titulo: "Mercados Internacionales",
      descripcion: "Diversificación en mercados externos",
      rendimiento: "Rendimientos estables y protección contra crisis locales",
      icono: <Globe style={{ height: 32, width: 32, color: '#00796b' }} />,
    },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Opciones de Inversión 2024
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 4 }}>
        {inversiones.map((inversion, index) => (
          <Card key={index} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardHeader
              title={<Typography variant="h6">{inversion.titulo}</Typography>}
              avatar={inversion.icono}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {inversion.descripcion}
              </Typography>
              <Typography variant="body1" color="primary">
                Rendimiento: {inversion.rendimiento}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
}
