import { Button, AppBar, Toolbar, Typography, Container, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { ChevronRight, BarChart, Shield, TrendingUp, Book } from "@mui/icons-material";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <TrendingUp />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            InverArg
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Características</Button>
          <Button color="inherit">Análisis</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>

      <main style={{ flex: 1 }}>
        <section style={{ padding: "3rem 0", backgroundColor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h3" align="center" gutterBottom>
              Invierte en Argentina con confianza
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              InverArg te ofrece una plataforma interactiva para invertir en bonos y acciones argentinas. Toma decisiones informadas con nuestro análisis de mercado local.
            </Typography>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <Button variant="contained" color="primary">Comenzar ahora</Button>
              <Button variant="outlined" color="primary">Saber más</Button>
            </div>
          </Container>
        </section>

        <section style={{ padding: "3rem 0" }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Características principales
            </Typography>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
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
            </div>
          </Container>
        </section>

        <section style={{ padding: "3rem 0", backgroundColor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Análisis de mercado
            </Typography>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
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
            </div>
          </Container>
        </section>

        <section style={{ padding: "3rem 0" }}>
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
        </section>

        <section style={{ padding: "3rem 0", backgroundColor: "#f5f5f5" }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Comienza a invertir hoy mismo
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
              Únete a InverArg y descubre las oportunidades de inversión en el mercado argentino.
            </Typography>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" color="primary" endIcon={<ChevronRight />}>
                Registrarse ahora
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <footer style={{ padding: "1rem", backgroundColor: "#333", color: "#fff", textAlign: "center" }}>
        <Typography variant="body2" align="center">
          © 2024 InverArg. Todos los derechos reservados.
        </Typography>
        <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button color="inherit" size="small">Términos de servicio</Button>
          <Button color="inherit" size="small">Privacidad</Button>
        </div>
      </footer>
    </div>
  );
}
