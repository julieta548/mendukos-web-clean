"use client";

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "100vh",
        minHeight: 500,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* CAPA DE OSCURECIMIENTO / DEGRADADO */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
          zIndex: 1,
        }}
      />

      {/* CONTENIDO HERO */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        sx={{
          textAlign: "center",
          color: "white",
          maxWidth: 700,
          zIndex: 2,
          px: 2,
        }}
      >
        <motion.img
          src="/images/logo.svg"
          alt="Logo Mendukos"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            filter: "brightness(0) invert(1)",
            width: "460px",
            maxWidth: "80%",
            display: "block",
            margin: "-4rem auto 0 auto", // ← arriba -4rem, centrado horizontal
          }}
        />

        <Typography
          variant="h4"
          sx={{
            mt: -15,
            color: "#f5f5f5",
            fontWeight: 400,
          }}
        >
          Sabor Mendocino
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 2,
            color: "#e6e6e6",
            maxWidth: 600,
            mx: "auto",
            lineHeight: 1.6,
          }}
        >
          Tapas 100% artesanales, chocolate real y el auténtico sabor mendocino
          en cada bocado.
        </Typography>

        {/* BOTÓN PREMIUM */}
        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            color="secondary"
            href="/productos"
            sx={{
              mt: 4,
              borderRadius: "30px",
              px: 4,
              py: 1.4,
              fontWeight: 700,
              color: "#8B0000",
            }}
          >
            Conocer más
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
