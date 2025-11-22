"use client";

import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function ProductoView({ producto }) {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Box
        component={motion.img}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        src={producto.imagen}
        alt={producto.nombre}
        sx={{
          width: "100%",
          borderRadius: 4,
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          mb: 5,
        }}
      />

      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
        {producto.nombre}
      </Typography>

      <Typography sx={{ color: "text.secondary", lineHeight: 1.7, mb: 4 }}>
        {producto.descripcion}
      </Typography>

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
