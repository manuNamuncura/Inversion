import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Container, Card, CardHeader, CardContent, Box } from "@mui/material";
import { TrendingUp, BarChart, Shield, Book, ChevronRight } from "@mui/icons-material";

function InverArgHomePage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <TrendingUp />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            InverArg
          </Typography>
          <Button color="inherit">Características</Button>
          <Button color="inherit">Análisis</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box component="main" sx={{ flex: 1 }}>
        {/* Intro Section */}
        <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h3" align="center" gutterBottom>
              Invierte en Argentina con confianza
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              InverArg te ofrece una plataforma interactiva para invertir en bonos y acciones argentinas. Toma decisiones informadas con nuestro análisis de mercado local.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button variant="contained" color="primary">Comenzar ahora</Button>
              <Button variant="outlined" color="primary">Saber más</Button>
            </Box>
          </Container>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 6 }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Características principales
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
              <Card>
                <CardHeader avatar={<BarChart />} title="Análisis de mercado local" />
                <CardContent>
                  <Typography variant="body2">
                    Accede a análisis detallados del mercado argentino para tomar decisiones informadas.
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader avatar={<Shield />} title="Regulación y cumplimiento" />
                <CardContent>
                  <Typography variant="body2">
                    Operamos bajo las regulaciones de la Comisión Nacional de Valores (CNV) para tu seguridad.
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader avatar={<Book />} title="Educación financiera" />
                <CardContent>
                  <Typography variant="body2">
                    Aprende sobre inversiones con nuestros recursos educativos adaptados al contexto argentino.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Market Analysis Section */}
        <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Análisis de mercado
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
              <Card>
                <CardHeader title="Tendencias del mercado argentino" />
                <CardContent>
                  <Typography variant="body2">
                    Mantente al día con las últimas tendencias y oportunidades en el mercado local.
                  </Typography>
                </CardContent>
              </Card>
              <Card>
                <CardHeader title="Oportunidades y desafíos" />
                <CardContent>
                  <Typography variant="body2">
                    Identifica las mejores oportunidades de inversión y prepárate para los desafíos del mercado argentino.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Regulation Section */}
        <Box sx={{ py: 6 }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Regulación y cumplimiento
            </Typography>
            <Card>
              <CardHeader title="Compromiso con la seguridad" />
              <CardContent>
                <Typography variant="body2">
                  En InverArg, nos tomamos muy en serio la seguridad de tus inversiones. Cumplimos con todas las regulaciones establecidas por la Comisión Nacional de Valores (CNV) y nos mantenemos actualizados con las últimas normas del mercado financiero argentino.
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Box>

        {/* Call to Action Section */}
        <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Comienza a invertir hoy mismo
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Únete a InverArg y descubre las oportunidades de inversión en el mercado argentino.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" color="primary" endIcon={<ChevronRight />}>
                Registrarse ahora
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ py: 2, backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
        <Typography variant="body2" align="center">
          © 2024 InverArg. Todos los derechos reservados.
        </Typography>
        <Box sx={{ mt: 1, display: "flex", justifyContent: "center", gap: 2 }}>
          <Button color="inherit" size="small">Términos de servicio</Button>
          <Button color="inherit" size="small">Privacidad</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default InverArgHomePage;
