import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Card,
  CardHeader,
  CardContent,
  Box,
  ButtonBase,
} from "@mui/material";
import {
  TrendingUp,
  BarChart,
  Shield,
  Book,
  ChevronRight,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ borderRadius: "0%", mr: 2 }}
          >
            <TrendingUp />
            <Typography variant="h6" component="div">
              InvertirGO
            </Typography>
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <Button color="inherit">Características</Button>
            <Button color="inherit">Análisis</Button>
            <Button color="inherit">Contacto</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box component="main" sx={{ flex: 1 }}>
        {/* Intro Section */}
        <Box sx={{ height: "50vh", py: 6, backgroundColor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h2" align="center" gutterBottom>
              Invierte en Argentina con confianza
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              InvertirGO te ofrece una plataforma interactiva para invertir en
              bonos y acciones argentinas. Toma decisiones informadas con
              nuestro análisis de mercado local.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button variant="outlined" color="primary">
                Saber más
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: { xs: 3, sm: 6 }, px: { xs: 2, sm: 0 } }}>
          <Typography variant="h3" align="center" gutterBottom>
            Características principales
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)", // Una sola columna en móviles
                sm: "repeat(auto-fit, minmax(280px, 1fr))",
              },
              gap: 2,
            }}
          >
            {/* Navegacion analisis-mercado*/}
            <ButtonBase
              onClick={() => navigate("/analisis-mercado")}
              sx={{
                width: "100%", // Asegura que la tarjeta se adapte
                display: "block",
                textAlign: "left",
              }}
            >
              <Card className="feature-title">
                <CardHeader
                  avatar={<BarChart />}
                  title="Análisis de mercado local"
                />
                <CardContent>
                  <Typography variant="body2">
                    Accede a análisis detallados del mercado argentino para
                    tomar decisiones informadas.
                  </Typography>
                </CardContent>
              </Card>
            </ButtonBase>

            <Card className="feature-title">
              <CardHeader
                avatar={<Shield />}
                title="Regulación y cumplimiento"
              />
              <CardContent>
                <Typography variant="body2">
                  Operamos bajo las regulaciones de la Comisión Nacional de
                  Valores (CNV) para tu seguridad.
                </Typography>
              </CardContent>
            </Card>

            <ButtonBase
              onClick={() => navigate("/educacion-financiera")}
              sx={{
                width: "100%", // Asegura que la tarjeta se adapte
                display: "block",
                textAlign: "left",
              }}
            >
              <Card className="feature-title">
                <CardHeader 
                  avatar={<Book />} 
                  title="Educación financiera" 
                />
                <CardContent>
                  <Typography variant="body2">
                    Aprende sobre inversiones con nuestros recursos educativos
                    adaptados al contexto argentino.
                  </Typography>
                </CardContent>
              </Card>
            </ButtonBase>
          </Box>
        </Box>

        {/* Market Analysis Section */}
        <Box sx={{ height: "50vh", py: 6, backgroundColor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h3" align="center" gutterBottom>
              Análisis de mercado
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 2,
              }}
            >
              <ButtonBase onClick={() => navigate("/tendencias")}>
                <Card>
                  <CardHeader title="Tendencias del mercado argentino" />
                  <CardContent>
                    <Typography variant="body2">
                      Mantente al día con las últimas tendencias y oportunidades
                      en el mercado local.
                    </Typography>
                  </CardContent>
                </Card>
              </ButtonBase>
              <Card>
                <CardHeader title="Oportunidades y desafíos" />
                <CardContent>
                  <Typography variant="body2">
                    Identifica las mejores oportunidades de inversión y
                    prepárate para los desafíos del mercado argentino.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Regulation Section */}
        <Box sx={{ height: "50vh", py: 6 }}>
          <Container>
            <Typography variant="h3" align="center" gutterBottom>
              Regulación y cumplimiento
            </Typography>
            <Card>
              <CardHeader title="Compromiso con la seguridad" />
              <CardContent>
                <Typography variant="body2">
                  En InvertirGO, nos tomamos muy en serio la seguridad de tus
                  inversiones. Cumplimos con todas las regulaciones establecidas
                  por la Comisión Nacional de Valores (CNV) y nos mantenemos
                  actualizados con las últimas normas del mercado financiero
                  argentino.
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Box>

        {/* Call to Action Section */}
        <Box
          sx={{
            height: "50vh",
            py: 5,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Container>
            <Typography variant="h3" align="center" gutterBottom>
              Comienza a invertir hoy mismo
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Únete a InvertirGO y descubre las oportunidades de inversión en el
              mercado argentino.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<ChevronRight />}
              >
                Registrarse ahora
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" align="center">
          © 2024 InvertirGO. Todos los derechos reservados.
        </Typography>
        <Box sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button color="inherit" size="small">
            Términos de servicio
          </Button>
          <Button color="inherit" size="small">
            Privacidad
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
