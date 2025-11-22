"use client";

import { Box, Typography, Container, Card, CardContent, Button } from "@mui/material";
import eventos from "@/data/eventos"; // ajustá esta ruta si es necesario

export default function EventosFull() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* TÍTULO PRINCIPAL */}
      <Typography
        variant="h3"
        textAlign="center"
        sx={{
          fontWeight: 700,
          mb: 1,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        PARTICIPACIÓN
      </Typography>

      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: 600,
          mb: 5,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        EVENTOS, PREMIOS Y RECONOCIMIENTOS
      </Typography>

      {/* LISTADO DE EVENTOS */}
      {eventos.map((e, i) => (
        <Card
          key={i}
          sx={{
            borderRadius: 3,
            mb: 5,
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              {e.titulo}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                whiteSpace: "pre-line",
                lineHeight: 1.7,
                mb: 3,
                fontSize: "1.1rem",
              }}
            >
              {e.descripcion}
            </Typography>

            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>Fecha:</strong> {e.fecha}
            </Typography>

            <Typography variant="subtitle1" sx={{ mb: 3 }}>
              <strong>Lugar:</strong> {e.lugar}
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8B0000",
                borderRadius: "20px",
                px: 3,
                "&:hover": { backgroundColor: "#6f0000" },
              }}
              href="/contacto"
            >
              Conocer más
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
