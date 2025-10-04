"use client";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";

const events = [
  {
    title: "Mundial del Alfajor 2024",
    text: "Representando a Mendoza entre los mejores del país.",
    img: "/images/evento1.jpg",
    link: "/event-mundial",
  },
  {
    title: "Fiesta de las Colectividades 2025",
    text: "Visitá nuestro stand este fin de semana.",
    img: "/images/evento2.jpg",
    link: "/event-colectividades",
  },
];

export default function EventsSection() {
  // Handler seguro para abrir nueva pestaña solo en cliente
  const handleClick = useCallback((link) => {
    if (typeof window !== "undefined") {
      window.open(link, "_blank");
    }
  }, []);

  return (
    <Box
      id="eventos"
      sx={{ py: 10, px: 3, backgroundColor: "var(--mendukos-beige)" }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ color: "var(--mendukos-brown)" }}
      >
        Participaciones y reconocimientos
      </Typography>
      <Typography textAlign="center" mb={5}>
        Llevamos el sabor mendocino a los grandes eventos.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((e) => (
          <Grid item xs={12} sm={6} md={4} key={e.title}>
            <Paper
              elevation={3}
              sx={{ p: 2, borderRadius: 4, cursor: "pointer", textAlign: "center" }}
              onClick={() => handleClick(e.link)}
            >
              <Image
                src={e.img}
                alt={e.title}
                width={400}
                height={250}
                style={{ borderRadius: 12 }}
              />
              <Typography variant="h6" mt={2}>
                {e.title}
              </Typography>
              <Typography variant="body2">{e.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
