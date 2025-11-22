"use client";

import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      sx={{
        background: "linear-gradient(90deg, #8B0000, #E7B10A)",
        color: "white",
        textAlign: "center",
        py: 2,
        px: 2,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        🎉 ¡Mendukos estará presente en la Fiesta de las Colectividades 2025! 🎉
      </Typography>

      <Typography sx={{ mt: 1, mb: 2 }}>
        Vení a probar nuestros alfajores artesanales 🍫
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "#8B0000",
          fontWeight: "bold",
          borderRadius: "20px",
          "&:hover": { backgroundColor: "#f5f5f5" },
        }}
      >
        Más info
      </Button>
    </Box>
  );
}
