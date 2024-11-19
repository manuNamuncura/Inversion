import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Book,
  Public as Globe,
  Build as Tool,
  TrendingUp,
  AccountBalance as Building,
  Group as Users,
  Lightbulb,
} from "@mui/icons-material";

export default function Educacion() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "16px" }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Recursos de Educación Financiera en Argentina
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemIcon>
            <Book />
          </ListItemIcon>
          <Typography>Libros sobre educación financiera</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary='"Pequeño cerdo capitalista" de Sofía Macías' />
            </ListItem>
            <ListItem>
              <ListItemText primary='"Padre Rico, Padre Pobre" de Robert Kiyosaki' />
            </ListItem>
            <ListItem>
              <ListItemText primary='"Cómo salir del pozo" de Sergio Nahuel Cardona' />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemIcon>
            <Globe />
          </ListItemIcon>
          <Typography>Plataformas y comunidades online</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            Cursos de educación financiera:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Platzi" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Udemy" />
            </ListItem>
          </List>
          <Typography variant="subtitle1">YouTube:</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Economía en Zapatillas" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Germán Fermo" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemIcon>
            <Tool />
          </ListItemIcon>
          <Typography>Herramientas para gestión y ahorro</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="Alquilando o Appa" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Precios Claros" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fintonic" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemIcon>
            <TrendingUp />
          </ListItemIcon>
          <Typography>Educación en inversiones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">Brókers locales:</Typography>
          <List>
            <ListItem>
              <ListItemText primary="InvertirOnline" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bull Market Brokers" />
            </ListItem>
          </List>
          <Typography variant="subtitle1">Criptomonedas:</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Ripio" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Binance" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemIcon>
            <Building />
          </ListItemIcon>
          <Typography>Canales gubernamentales</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="ANSES" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Educación financiera del BCRA" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ListItemIcon>
            <Users />
          </ListItemIcon>
          <Typography>Comunidades y foros argentinos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText primary="r/FinanzasArgentina en Reddit" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Grupos en Telegram y Discord" />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      <Card style={{ marginTop: "16px" }}>
        <CardHeader title="Otros consejos prácticos" avatar={<Lightbulb />} />
        <CardContent>
          <List>
            <ListItem>
              <ListItemText primary="Dolarización del ahorro: opciones legales como dólares MEP o stablecoins como USDT." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Diversifica tus inversiones en activos reales para protegerte de la inflación." />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
