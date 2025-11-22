"use client";

import { Box, Typography, Container, Grid, Link, IconButton } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#8B0000",
        color: "white",
        mt: 10,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={4} 
          justifyContent="space-between"
        >
          {/* LOGO / MARCA */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                mb: 1,
              }}
            >
              MENDUKOS
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Alfajores artesanales mendocinos con sabor a tradición.
            </Typography>
          </Grid>

          {/* NAVEGACIÓN */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Navegación
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.7 }}>
              <Link href="/" color="inherit" underline="hover">Inicio</Link>
              <Link href="/productos" color="inherit" underline="hover">Productos</Link>
              <Link href="/nosotros" color="inherit" underline="hover">Nosotros</Link>
              <Link href="/premios" color="inherit" underline="hover">Premios</Link>
              <Link href="/eventos" color="inherit" underline="hover">Eventos</Link>
            </Box>
          </Grid>

          {/* CONTACTO */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Contacto
            </Typography>
            <Typography variant="body2">Tel: +54 9 261 XXX XXXX</Typography>
            <Typography variant="body2">Mendoza, Argentina</Typography>
            <Typography variant="body2">Email: contacto@mendukos.com</Typography>
          </Grid>

          {/* REDES SOCIALES */}
          <Grid 
            item 
            xs={12} 
            sm={12} 
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 3, md: 0 },
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Seguinos
            </Typography>
            <Box>
              <IconButton
                href="#"
                sx={{ color: "white" }}
              >
                <Facebook />
              </IconButton>

              <IconButton
                href="#"
                sx={{ color: "white" }}
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Box
          sx={{
            textAlign: "center",
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Mendukos - Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
