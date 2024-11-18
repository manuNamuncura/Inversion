import React, { useState } from "react";
import { Card, CardContent, CardHeader, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from "@mui/material";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

const datosMerval = [
    { fecha: "09:30", valor: 100000 },
    { fecha: "10:00", valor: 100500 },
    { fecha: "10:30", valor: 101000 },
    { fecha: "11:00", valor: 100800 },
    { fecha: "11:30", valor: 101200 },
    { fecha: "12:00", valor: 101500 },
    { fecha: "12:30", valor: 101300 },
    { fecha: "13:00", valor: 101800 },
];

const datosAcciones = [
    { nombre: "YPF", cambio: 3.5 },
    { nombre: "Banco Galicia", cambio: 2.8 },
    { nombre: "Pampa Energía", cambio: -1.5 },
    { nombre: "Banco Macro", cambio: 2.1 },
    { nombre: "Telecom Argentina", cambio: -0.8 },
];

const oportunidades = [
    { accion: "Ternium Argentina", razon: "Fuerte demanda de acero", potencial: "+5.2%" },
    { accion: "Cresud", razon: "Aumento de exportaciones agrícolas", potencial: "+4.8%" },
    { accion: "Transportadora de Gas del Sur", razon: "Nuevos proyectos de infraestructura", potencial: "+3.9%" },
];

export default function Tendencias() {
    const [mervalActual] = useState(101800);
    const [cambioMerval] = useState(1.8);
    return (
    <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
        Dashboard del Mercado Argentino
        </Typography>
        {/* Índice Merval */}
        <Card sx={{ marginBottom: 4 }}>
        <CardHeader
            title="Índice Merval"
            subheader={
            <Typography variant="subtitle1" color="textSecondary">
                {mervalActual.toLocaleString("es-AR")}{" "}
                <span style={{ color: cambioMerval >= 0 ? "green" : "red" }}>
                {cambioMerval >= 0 ? "+" : ""}
                {cambioMerval}%
                {cambioMerval >= 0 ? <ArrowUpward fontSize="small" /> : <ArrowDownward fontSize="small" />}
                </span>
            </Typography>
            }
        />
        <CardContent>
            <ResponsiveContainer width="100%" height={200}>
            <LineChart data={datosMerval}>
                <XAxis dataKey="fecha" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="valor" stroke="#3f51b5" strokeWidth={2} dot={false} />
            </LineChart>
            </ResponsiveContainer>
        </CardContent>
        </Card>
        <Grid container spacing={4}>
          {/* Acciones Destacadas */}
        <Grid item xs={12} md={6}>
            <Card>
            <CardHeader title="Acciones Destacadas del Día" />
            <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                <BarChart data={datosAcciones}>
                    <XAxis dataKey="nombre" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="cambio" fill="#ff7043" />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
            </Card>
        </Grid>
        {/* Oportunidades de Mercado */}
        <Grid item xs={12} md={6}>
            <Card>
            <CardHeader title="Oportunidades de Mercado" />
            <CardContent>
                <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Acción</TableCell>
                        <TableCell>Razón</TableCell>
                        <TableCell>Potencial</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {oportunidades.map((oportunidad, index) => (
                        <TableRow key={index}>
                        <TableCell>{oportunidad.accion}</TableCell>
                        <TableCell>{oportunidad.razon}</TableCell>
                        <TableCell sx={{ color: "green" }}>{oportunidad.potencial}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </CardContent>
            </Card>
        </Grid>
        </Grid>
    </Box>
    );
}