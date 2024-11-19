import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Shield,
  Info,
  AlertTriangle,
  GraduationCap,
  Scale,
  Lock,
  ShieldCheck,
  UserCheck,
  BarChart2,
} from "lucide-react";

export default function Regulacion() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Regulaciones y Cumplimientos del Mercado Financiero
      </Typography>

      <Grid container spacing={3}>
        {/* Tarjeta 1 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Box display="flex" alignItems="center" gap={1}>
                  <Shield className="icon" />
                  Regulaciones clave para la seguridad del inversor
                </Box>
              }
            />
            <CardContent>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <UserCheck className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Registro y supervisión de actores del mercado"
                    secondary={
                      <ul>
                        <li>
                          Entidades deben estar registradas y cumplir estándares
                          de la CNV.
                        </li>
                        <li>
                          Verificar autorización del intermediario en el sitio
                          oficial de la CNV.
                        </li>
                      </ul>
                    }
                  />
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Info className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Información transparente"
                    secondary={
                      <ul>
                        <li>
                          Empresas cotizantes deben proporcionar información
                          financiera detallada.
                        </li>
                        <li>Permite tomar decisiones con datos reales.</li>
                      </ul>
                    }
                  />
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <AlertTriangle className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Prevención de fraudes"
                    secondary="Normas para identificar y sancionar actividades fraudulentas."
                  />
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <GraduationCap className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Educación financiera"
                    secondary={
                      <ul>
                        <li>
                          Programas para que inversores identifiquen riesgos y
                          oportunidades.
                        </li>
                        <li>
                          Recursos disponibles en el sitio oficial de la CNV.
                        </li>
                      </ul>
                    }
                  />
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Scale className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Protección de los derechos del inversor"
                    secondary={
                      <ul>
                        <li>Mecanismos para resolver conflictos.</li>
                        <li>CNV actúa como árbitro en casos de reclamos.</li>
                      </ul>
                    }
                  />
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Lock className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Custodia de activos"
                    secondary={
                      <ul>
                        <li>
                          Garantía de custodia segura de activos de inversores.
                        </li>
                        <li>
                          Separación de activos de clientes y de la entidad
                          financiera.
                        </li>
                      </ul>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta 2 */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader
              title={
                <Box display="flex" alignItems="center" gap={1}>
                  <ShieldCheck className="icon" />
                  Cumplimientos exigidos a los participantes del mercado
                </Box>
              }
            />
            <CardContent>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <Shield className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Normativa AML/CFT"
                    secondary={
                      <ul>
                        <li>
                          Implementación de procedimientos para prevenir lavado
                          de activos y financiamiento del terrorismo.
                        </li>
                        <li>
                          Proceso "Conozca a su Cliente" (KYC) obligatorio.
                        </li>
                      </ul>
                    }
                  />
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <BarChart2 className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Control de riesgos"
                    secondary={
                      <ul>
                        <li>Informes periódicos sobre gestión de riesgos.</li>
                        <li>
                          Productos ajustados al perfil de riesgo del cliente.
                        </li>
                      </ul>
                    }
                  />
                </ListItem>

                <ListItem alignItems="flex-start">
                  <ListItemIcon>
                    <GraduationCap className="icon" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Capacitación de agentes"
                    secondary={
                      <ul>
                        <li>
                          Certificaciones específicas otorgadas por la CNV.
                        </li>
                        <li>Garantía de conocimientos técnicos adecuados.</li>
                      </ul>
                    }
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
