"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import premios from "@/data/premios"; // ajustá la ruta si tu data está en otra carpeta
import AnimatedSection from "./AnimatedSection";

export default function PremiosFull() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* TÍTULO PRINCIPAL */}
      <AnimatedSection>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 1, fontFamily: "'Inter', sans-serif" }}
        >
          ORGULLO MENDOCINO
        </Typography>
      </AnimatedSection>
      <Typography textAlign="center" sx={{ color: "text.secondary", mb: 6 }}>
        CONOCÉ AQUÍ NUESTROS PREMIOS
      </Typography>

      {/* LISTADO DE PREMIOS */}
      <Grid container spacing={3} justifyContent="center">
        {premios.map((p, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 3,
                height: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {p.titulo}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {p.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* TEXTO DESCRIPTIVO PRINCIPAL */}
      <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", mt: 6 }}>
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
        >
          Mendukos fue reconocido a nivel nacional en el Mundial del Alfajor
          2025, obteniendo el tercer lugar en su categoría gracias a su
          inconfundible sabor artesanal y la calidad de sus ingredientes
          mendocinos.
        </Typography>
      </Box>
    </Container>
  );
}
