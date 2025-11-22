"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function TapasArtesanales() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      sx={{
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(4px)",
        borderRadius: 3,
        p: 4,
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        maxWidth: 400,
        mx: "auto",
        position: "relative",
        overflow: "hidden",
        marginTop: "4rem",
        height: "15rem",
      }}
    >
      {/* ÍCONO / IMAGEN */}
      <Box
        component="img"
        src="/images/tapas.png"
        alt="Chocolate real"
        sx={{
          width: 80,
          height: 80,
          objectFit: "contain",
          mx: "auto",
          mb: 2,
          filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.2))",
        }}
      />

      {/* TÍTULO */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: "#8B0000",
          mb: 1,
        }}
      >
        Tapas 100% Artesanales
      </Typography>

      {/* DESCRIPCIÓN */}
      <Typography
        variant="body1"
        sx={{
          color: "#3a3a3a",
          lineHeight: 1.6,
        }}
      >
        Cada tapa es elaborada de forma manual, con dedicación y precisión en
        cada paso. <b>No utilizamos procesos industriales</b>: amasamos, cortamos y
        horneamos siguiendo técnicas tradicionales.
      </Typography>
    </Box>
  );
}
