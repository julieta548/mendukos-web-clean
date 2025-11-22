import { Box, Typography, Container, Button } from "@mui/material";
import alfajores from "@/data/alfajores";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

export default function ProductoPage({ params }) {
  const { slug } = params;
  const producto = alfajores.find((a) => a.slug === slug);

  if (!producto) return notFound();

  const MotionImg = motion("img");

  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      {/* IMAGEN GRANDE */}
      <MotionImg
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src={producto.imagen}
        alt={producto.nombre}
        style={{
          width: "100%",
          borderRadius: "16px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          marginBottom: "40px",
        }}
      />

      {/* TÍTULO */}
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
        {producto.nombre}
      </Typography>

      {/* DESCRIPCIÓN */}
      <Typography
        variant="body1"
        sx={{ color: "text.secondary", lineHeight: 1.7, mb: 4 }}
      >
        {producto.descripcion}
      </Typography>

      {/* BOTÓN DE COMPRA */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          borderRadius: "30px",
          px: 4,
          py: 1.2,
          fontWeight: 700,
        }}
        href={`https://wa.me/5492610000000?text=Hola!%20Quiero%20comprar%20el%20alfajor%20${encodeURIComponent(
          producto.nombre
        )}`}
        target="_blank"
      >
        Comprar por WhatsApp
      </Button>
    </Container>
  );
}
